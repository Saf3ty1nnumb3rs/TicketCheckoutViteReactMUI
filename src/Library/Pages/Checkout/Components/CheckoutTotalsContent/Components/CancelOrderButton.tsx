import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import HoverButton from 'Library/Components/Buttons/HoverButton/HoverButton';
import { useIntl } from 'react-intl';
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
        color="info"
        disabled={!cartCount}
        onClick={handleClickOpen}
        sx={{ pl: 0, mb: '1rem' }}
      >
        {formatMessage({ id: 'cancelOrder' })}
      </HoverButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Are you sure you want to cancel your order?
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2">
            The items in your cart cannot be recovered.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No, go back
          </Button>
          <Button onClick={handleCancel} color="secondary">
            Yes, cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
