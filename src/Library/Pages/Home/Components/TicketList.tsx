import { Checkbox, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { dayjs } from 'Library/Utils/dates';
import { availableConcertData } from 'assets/data/availableConcertData';
import { TICKET_DATE_FORMAT } from 'Library/constants';
import { useCartContext } from 'Library/Contexts/Cart';

const TicketList: React.FC = () => {
  const { cartContents, onCartChange } = useCartContext();
  const handleToggle = (ticket: Ticket) => {
    const isCurrentlySelected = cartContents.some((t) => t.id === ticket.id);

    if (!isCurrentlySelected) {
      onCartChange('add', ticket);
    } else {
      onCartChange('remove', ticket);
    };
  };

  return (
    <List>
      {availableConcertData.map((ticket, index) => (
        <ListItem key={index} onClick={() => handleToggle(ticket)}>
          <Checkbox
            edge="start"
            checked={cartContents.some((t) => t.id === ticket.id)}
          />
          <ListItemText
            primary={`${ticket.artist.name}, ${dayjs(ticket.eventDate).format(TICKET_DATE_FORMAT)}`}
            secondary={`Venue: ${ticket.venue.name}, Price: $${ticket.ticketPrice}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default TicketList;
