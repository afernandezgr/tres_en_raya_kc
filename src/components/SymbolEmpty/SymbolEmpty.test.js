import React from "../../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import { shallow } from "../../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/enzyme";
import SymbolEmpty from "./SymbolEmpty";

it("Should call a passed addSymbol callback when it is clicked", () => {
  const addSymbol = jest.fn();
  const wrapper = shallow(<SymbolEmpty addSymbol={addSymbol} />);
  wrapper.simulate("click");
  expect(addSymbol.mock.calls.length).toBe(1);
});
