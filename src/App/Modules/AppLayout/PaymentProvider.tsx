import { PaymentContext } from "Library/Contexts/Payment";
import { useState } from "react";

export const PaymentProvider = ({ children }: { children: React.ReactNode }) => {
  const [isTermsSelected, setIsTermsSelected] = useState(false);
  const [selectedCard, setSelectedCard] = useState('');
  const [cards, setCards] = useState<Card[]>([
    { id: '1', cardName: 'Visa', last4: '1234', exp: '12/23' },
    { id: '2', cardName: 'Mastercard', last4: '5678', exp: '11/22' },
  ]);
  return (
    <PaymentContext.Provider value={{
      isTermsSelected,
      setIsTermsSelected,
      cards,
      setCards,
      selectedCard,
      setSelectedCard,
    }}>
      {children}
    </PaymentContext.Provider>
  );
};