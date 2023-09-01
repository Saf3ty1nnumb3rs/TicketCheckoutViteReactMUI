import AddIcon from '@mui/icons-material/Add';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Radio,
  FormControlLabel,
  Divider,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
} from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import * as Yup from 'yup';
import { usePaymentContext } from 'Library/Contexts/Payment';
import { dayjs } from 'Library/Utils/dates';
import { AddCardForm } from './AddCardForm';

const PaymentCardContent = () => {
  const { cards, setCards, selectedCard, setSelectedCard } = usePaymentContext();
  const [openDialog, setOpenDialog] = useState(false);
  const [newCard, setNewCard] = useState<Card>({ cardName: '', last4: '', exp: '' });

// AddCardForm validation schema with Yup
const CardSchema = Yup.object().shape({
  cardName: Yup.string().required('Required').max(40, 'Must be 40 characters or less'),
  last4: Yup.string()
    .length(4, 'Must be 4 digits')
    .required('Required'),
  exp: Yup.string()
    .matches(/(0[1-9]|1[0-2])\/\d{2}/, 'Invalid date format')
    .max(5, 'Valid date format: MM/YY')
    .test(
      'is-future',
      'The date has already passed',
      (value) => {
        if (!value) return false;
  
        // Parse the 'MM/YY' to 'YYYY-MM-DD' format to make it compatible with dayjs
        const [month, year] = value.split('/');
        const parsedDate = dayjs(`20${year}-${month}-01`);
  
        // Check if the date is in the past
        return parsedDate.isAfter(dayjs());
      }
    )
    .required('Required'),
});

  const handleCardSelection = (id: string) => {
    setSelectedCard(id);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddCard = (values: Card) => {
    const newCardId = (cards.length + 1).toString();
    cards.push({ ...values, id: newCardId });
    setNewCard({ cardName: '', last4: '', exp: '' });
    handleCloseDialog();
  };

  const handleDelete = (id: string) => {
    const updatedCards = cards.filter(card => card.id !== id);
    setCards(updatedCards);
    if (selectedCard === id) {
      setSelectedCard('');
    }
  };
  
  const handleEdit = (id: string) => {
    const cardToEdit = cards.find(card => card.id === id);
    if (cardToEdit) {
      setNewCard(cardToEdit);
      setOpenDialog(true);
    }
  };
  
  const handleEditConfirm = (values: Card) => {
    const updatedCards = cards.map(card => 
      card.id === newCard.id ? { ...card, ...values } : card
    );
    setCards(updatedCards);
    handleCloseDialog();
  };

  return (
    <Container maxWidth="md">
      <Typography fontSize="1.25rem" mt="1.25rem" px="0.5rem" fontWeight="bold">
        <FormattedMessage id="selectPaymentMethod" />
      </Typography>
      <Box overflow="auto" maxHeight="29.5rem">
        {cards.map((card) => (
          <Card key={card.id} style={{ marginBottom: '15px' }}>
            <CardContent>
              <FormControlLabel
                value={card.id}
                control={
                  <Radio
                    checked={selectedCard === card.id}
                    onChange={() => handleCardSelection(card.id || '')}
                  />
                }
                label={
                  <>
                    <Typography variant="h6">
                      {card.cardName} **** **** **** {card.last4}
                    </Typography>
                    <Typography color="textSecondary">
                      <FormattedMessage id="expiry_EXPIRATION_" values={{ expiration: card.exp}} />
                    </Typography>
                  </>
                }
                labelPlacement="end"
              />
            </CardContent>
            <Divider />
            <CardActions>
              <Button size="small" color="primary" onClick={() => handleEdit(card.id || '')}>
                Edit{/* intl18  */}
              </Button>
              <Button size="small" color="secondary" onClick={() => handleDelete(card.id || '')}>
                Delete{/* intl18  */}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      <Divider />
      <Button
        variant="outlined"
        color="primary"
        onClick={handleOpenDialog}
        startIcon={
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <AddIcon sx={{ mr: '0.25rem' }} />
            <CreditCardIcon />
          </span>
        }
        sx={{
          my: '1rem',
        }}
      >
        Add Payment Method{/* intl18  */}
      </Button>
      <Divider />
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{newCard.id ? 'Edit Card' : 'Add New Card'}</DialogTitle>{/* intl18  */}
        <DialogContent
          sx={{
            width: '26.25rem',
            minHeight: '26rem',
          }}
        >
          <Formik
            initialValues={newCard}
            validationSchema={CardSchema}
            onSubmit={(values, { setSubmitting }) => {
              if (newCard.id) {
                handleEditConfirm(values);
              } else {
                handleAddCard(values);
              }
              setSubmitting(false);
            }}
          >
            <AddCardForm handleCloseDialog={handleCloseDialog} newCardId={newCard.id} />
          </Formik>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default PaymentCardContent;
