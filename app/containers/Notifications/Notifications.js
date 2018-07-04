import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import styled from 'styled-components/native';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import SecondaryButton from '../../components/Buttons/SecondaryButton';
import {
  clearLocalNotification,
  setLocalNotification,
} from '../../utils/helpers';

const ExplanationText = styled.Text`
  font-size: 20;
  text-align: center;
  padding-top: 10;
  padding-horizontal: 15;
`;


class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenTime: new Date(new Date().getTime() + (1 * 60 * 1000)) };

    this.setTime = this.setTime.bind(this);
  }


  setTime(newTime) {
    //this.setState({ chosenTime: newTime }); TO IMPROVE
  }

  render() {

    return (
      <View>
        <ExplanationText>Set reminder to 1 minute from now</ExplanationText>
        <PrimaryButton
          text="Set"
          onPress={() =>
            clearLocalNotification()
              .then(setLocalNotification(this.state.chosenTime))
            
          }
        />
        <SecondaryButton
          text="Remove Notifications"
          onPress={() =>
            clearLocalNotification()
          }
        />
        </View>

        );
    }
  }
  
  export default Notifications;
