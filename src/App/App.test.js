import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Result from "./Result";
import Board from "./Board";
import Title from "./Board";

it("Debería mostrarse un componente App con componentesTitle , Board y Result", () => {
  const wrapper = shallow(<App />).dive();
  expect(wrapper.find(Result).length).toBe(1);
  expect(wrapper.find(Board).length).toBe(1);
  expect(wrapper.find(Title).length).toBe(1);
});
