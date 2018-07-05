import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const StyledButtonText = styled.Text`
  background-color: #000000;
  text-align: center;
  font-size: 22;
  margin-left: 10;
  margin-right: 10;
  height: 60;
  padding-top: 10;
  padding-bottom: 10;
  color: #ffffff;
  margin-vertical: 10;
`;

const GenericButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <StyledButtonText>{text}</StyledButtonText>
  </TouchableOpacity>
);


GenericButton.defaultProps = {
  text: 'Save',
  onPress: () => {},
};

export default GenericButton;
