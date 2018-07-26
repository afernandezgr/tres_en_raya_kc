import React from "react";
import { shallow } from ".enzyme";
import SymbolEmpty from "./SymbolEmpty";

it("Debería llamarse a addSymbol cuando es pulsado", () => {
  const addSymbol = jest.fn();
  const wrapper = shallow(<SymbolEmpty addSymbol={addSymbol} />);
  wrapper.simulate("click");
  expect(addSymbol.mock.calls.length).toBe(1);
});
