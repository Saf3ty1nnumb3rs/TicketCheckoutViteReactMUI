import AddIcon from '@mui/icons-material/Add';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import {
  Typography,
  Button,
  Divider,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
} from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import * as Yup from 'yup';
import { usePaymentContext } from 'Library/Contexts/Payment';
import { dayjs } from 'Library/Utils/dates';
import { AddCardForm } from './Components/AddCardForm';
import { useToast } from 'Library/Hooks/useToast/useToast';
import { CreditCardCard } from './Components/CreditCardCard';

const PaymentCardContent = () => {
  const { cards, setCards, selectedCard, setSelectedCard } = usePaymentContext();
  const [openDialog, setOpenDialog] = useState(false);
  const [newCard, setNewCard] = useState<Card>({ cardName: '', last4: '', exp: '' });
  const { formatMessage } = useIntl();
  const { addToast } = useToast();
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
    addToast(
      formatMessage({ id: 'cardAddedSuccessfully'}),
      {
        variant: 'filled',
        severity: 'success',
      },
    )
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
    addToast(
      formatMessage({ id: 'cardUpdatedSuccessfully'}),
      {
        variant: 'filled',
        severity: 'info',
      },
    )
    handleCloseDialog();
  };

  return (
    <Container maxWidth="md">
      <Typography fontSize="1.25rem" mt="1.25rem" px="0.5rem" fontWeight="bold">
        <FormattedMessage id="selectPaymentMethod" />
      </Typography>
      <Box overflow="auto" maxHeight="29.5rem">
        {cards.map((card, i) => (
          <CreditCardCard
            key={card.id || `card${i}`}
            card={card}
            handleCardSelection={handleCardSelection}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </Box>
      <Divider />
      <Button
        data-testid="add-card-button"
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
        {formatMessage({ id: 'addPaymentMethod' })}
      </Button>
      <Divider />
      <Dialog
        data-testid="add-card-dialog"
        open={openDialog}
        onClose={handleCloseDialog}
      >
        <DialogTitle>
          {formatMessage({ id: newCard.id ? 'editCard' : 'addNewCard' })}
        </DialogTitle>
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
