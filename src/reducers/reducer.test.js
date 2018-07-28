import { initialState, reducer } from './reducer';
import { X, O } from '../symbols/symbols';

it('Should add a symbol at given position and change turn', () => {
  const state = {
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
  const nextState = reducer(state, {
    type: 'ADD_SYMBOL',
    symbol: O,
    row: 0,
    position: 0,
  });
  expect(nextState.board[0]).toEqual([O, '', '']);
  expect(nextState.turn).toEqual(X);
});

it('Should set "won" symbol when a winning line is set', () => {
  const state = {
    board: {
      0: [X, O, ''],
      1: ['', X, ''],
      2: [O, '', ''],
    },
    won: undefined,
    wonLine: undefined,
    tie: false,
    turn: X,
  };
  const nextState = reducer(state, {
    type: 'ADD_SYMBOL',
    symbol: X,
    row: 2,
    position: 2,
  });
  expect(nextState.won).toEqual(X);
});

it('Should reset the state to initial', () => {
  const state = {
    board: {
      0: [X, O, ''],
      1: ['', X, ''],
      2: [O, '', ''],
    },
    won: undefined,
    wonLine: undefined,
    tie: false,
    turn: X,
  };
  const nextState = reducer(state, { type: 'RESTART' });
  expect(nextState).toEqual(initialState);
});
