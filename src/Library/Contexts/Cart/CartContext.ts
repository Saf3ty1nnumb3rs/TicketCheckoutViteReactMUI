import noop from 'lodash/noop';
import { Context, createContext, useContext } from 'react';

export interface CartContextInterface {
  onCartChange: (action: CartAction, ticket: Ticket) => void;
  cartContents: CartItem[]; // update this to cart contents
  setCartContents: React.Dispatch<React.SetStateAction<CartItem[]>>; // update this to set cart contents
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>
}

export const CartContext: Context<CartContextInterface> =
  createContext<CartContextInterface>({
    onCartChange: noop,
    cartContents: [],
    setCartContents: noop,
    cartCount: 0,
    setCartCount: noop,
  });

export const useCartContext = () => useContext(CartContext);
