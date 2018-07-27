import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading } from 'rebass';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledBox = styled(Box)`
  margin-top: 4px;
  margin-bottom: 4px;
  text-align: center;
  }
`;

const Result = ({ turn, win, tie }) => (
  <StyledBox bg="white">
    <Heading fontSize={3} color="black" py={2} px={3} m={0}>
      {(tie && 'Empate!')
        || (win && `Ha ganado ${win.toUpperCase()} `)
        || (turn && `Es el turno de ${turn.toUpperCase()}.`)}
    </Heading>
  </StyledBox>
);

Result.propTypes = {
  win: PropTypes.string.isRequired,
  turn: PropTypes.string.isRequired,
  tie: PropTypes.bool.isRequired,
};

export default connect(({ win, turn, tie }) => ({
  win,
  turn,
  tie,
}))(Result);
