import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Board from '../components/Board';
import Result from '../components/Result';
import Title from '../components/Title';
import './App.css';

const App = ({ className }) => (
  <div className={className}>
    <Title title="Tres en raya KC" />
    <Board />
    <Result />
  </div>
);

App.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(App)`
  font-family: sans-serif;
  color: white;
  margin: 0 auto;
  width: 200px;
`;
