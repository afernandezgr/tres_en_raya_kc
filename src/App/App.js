import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Title from '../components/Title';
import Board from '../components/Board';
import Result from '../components/Result';
import { TITLE_GAME } from '../constants';
import './App.css';

const App = ({ className }) => (
  <div className={className}>
    <Title title={TITLE_GAME} />
    <Board />
    <Result />
  </div>
);

App.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(App)`
  font-family: sans-serif;
  margin: 0 auto;
  width: 200px;
`;
