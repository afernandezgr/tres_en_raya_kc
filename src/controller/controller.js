// contamos simbolos en filas, columnas y diagonales
const countInRow = (symbol, row) => row.filter(el => el === symbol).length;
const countInColumn = (symbol, colNumber, ...rows) => rows.map(row => row[colNumber]).filter(el => el === symbol).length;
const countInDiagonal1 = (symbol, ...rows) => {
  const [row0, row1, row2] = rows;
  return [row0[0], row1[1], row2[2]].filter(el => el === symbol).length;
};
const countInDiagonal2 = (symbol, ...rows) => {
  const [row0, row1, row2] = rows;
  return [row0[2], row1[1], row2[0]].filter(el => el === symbol).length;
};

// verificamos si hay algun ganador al existir el mismo símbolo 3 veces
const hasWonInRow = (symbol, row) => countInRow(symbol, row) === 3;
const hasWonInColumn = (symbol, colNumber, ...rows) => countInColumn(symbol, colNumber, ...rows) === 3;
const hasWonInDiagonal1 = (symbol, ...rows) => countInDiagonal1(symbol, ...rows) === 3;
const hasWonInDiagonal2 = (symbol, ...rows) => countInDiagonal2(symbol, ...rows) === 3;

export const boardIsFull = board => [...board[0], ...board[1], ...board[2]].filter(symbol => symbol !== '')
  .length === 9;

// Declaramos que existe un ganador
export const hasWonSymbol = (symbol, board) => {
  const rows = Object.keys(board).map(row => board[row]);
  return [
    { line: 'row0', won: hasWonInRow(symbol, board[0]) },
    { line: 'row1', won: hasWonInRow(symbol, board[1]) },
    { line: 'row2', won: hasWonInRow(symbol, board[2]) },
    { line: 'column0', won: hasWonInColumn(symbol, 0, ...rows) },
    { line: 'column1', won: hasWonInColumn(symbol, 1, ...rows) },
    { line: 'column2', won: hasWonInColumn(symbol, 2, ...rows) },
    { line: 'diagonal1', won: hasWonInDiagonal1(symbol, ...rows) },
    { line: 'diagonal2', won: hasWonInDiagonal2(symbol, ...rows) },
  ].reduce((answer, nextCheck) => (nextCheck.won ? nextCheck : answer), {
    won: false,
  });
};

export default hasWonSymbol;
