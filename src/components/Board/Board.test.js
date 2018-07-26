import React from "../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import { shallow } from "../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/enzyme";
import { X, O } from "../symbols/symbols";
import SymbolEmpty from "./SymbolEmpty";
import SymbolX from "./SymbolX";
import SymbolO from "./SymbolO";
import { PureBoard as Board } from "./Board";

const board = {
  0: [X, O, ""],
  1: ["", X, O],
  2: [X, X, O]
};

it("Debería mostrar el tablero con los simbolos", () => {
  const startAgain = jest.fn();
  const addSymbol = jest.fn();
  const wrapper = shallow(
    <Board
      board={board}
      startAgain={startAgain}
      addSymbol={addSymbol}
      draw={false}
      turn={X}
    />
  );
  expect(wrapper.find(SymbolX).length).toBe(4);
  expect(wrapper.find(SymbolO).length).toBe(3);
  expect(wrapper.find(SymbolEmpty).length).toBe(2);
});

it("No debería mostrar el boton de comenzar de nuevo mientras un jugador no haya ganado o hay empate", () => {
  const startAgain = jest.fn();
  const addSymbol = jest.fn();
  const wrapper = shallow(
    <Board
      board={board}
      startAgain={startAgain}
      addSymbol={addSymbol}
      draw={false}
      turn={X}
    />
  );
  expect(wrapper.find("p.startAgain").length).toBe(0);
});

it('Debería mostrar el botón "Start again"vcuando un jugador haya ganado', () => {
  const startAgain = jest.fn();
  const addSymbol = jest.fn();
  const wrapper = shallow(
    <Board
      board={board}
      won={X}
      startAgain={startAgain}
      addSymbol={addSymbol}
      draw={false}
      turn={X}
    />
  );
  expect(wrapper.find("p.startAgain").length).toBe(1);
});

it('Debería mostrar botón de "jugar otra vez" si existe empate', () => {
  const startAgain = jest.fn();
  const addSymbol = jest.fn();
  const wrapper = shallow(
    <Board
      board={board}
      draw={true}
      startAgain={startAgain}
      addSymbol={addSymbol}
      turn={X}
    />
  );
  expect(wrapper.find("p.startAgain").length).toBe(1);
});
