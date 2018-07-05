import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const StyledButtonText = styled.Text`
  font-size: 22;
  color: #ffffff;
  margin-left: 20;
  background-color: #223344;
  text-align: center;
  margin-right: 20;
  padding-top: 10;
  padding-bottom: 10;
  margin-vertical: 10;
`;

const BasicButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <StyledButtonText>{text}</StyledButtonText>
  </TouchableOpacity>
);

BasicButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

BasicButton.defaultProps = {
  text: 'Save',
  onPress: () => { },
};

export default BasicButton;
