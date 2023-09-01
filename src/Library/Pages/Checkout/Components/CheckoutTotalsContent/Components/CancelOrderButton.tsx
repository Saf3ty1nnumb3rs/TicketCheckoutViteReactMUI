import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import HoverButton from 'Library/Components/Buttons/HoverButton/HoverButton';
import { FormattedMessage, useIntl } from 'react-intl';
import { useCartContext } from 'Library/Contexts/Cart';

export const CancelOrderButton = ({ handleCancelOrder }: { handleCancelOrder: () => void }) => {
  const [open, setOpen] = useState(false);
  const {formatMessage } = useIntl();
  const { cartCount } = useCartContext();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    handleCancelOrder();
    setOpen(false);
  };

  return (
    <>
      <HoverButton
        data-testid="cancel-order-button"
        color="info"
        disabled={!cartCount}
        onClick={handleClickOpen}
        sx={{ pl: 0, mb: '1rem' }}
      >
        {formatMessage({ id: 'cancelOrder' })}
      </HoverButton>
      <Dialog
        data-testid="cancel-order-dialog"
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          <FormattedMessage id="areYouSureYouWantToCancelYourOrder" />
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2">
            <FormattedMessage id="theItemsInYourCartCannotBeRecovered" />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
          onClick={handleClose} color="primary">
            <FormattedMessage id="noGoBack" />
          </Button>
          <Button onClick={handleCancel} color="secondary">
            <FormattedMessage id="yesCancel" />
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
