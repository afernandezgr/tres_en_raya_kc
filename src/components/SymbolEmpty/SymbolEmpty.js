
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Symbol = styled.div`
  border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  border: 3px solid #000000;
  background-color: #cbe6f2;
  height: 80px;
  width: 100px;
  margin: 1px;
  transition: background-color 0.5s ease;
`;

const SymbolEmpty = props => <Symbol onClick={() => props.addSymbol(props.turn)} />;

SymbolEmpty.propTypes = {
  addSymbol: PropTypes.func.isRequired,
  turn: PropTypes.string.isRequired,
};

export default SymbolEmpty;
