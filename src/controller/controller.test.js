import { hasWonSymbol } from './logic';
import { X, O } from '../symbols/symbols';

it('Should indicate no winning result', () => {
  const board = {
    0: ['', X, ''],
    1: [O, '', O],
    2: [X, '', ''],
  };
  const xResult = hasWonSymbol(X, board);
  const oResult = hasWonSymbol(O, board);
  expect(xResult.win).toBe(false);
  expect(oResult.win).toBe(false);
});

it('Should indicate X as a winner in row0', () => {
  const board = {
    0: [X, X, X],
    1: ['', O, ''],
    2: ['', '', O],
  };
  const xResult = hasWonSymbol(X, board);
  const oResult = hasWonSymbol(O, board);
  expect(xResult.win).toBe(true);
  expect(xResult.line).toBe('row0');
  expect(oResult.win).toBe(false);
});

it('Should indicate X as a winner in row1', () => {
  const board = {
    0: ['', '', O],
    1: [X, X, X],
    2: ['', '', O],
  };
  const xResult = hasWonSymbol(X, board);
  const oResult = hasWonSymbol(O, board);
  expect(xResult.win).toBe(true);
  expect(xResult.line).toBe('row1');
  expect(oResult.win).toBe(false);
});

it('Should indicate X as a winner in row2', () => {
  const board = {
    0: ['', O, ''],
    1: ['', O, ''],
    2: [X, X, X],
  };
  const xResult = hasWonSymbol(X, board);
  const oResult = hasWonSymbol(O, board);
  expect(xResult.win).toBe(true);
  expect(xResult.line).toBe('row2');
  expect(oResult.win).toBe(false);
});

it('Should indicate O as a winner in column0', () => {
  const board = {
    0: [O, X, X],
    1: [O, '', ''],
    2: [O, '', X],
  };
  const xResult = hasWonSymbol(X, board);
  const oResult = hasWonSymbol(O, board);
  expect(xResult.win).toBe(false);
  expect(oResult.win).toBe(true);
  expect(oResult.line).toBe('column0');
});

it('Should indicate O as a winner in column1', () => {
  const board = {
    0: ['', O, X],
    1: ['', O, ''],
    2: [X, O, X],
  };
  const xResult = hasWonSymbol(X, board);
  const oResult = hasWonSymbol(O, board);
  expect(xResult.win).toBe(false);
  expect(oResult.win).toBe(true);
  expect(oResult.line).toBe('column1');
});

it('Should indicate O as a winner in column2', () => {
  const board = {
    0: ['', X, O],
    1: [X, '', O],
    2: [X, '', O],
  };
  const xResult = hasWonSymbol(X, board);
  const oResult = hasWonSymbol(O, board);
  expect(xResult.win).toBe(false);
  expect(oResult.win).toBe(true);
  expect(oResult.line).toBe('column2');
});

it('Should indicate O as a winner in diagonal1', () => {
  const board = {
    0: [O, X, X],
    1: ['', O, ''],
    2: [X, '', O],
  };
  const xResult = hasWonSymbol(X, board);
  const oResult = hasWonSymbol(O, board);
  expect(xResult.win).toBe(false);
  expect(oResult.win).toBe(true);
  expect(oResult.line).toBe('diagonal1');
});

it('Should indicate X as a winner in diagonal2', () => {
  const board = {
    0: ['', O, X],
    1: ['', X, ''],
    2: [X, '', O],
  };
  const xResult = hasWonSymbol(X, board);
  const oResult = hasWonSymbol(O, board);
  expect(xResult.win).toBe(true);
  expect(xResult.line).toBe('diagonal2');
  expect(oResult.win).toBe(false);
});
