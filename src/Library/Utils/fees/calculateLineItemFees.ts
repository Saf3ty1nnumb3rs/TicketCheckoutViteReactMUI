export function calculateLineItemFees(
  ticketPrice: number, 
  numberOfTickets: number
): { feePerTicket: number, totalCost: number, totalFee: number } {

  // Convert to cents to avoid floating-point issues
  const ticketPriceInCents = BigInt(Math.round(ticketPrice * 100));
  const numberOfTicketsBigInt = BigInt(numberOfTickets);

  // Calculate service fee (8%)
  const serviceFeeRate = BigInt(8);
  const singleTicketFeeInCents = (ticketPriceInCents * serviceFeeRate) / BigInt(100);
  
  // Calculate total fee and total cost in cents
  const totalFeeInCents = singleTicketFeeInCents * numberOfTicketsBigInt;
  const totalCostInCents = (ticketPriceInCents + singleTicketFeeInCents) * numberOfTicketsBigInt;

  // Convert back to dollars
  const feePerTicket = Number(singleTicketFeeInCents) / 100;
  const totalFee = Number(totalFeeInCents) / 100;
  const totalCost = Number(totalCostInCents) / 100;

  return { feePerTicket, totalCost, totalFee };
}
