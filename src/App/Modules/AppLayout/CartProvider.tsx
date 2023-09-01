import { CartContext } from 'Library/Contexts/Cart';
import { ReactNode, useState } from 'react';

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartContents, setCartContents] = useState<CartItem[]>([]); // [Ticket, Ticket, Ticket
  const [cartCount, setCartCount] = useState<number>(0);

  const onCartChange = (action: CartAction, ticket: Ticket) => {
    switch (action) {
      case 'add':
        setCartContents(
          [
            ...cartContents,
            {
              id: ticket.id,
              ticket,
              quantity: 1,
            },
          ]);
        setCartCount(cartCount + 1);
        break;
      case 'increment':
        const incrementedCartItemQuantity = cartContents.map((item) => {
          if (item.id === ticket.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        setCartContents(incrementedCartItemQuantity);
        setCartCount(cartCount + 1);
        break;
      case 'decrement':
        const decrementedCartItemQuantity = cartContents.map((item) => {
          if (item.id === ticket.id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
        setCartContents(decrementedCartItemQuantity.filter((item) => item.quantity > 0));
        setCartCount(cartCount - 1);
        break;
      case 'remove':
        const filteredContents = cartContents.filter((item) => {
          if (item.id === ticket.id) setCartCount(cartCount - item.quantity);
          return item.id !== ticket.id;
        })
        setCartContents(filteredContents);
        break;
      default:
        break;
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartContents,
        setCartContents,
        cartCount,
        onCartChange,
        setCartCount,
      }}>
      {children}
    </CartContext.Provider>
  );
};
