import * as _ from 'lodash';
import { X, O } from '../constants';
import { hasWonSymbol, boardIsFull } from '../controller/controller';

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
  const { symbol, row, position } = action;
  const newState = _.cloneDeep(state);
  let xResult;
  let oResult;
  switch (action.type) {
    case 'ADD_SYMBOL':
      newState.board[row][position] = symbol;
      xResult = hasWonSymbol(X, newState.board);
      oResult = hasWonSymbol(O, newState.board);
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

      if (boardIsFull(newState.board) && !newState.won) {
        newState.tie = true;
      }

      return newState;
    case 'RESTART':
      return initialState;
    default:
      return state;
  }
};
