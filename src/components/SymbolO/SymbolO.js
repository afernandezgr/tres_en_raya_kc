import React from 'react';
import PropTypes from 'prop-types';
import { Symbol } from '../SymbolEmpty';

const SymbolO = ({ position }) => (
  <Symbol className={`symbol column${position}`}>
    <svg viewBox="0 0 66 70">
      <circle cx={34} cy={42} r={25} stroke="black" strokeWidth="3" fill="gray" />
    </svg>
  </Symbol>
);

SymbolO.propTypes = {
  position: PropTypes.number.isRequired,
};

export default SymbolO;
