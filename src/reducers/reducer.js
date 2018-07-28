import * as _ from 'lodash';
import { X, O } from '../constants';
import { hasWonSymbol } from '../controller/controller';

export const initialState = {
  board: {
    0: ['', '', ''],
    1: ['', '', ''],
    2: ['', '', ''],
  },
  won: undefined,
  wonLine: undefined,
  tie: false,
  turn: O,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SYMBOL':
      const { symbol, row, position } = action;
      const newState = _.cloneDeep(state);
      newState.board[row][position] = symbol;

      const xResult = hasWonSymbol(X, newState.board);
      const oResult = hasWonSymbol(O, newState.board);
      if (xResult.won) {
        newState.won = X;
        newState.wonLine = xResult.line;
      }

      if (oResult.won) {
        newState.won = O;
        newState.wonLine = oResult.line;
      }

      if (!newState.won) {
        newState.turn = newState.turn === O ? X : O;
      }

      const boardIsFull = [
        ...newState.board[0],
        ...newState.board[1],
        ...newState.board[2],
      ].filter(symbol => symbol !== '').length === 9;

      if (boardIsFull && !newState.won) {
        newState.tie = true;
      }

      return newState;
    case 'RESTART':
      console.log('reiniciamos');
      return initialState;
    default:
      return state;
  }
};
