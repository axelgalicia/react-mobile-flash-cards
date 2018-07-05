import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const StyledButtonText = styled.Text`
  margin-right: 5;
  padding-top: 10;
  padding-bottom: 10;
  margin-vertical: 10;
  background-color: #000000;
  text-align: center;
  font-size: 22;
  color: #ffffff;
  margin-left: 5;
`;

const NotificationsButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <StyledButtonText>{text}</StyledButtonText>
  </TouchableOpacity>
);

NotificationsButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

NotificationsButton.defaultProps = {
  text: 'Save',
  onPress: () => {},
};

export default NotificationsButton;
