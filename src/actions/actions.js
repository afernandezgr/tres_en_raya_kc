export const startAgain = () => ({
  type: 'RESTART',
});

export const addSymbol = (row, position, symbol) => ({
  type: 'ADD_SYMBOL',
  symbol,
  row,
  position,
});
