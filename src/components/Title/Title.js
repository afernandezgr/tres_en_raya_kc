import React from 'react';
import { Box, Heading } from 'rebass';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBox = styled(Box)`
  margin-top: 4px;
  margin-bottom: 4px;
  text-align: center;
  background: #08445e;
  }
`;

const Title = ({ title }) => (
  <StyledBox bg="white">
    <Heading fontSize={4} color="white" py={2} px={3} bg="#08445e" m={0}>
      {title}
    </Heading>
  </StyledBox>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
