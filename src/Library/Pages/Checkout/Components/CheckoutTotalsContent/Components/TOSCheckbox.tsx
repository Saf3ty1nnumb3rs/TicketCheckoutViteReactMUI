import React, { useState } from 'react';
import { FormControlLabel, Checkbox, Dialog, DialogTitle, DialogContent, DialogActions, Button, Box } from '@mui/material';
import { usePaymentContext } from 'Library/Contexts/Payment';
import HoverButton from 'Library/Components/Buttons/HoverButton/HoverButton';

export const  TermsCheckbox = () => {
  const { isTermsSelected, setIsTermsSelected } = usePaymentContext();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsTermsSelected(event.target.checked);
  };

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox 
            checked={isTermsSelected} 
            onChange={handleCheckboxChange} 
          />
        }
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: "wrap" }}>
            <span style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
              I have read and agree to the
            </span>
            <HoverButton sx={{ height: '1.25rem', flexShrink: 0, pl: '0.3rem', py: 0 }} onClick={handleDialogOpen}>
              Terms of Service
            </HoverButton>
          </Box>
        }
      />

      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Terms of Service</DialogTitle>
        <DialogContent>
          {/* Your terms of service content here */}
          Terms of Service Content
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
