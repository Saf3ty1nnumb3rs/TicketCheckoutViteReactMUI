import { FormatNumberOptions, FormattedNumber, useIntl } from 'react-intl';
import { Box, Button, Stack, Typography } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { TotalsSection } from './Components/TotalsSection';
import { useCartContext } from 'Library/Contexts/Cart';
import { ValueLine } from './Components/ValueLine';
import { calculateLineItemFees } from 'Library/Utils/fees/calculateLineItemFees';
import { ORDER_PROCESSING_FEE } from 'Library/constants';
import HoverButton from 'Library/Components/Buttons/HoverButton/HoverButton';
import { usePaymentContext } from 'Library/Contexts/Payment';
import { TermsCheckbox } from './Components/TOSCheckbox';
import { useToast } from 'Library/Hooks/useToast/useToast';

const numberFormatOptions: FormatNumberOptions = {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

const CheckoutTicketCost = ({ lineItems }: { lineItems: TicketLineItem[] }) => {
  const { formatMessage } = useIntl();
  return (
    <TotalsSection header={formatMessage({ id: 'tickets'})}>
      {lineItems.length ? lineItems.map((lit) => {
        const { label, lineTotal, price, quantity } =  lit;
        return (
          <ValueLine
            label={
              formatMessage({ id: '_ARTIST_PRICE_QUANTITY' }, { artist: label, price, quantity })
            }
            value={lineTotal} 
          />
        );
      }) : (
        <Typography>{formatMessage({ id: 'noTicketsSelected' })}</Typography>
      )}
    </TotalsSection>
  );
};

const CheckoutTicketFees = ({ lineItems }: { lineItems: TicketLineItem[] }) => {
  const { formatMessage, formatNumber } = useIntl();
  return (
    <TotalsSection header={formatMessage({ id: 'fees'})}>
        {!!lineItems.length ? lineItems.map((lit) => {
          const { feePer, totalFees, quantity } =  lit;
          const feePerTicketSet = formatNumber(feePer, numberFormatOptions);
          return (
            <ValueLine
              label={
                formatMessage({ id: 'serviceFee_FEE_QUANTITY' }, { fee: feePerTicketSet, quantity })
              }
              value={totalFees} 
            />
          );
        }) : (
          <Typography>{formatMessage({ id: 'noTicketsSelected' })}</Typography>
        )}
        {!!lineItems.length && (
          <ValueLine label={formatMessage({ id: 'orderProcessingFee' })} value={ORDER_PROCESSING_FEE} />
        )}
      </TotalsSection>
  );
};
export const CheckoutTotals = () => {
  const [checkoutTotal, setCheckoutTotal] = useState(0);
  const { formatMessage, formatNumber } = useIntl();
  const { cartContents, setCartContents, setCartCount } = useCartContext();
  const { isTermsSelected, selectedCard } = usePaymentContext();

  const { addToast } = useToast();
  const ticketLineItemTotals: TicketLineItem[] = useMemo(() => {
    const lineItems = cartContents.map((cartItem) => {
      const { ticket, quantity } = cartItem;
      const totalCosts = calculateLineItemFees(ticket.ticketPrice, quantity);
      return {
        price: formatNumber(Number(ticket.ticketPrice), numberFormatOptions) ,
        quantity,
        label: `${ticket.artist.name}`,
        lineTotal: ticket.ticketPrice * quantity,
        feePer: totalCosts.feePerTicket,
        totalFees: totalCosts.totalFee,
        totalCost: totalCosts.totalCost,
      };
    });
    return lineItems;
  }, [cartContents]);

  useEffect(() => {
    if (ticketLineItemTotals.length) {
      const total = ticketLineItemTotals.reduce((acc, lit) => acc + lit.totalCost, 0);
      setCheckoutTotal(total + ORDER_PROCESSING_FEE);
    } else {
      setCheckoutTotal(0);
    }
  }, [ticketLineItemTotals])

  const cancelOrder = useCallback(() => {
    setCartCount(0);
    setCartContents([]);
    addToast(
      'Your shopping cart has been emptied',
      {
        variant: 'filled',
        severity: 'error',
      },
    );
  }, [])
  return(
    <Box
      sx={{
        border: '1px solid #000000',
        borderRadius: '0.5rem',
        backgroundColor: 'transparent',
        padding: '1rem',
        my: '0.5rem',
        // minHeight: '100%',
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          <Typography fontSize="1.5rem" pr="0.5rem">{formatMessage({ id: 'total' })}</Typography>
          <CheckCircleOutline color="success" sx={{ fontSize: '2rem' }} />
        </Stack>
        <Typography fontSize="1.5rem">
          <FormattedNumber value={checkoutTotal} {...numberFormatOptions} />
        </Typography>
      </Stack>
      {/* TICKET COSTS */}
      <CheckoutTicketCost lineItems={ticketLineItemTotals} />
      {/* NOTES FROM SELLER */}
      <TotalsSection header={formatMessage({ id: 'notesFromSeller' })}>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </TotalsSection>
      {/* FEES */}
      <CheckoutTicketFees lineItems={ticketLineItemTotals} />
      {/* DELIVERY */}
      <TotalsSection header={formatMessage({ id: 'delivery' })}>
        <Stack direction="row"justifyContent="space-between">
          <Typography variant="body2">
            {formatMessage({ id: 'mobileEntry' })}
          </Typography>
          <Typography variant="body2">
            {formatMessage({ id: 'free' })}
          </Typography>
        </Stack>
      </TotalsSection>
      <HoverButton // normally a cancel button would lead to a dialog, skipping that for now
        color="info"
        onClick={cancelOrder}
        sx={{ pl: 0, mb: '1rem' }}
      >
        {formatMessage({ id: 'cancelOrder' })}
      </HoverButton>
      <Typography variant="body1" fontWeight="bold" mb="0.75rem">
        {formatMessage({ id: 'allSalesAreFinalNoRefunds' })}
      </Typography>
      <TermsCheckbox />
      <Button
        variant="contained"
        color="success"
        sx={{ width: '100%', mt: '1rem' }}
        onClick={
          () => {
            addToast(formatMessage({ id: 'yourOrderHasBeenSubmittedSuccessfully' }),{
              variant: 'filled',
              severity: 'success',
            })
        }}
        disabled={!selectedCard || !cartContents.length || !isTermsSelected}
      >
       {formatMessage({ id : 'placeOrder' })}
      </Button>
      <Typography fontSize="0.75rem" fontWeight="bold" mt="0.75rem">
        {formatMessage({ id: 'exceptionsMayApplySeeOurTermsOfUse' })}
      </Typography>
    </Box>
  );
};