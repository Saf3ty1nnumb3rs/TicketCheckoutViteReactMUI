import { Box, Grid, Typography, useTheme } from '@mui/material';
import { dayjs } from 'Library/Utils/dates';
import { Page } from 'Library/Components/Page';
import { Carlisle } from 'Library/Images';
import { SectionBox } from './Components/SectionBox';
import { useIntl } from 'react-intl';
import { TICKET_DATE_FORMAT } from 'Library/constants';
import PaymentCardContent from './Components/PaymentCardContent';
import { CheckoutTotals } from './Components/CheckoutTotalsContent/CheckoutTotals';

const CheckoutPage = () => {
  const { formatMessage } = useIntl();
  const { palette } = useTheme();

  return (
    <Page>
      <Grid 
        container
        justifyContent="center"
        spacing={2}
        height={{
          sm: '100%',
        }}
        minHeight="51.0625rem"
      >
        <Grid 
          item
          md={0}
          lg={3}
          display={{ sm: 'none', md: 'none', lg: 'grid' }}
        >
          <Box
            display={{
              xs: 'none',
              sm: 'none',
              md: 'flex',
            }}
            flexGrow="1"
            minHeight="90vh"
            justifyContent="center"
          >
            <Box
              component="img"
              sx={{
                height: '43vw',
                width: '24vw',
                display: {xs: 'none', sm: 'none', md: 'none', lg: 'block'},
                p: '1.5rem',
                pl: '0',
                borderRadius: '4px',
              }}
              alt="Willi Carlisle Poster image"
              src={Carlisle}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={5}
          minHeight={{
            sm: '100%',
            md: '51.0625rem',
          }}
        >
          <SectionBox
            header={formatMessage({ id: 'delivery' })}
          >
            <Typography fontSize="1.25rem" px="0.5rem" fontWeight="bold">{formatMessage({ id: 'mobileEntryFree'})}</Typography>
            <Typography fontSize="1rem" px="0.5rem" color={palette.grey['500']}>
              {formatMessage({
                id: 'ticketsAvailableBy_DATE_',
              }, {
                date: dayjs().add(7, 'd').format(TICKET_DATE_FORMAT),
              })}
            </Typography>
            <Typography fontSize="1rem" px="0.5rem" color={palette.grey['500']}>
              {formatMessage({ id: 'theseMobileTicketsMayBeTransferredToYouFromATrustedSeller' })}
            </Typography>
          </SectionBox>
          <SectionBox
            header={formatMessage({ id: 'payment'})}
            sx={{ minHeight: '38.8125rem' }}
          >
            <PaymentCardContent />
          </SectionBox>
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={5}
          lg={4}
          minHeight={{
            sm: '100%',
            md: '51.0625rem',
          }}
        >
          <CheckoutTotals />
        </Grid>
      </Grid>
    </Page>
  );
};

export default CheckoutPage;
