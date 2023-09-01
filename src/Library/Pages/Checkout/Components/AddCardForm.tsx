import { Box, Button, DialogActions, TextField, Typography } from "@mui/material";
import { BlueOutlineButton } from "Library/Components/Buttons";
import { ErrorMessage, Field, Form, useFormikContext } from "formik";

interface AddCardFormProps {
  handleCloseDialog: () => void;
  newCardId?: string;
}

export const AddCardForm = ({ handleCloseDialog, newCardId }: AddCardFormProps) => {
  const { isSubmitting, isValid } = useFormikContext();
  return (
    <Form>
      <Box my="1rem">
        <Field
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
        <Button onClick={handleCloseDialog} color="primary">
          Cancel
        </Button>
        <BlueOutlineButton
          type="submit"
          disabled={isSubmitting || !isValid}
        >
          {newCardId ? 'Confirm Edit' : 'Add'}{/* intl18  */}
        </BlueOutlineButton>
      </DialogActions>
    </Form>
  );
};