import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
      <div>
        <p>{result}</p>
      </div>
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
