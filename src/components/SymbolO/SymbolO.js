import React from "react";
import PropTypes from "prop-types";
import { Symbol } from "../SymbolEmpty";

const SymbolO = props => {
  return (
    <Symbol className={`symbol column${props.position}`}>
      <svg viewBox="0 0 56 56">
        <circle
          cx={28}
          cy={28}
          r={25}
          stroke="black"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </Symbol>
  );
};

SymbolO.propTypes = {
  position: PropTypes.number.isRequired
};

export default SymbolO;
