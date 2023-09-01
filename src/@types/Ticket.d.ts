interface Venue {
  name: string;
  address: string;
}

interface Artist {
  name: string;
  genre: string;
}

interface Ticket {
  id: string;
  venue: Venue;
  artist: Artist;
  ticketPrice: number;
  eventDate: string;
}
interface TicketLineItem {
  price: string;
  quantity: number;
  label: string;
  lineTotal: number;
  feePer: number;
  totalFees: number;
  totalCost: number;
}
