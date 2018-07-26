import React from "react";
import { Box, Heading } from "rebass";
import styled from "styled-components";

const StyledBox = styled(Box)`
  margin-top: 4px;
  margin-bottom: 4px;
  }
`;

const Title = ({ title }) => (
  <StyledBox bg="white">
    <Heading fontSize={3} color="black" py={2} px={3} bg="secondary" m={0}>
      {title}
    </Heading>
  </StyledBox>
);

export default Title;
