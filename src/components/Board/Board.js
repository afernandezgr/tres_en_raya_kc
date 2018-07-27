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
    !this.props.win && this.props.addSymbol(rowIndex, position, symbol);
  }

  render() {
    const winClass = this.props.win ? ` win-${this.props.winLine}` : '';
    const tieClass = this.props.tie ? ' tie' : '';
    const boardClass = `board${winClass}${tieClass}`;
    return (
      <div className={boardClass}>
        {Object.keys(this.props.board).map(rowIndex => (
          <div className={`row row${rowIndex}`} key={rowIndex}>
            {this.props.board[rowIndex].map((symbol, positon) => this.getSymbol(rowIndex, positon, symbol))}
          </div>
        ))}
        {this.props.win || this.props.tie ? (
          <ButtonCircle onClick={this.props.startAgain} children="Pulse para empezar de nuevo!" />
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
  win: PropTypes.string.isRequired,
  tie: PropTypes.bool.isRequired,
  winLine: PropTypes.string.isRequired,
  addSymbol: PropTypes.func.isRequired,
  startAgain: PropTypes.func.isRequired,
};

export default connect(
  ({
    board, turn, win, tie, winLine,
  }) => ({
    board,
    turn,
    win,
    tie,
    winLine,
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
