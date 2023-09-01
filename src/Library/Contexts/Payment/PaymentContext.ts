import noop from 'lodash/noop';
import { Context, createContext, useContext } from 'react';

export interface PaymentContextInterface {
  isTermsSelected: boolean;
  setIsTermsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCard: string;
  setSelectedCard: React.Dispatch<React.SetStateAction<string>>;
  cards: Card[];
  setCards: React.Dispatch<React.SetStateAction<Card[]>>
};
const cards: Card[] = [
  { id: '1', cardName: 'Visa', last4: '1234', exp: '12/23' },
  { id: '2', cardName: 'Mastercard', last4: '5678', exp: '11/22' },
];
export const PaymentContext: Context<PaymentContextInterface> =
  createContext<PaymentContextInterface>({
    isTermsSelected: false,
    setIsTermsSelected: noop,
    selectedCard: '',
    setSelectedCard: noop,
    cards,
    setCards: noop,
  });

export const usePaymentContext = () => useContext(PaymentContext);
