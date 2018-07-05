import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import styled from 'styled-components/native';
import GenericButton from '../components/Buttons/GenericButton';
import BasicButton from '../components/Buttons/BasicButton';
import {
  clearLocalNotification,
  setLocalNotification,
} from '../utils/helpers';

const ExplanationText = styled.Text`
  padding-top: 10;
  padding-horizontal: 15;
  font-size: 20;
  text-align: center;
`;


class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenTime: new Date(new Date().getTime() + (1 * 60 * 1000)) };
  }


  setTime = (newTime) => {
    //TO IMPROVE - For testing purposes it create a Notification
    //after one minute of setting it.
  }

  render() {

    return (
      <View>
        <ExplanationText>Set reminder to 1 minute from now</ExplanationText>
        <GenericButton
          text="Set"
          onPress={() =>
            clearLocalNotification()
              .then(setLocalNotification(this.state.chosenTime))
            
          }
        />
        <BasicButton
          text="Cancel Notifications"
          onPress={() =>
            clearLocalNotification()
          }
        />
        </View>

        );
    }
  }
  
  export default Notifications;
