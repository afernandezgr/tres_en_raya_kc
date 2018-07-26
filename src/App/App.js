import React from "react";
import Board from "../components/Board";
import Result from "../components/Result";
import Title from "../components/Title";
import styled from "styled-components";
import "./App.css";

const App = ({ className }) => {
  return (
    <div className={className}>
      <Title title="Tres en raya KC" />
      <Board />
      <Result />
    </div>
  );
};

export default styled(App)`
  font-family: sans-serif;
  color: white;

  margin: 0 auto;
  width: 200px;
`;
