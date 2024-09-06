export const formatCurrency = (cents: number): string =>
  `$${(cents / 100).toFixed(2)}`;
