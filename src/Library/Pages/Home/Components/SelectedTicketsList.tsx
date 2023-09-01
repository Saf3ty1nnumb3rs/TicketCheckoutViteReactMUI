import React from 'react';
import { List, ListItem, ListItemText, IconButton, Badge, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCartContext } from 'Library/Contexts/Cart';
import { dayjs } from 'Library/Utils/dates';
import { TICKET_DATE_FORMAT } from 'Library/constants';

const SelectedTicketList: React.FC = () => {
  const { cartContents, onCartChange } = useCartContext();

  return (
    <List>
      {cartContents.map((cartItem, index) => {
        const { ticket: { artist, ticketPrice, eventDate } } = cartItem;
        return (
        <ListItem
          key={index}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Box flexGrow={1}>
            <Badge badgeContent={cartItem.quantity} color="primary">
              <ListItemText
                primary={`${artist.name}, ${dayjs(eventDate).format(TICKET_DATE_FORMAT)}`}
                secondary={`Price: $${ticketPrice}`}
              />
            </Badge>
          </Box>
          <IconButton edge="end" onClick={() => onCartChange('increment', cartItem.ticket)}>
            <AddIcon />
          </IconButton>
          <IconButton edge="end" onClick={() => onCartChange('decrement', cartItem.ticket)}>
            <RemoveIcon />
          </IconButton>
          <IconButton edge="end" onClick={() => onCartChange('remove', cartItem.ticket)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      )})}
    </List>
  );
};

export default SelectedTicketList;
