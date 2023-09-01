import { Box, Button, DialogActions, TextField, Typography } from '@mui/material';
import { BlueOutlineButton } from 'Library/Components/Buttons';
import { ErrorMessage, Field, Form, useFormikContext } from 'formik';
import { useIntl } from 'react-intl';

interface AddCardFormProps {
  handleCloseDialog: () => void;
  newCardId?: string;
}

export const AddCardForm = ({ handleCloseDialog, newCardId }: AddCardFormProps) => {
  const { isSubmitting, isValid } = useFormikContext();
  const { formatMessage } = useIntl();
  return (
    <Form data-testid="add-card-form">
      <Box my="1rem">
        <Field
          data-testid="card-name-input"
          name="cardName"
          type="text"
          as={TextField}
          label="Card Name"
          fullWidth
        />
        <Typography color="error">
          <ErrorMessage name="cardName" component="div" />
        </Typography>
      </Box>
      <Box my="1rem">
        <Field
          data-testid="last-4-input"
          name="last4"
          type="text"
          as={TextField}
          label="Last 4 Digits"
          fullWidth
        />
        <Typography color="error">
          <ErrorMessage name="last4" component="div" />
        </Typography>
      </Box>
      <Box my="1rem">
        <Field
          data-testid="exp-input"
          name="exp"
          type="text"
          as={TextField}
          label="Expiry Date"
          fullWidth
        />
        <Typography color="error">
          <ErrorMessage name="exp" component="div" />
        </Typography>
      </Box>
      <DialogActions>
        <Button
          data-testid="cancel-button"
          onClick={handleCloseDialog}
          color="primary"
        >
          Cancel
        </Button>
        <BlueOutlineButton
          data-testid="confirm-button"
          type="submit"
          disabled={isSubmitting || !isValid}
        >
          {formatMessage({ id: newCardId ? 'confirmEdit' : 'add'})}
        </BlueOutlineButton>
      </DialogActions>
    </Form>
  );
};