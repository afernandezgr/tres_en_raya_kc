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

const Result = ({ turn, won, tie }) => (
  <StyledBox bg="white">
    <Heading fontSize={3} color="black" py={2} px={3} m={0}>
      {(tie && 'Empate!')
        || (won && `Ha ganado ${won.toUpperCase()} `)
        || (turn && `Es el turno de ${turn.toUpperCase()}`)}
    </Heading>
  </StyledBox>
);

Result.propTypes = {
  won: PropTypes.string,
  turn: PropTypes.string.isRequired,
  tie: PropTypes.bool.isRequired,
};

Result.defaultProps = {
  won: undefined,
};

export default connect(({ won, turn, tie }) => ({
  won,
  turn,
  tie,
}))(Result);
