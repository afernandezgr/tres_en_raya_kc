import { hasWonSymbol } from './logic';
import { X, O } from '../symbols/symbols';

it('Deberia indicar que no hay ganadores', () => {
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

it('Deberia ndicar que ha ganado X en la fila 0', () => {
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

it('Deberia ndicar que ha ganado X en la fila 1', () => {
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

it('Debería indicar que ha ganado X en la fila 2', () => {
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

it('Debería indica que ha ganado O en la columna 0', () => {
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

it('Debería indicar que ha ganado 0 en la columna 1', () => {
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

it('Debería indicar que ha ganado O en columna 2', () => {
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

it('Deberia indicar que ha ganado O en diagonal 1', () => {
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

it('Deberia indicar que ha ganado X n la diagonal 2', () => {
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
