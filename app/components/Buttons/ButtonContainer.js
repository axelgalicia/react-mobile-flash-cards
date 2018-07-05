import React from 'react';
import styled from 'styled-components/native';

const StyledButtonWrapper = styled.View`
  padding-top: 25;
  padding-bottom: 35;
  margin-vertical: 50;
`;

const ButtonContainer = ({ children }) => (
  <StyledButtonWrapper>{children}</StyledButtonWrapper>
);

export default ButtonContainer;
