import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ButtonCircle } from 'rebass';
import SymbolEmpty from '../SymbolEmpty';
import SymbolX from '../SymbolX';
import SymbolO from '../SymbolO';
import { X, O } from '../../constants';
import { addSymbol, startAgain } from '../../actions/actions';

class Board extends Component {
  getSymbol(rowIndex, position, symbol) {
    if (symbol === X) {
      return <SymbolX key={position} position={position} />;
    }
    if (symbol === O) {
      return <SymbolO key={position} position={position} />;
    }
    return (
      <SymbolEmpty
        key={position}
        addSymbol={this.addSymbol.bind(this, rowIndex, position)}
        turn={this.props.turn}
      />
    );
  }

  addSymbol(rowIndex, position, symbol) {
    !this.props.won && this.props.addSymbol(rowIndex, position, symbol);
  }

  render() {
    const wonClass = this.props.won ? ` won-${this.props.wonLine}` : '';
    const tieClass = this.props.tie ? ' tie' : '';
    const boardClass = `board${wonClass}${tieClass}`;
    return (
      <div className={boardClass}>
        {Object.keys(this.props.board).map(rowIndex => (
          <div className={`row row${rowIndex}`} key={rowIndex}>
            {this.props.board[rowIndex].map((symbol, positon) => this.getSymbol(rowIndex, positon, symbol))}
          </div>
        ))}
        {this.props.won || this.props.tie ? (
          <ButtonCircle
            onClick={this.props.startAgain}
            children="Pulse para empezar de nuevo!"
          />
        ) : (
          false
        )}
      </div>
    );
  }
}

Board.propTypes = {
  board: PropTypes.objectOf.isRequired,
  turn: PropTypes.string.isRequired,
  won: PropTypes.string,
  tie: PropTypes.bool.isRequired,
  wonLine: PropTypes.string,
  addSymbol: PropTypes.func.isRequired,
  startAgain: PropTypes.func.isRequired,
};

export default connect(
  ({
    board, turn, won, tie, wonLine,
  }) => ({
    board,
    turn,
    won,
    tie,
    wonLine,
  }),
  dispatch => ({
    addSymbol(rowIndex, position, symbol) {
      dispatch(addSymbol(rowIndex, position, symbol));
    },
    startAgain() {
      dispatch(startAgain());
    },
  }),
)(Board);
