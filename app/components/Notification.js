import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import NotificationsButton from './Buttons/NotificationsButton';

const StyledHeaderText = styled.Text`
  font-size: 24;
  padding-vertical: 15;
  padding-horizontal: 15;
  text-align: center;
`;

const Notification = props => (
  <View>
    <StyledHeaderText>Notifications screen</StyledHeaderText>
    <NotificationsButton
      text="Notifications"
      onPress={() => props.navigation.navigate('Notifications')}
    />
  </View>
);

export default Notification;
