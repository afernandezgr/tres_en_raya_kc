import * as _ from 'lodash';
import { X, O } from '../constants';
import { resultForSymbol } from '../controller/controller';

export const initialState = {
  board: {
    0: ['', '', ''],
    1: ['', '', ''],
    2: ['', '', ''],
  },
  win: undefined,
  winLine: undefined,
  tie: false,
  turn: O,
};

export const gameReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SYMBOL':
      const { symbol, row, position } = action;
      const newState = _.cloneDeep(state);
      newState.board[row][position] = symbol;

      const xResult = resultForSymbol(X, newState.board);
      const oResult = resultForSymbol(O, newState.board);

      if (xResult.win) {
        newState.win = X;
        newState.winLine = xResult.line;
      }

      if (oResult.win) {
        newState.win = O;
        newState.winLine = oResult.line;
      }

      if (!newState.win) {
        newState.turn = newState.turn === O ? X : O;
      }

      const boardIsFull = [...newState.board[0], ...newState.board[1], ...newState.board[2]].filter(
        symbol => symbol !== '',
      ).length === 9;

      if (boardIsFull && !newState.win) {
        newState.tie = true;
      }

      return newState;
    case 'RESTART':
      return initialState;
    default:
      return state;
  }
};
