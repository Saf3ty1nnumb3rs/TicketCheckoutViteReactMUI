import { Button, Card, CardActions, CardContent, Divider, FormControlLabel, Radio, Typography } from '@mui/material';
import { usePaymentContext } from 'Library/Contexts/Payment';
import { FormattedMessage } from 'react-intl';

interface CreditCardCardProps {
  key: string;
  card: Card;
  handleCardSelection: (id: string) => void;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
}

export const CreditCardCard = ({
  key,
  card,
  handleCardSelection,
  handleEdit,
  handleDelete,
}: CreditCardCardProps) => {
  const { selectedCard } = usePaymentContext();
  return (
    <Card
      key={key}
      style={{ marginBottom: '15px' }}
      data-testid="credit-card-card"
    >
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
        <Button
          data-testid="card-edit-button"
          size="small"
          color="primary"
          onClick={() => handleEdit(card.id || '')}
        >
          <FormattedMessage id="edit" />
        </Button>
        <Button
          data-testid="card-delete-button"
          size="small"
          color="secondary"
          onClick={() => handleDelete(card.id || '')}
        >
          <FormattedMessage id="delete" />
        </Button>
      </CardActions>
    </Card>
  );
};
