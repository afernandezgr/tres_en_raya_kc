import React from 'react';
import PropTypes from 'prop-types';
import { Symbol } from '../SymbolEmpty';

const SymbolX = ({ position }) => (
  <Symbol className={`symbol column${position}`}>
    <svg viewBox="0 0 66 66">
      <line x1="6" y1="18" x2="58" y2="58" stroke="gray" strokeWidth="4" />
      <line x1="6" y1="58" x2="58" y2="18" stroke="gray" strokeWidth="4" />
    </svg>
  </Symbol>
);

SymbolX.propTypes = {
  position: PropTypes.number.isRequired,
};

export default SymbolX;
