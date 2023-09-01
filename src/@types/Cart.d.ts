interface CartItem {
  id: string;
  ticket: Ticket;
  quantity: number;
}

interface Cart {
  items: CartItem[];
  total: number;
};

type CartAction = 'add' | 'increment' | 'decrement' | 'remove';
