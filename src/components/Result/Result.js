import React, { Component } from "react";
import PropTypes from "prop-types";
import { Box, Heading } from "rebass";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledBox = styled(Box)`
  margin-top: 4px;
  margin-bottom: 4px;
  text-align: center;
  }
`;

class Result extends Component {
  render() {
    let result = "";
    if (this.props.turn) {
      result = `Próximo turno jugador: ${this.props.turn.toUpperCase()}`;
    }
    if (this.props.won) {
      result = `Ha ganado jugador ${this.props.won.toUpperCase()}!`;
    } else if (this.props.draw) {
      result = "Empate!";
    }
    return (
      <StyledBox bg="white">
        <Heading fontSize={3} color="black" py={2} px={3} m={0}>
          {result}
        </Heading>
      </StyledBox>
    );
  }
}

Result.propTypes = {
  won: PropTypes.string,
  turn: PropTypes.string.isRequired,
  draw: PropTypes.bool.isRequired
};

export default connect(({ won, turn, draw }) => ({
  won,
  turn,
  draw
}))(Result);

export { Result as PureResult };
