import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import { connect } from 'react-redux';
import { addingNewDeck } from '../actions';
import InputTextField from '../components/InputTextField';
import GenericButton from '../components/Buttons/GenericButton';

class NewDeck extends Component {
  state = {
    title: '',
  };

  handleOnPress = (data) => {
    if (this.state.title.length < 1) {
      return Alert.alert(
        'Your Deck Title cannot be empty',
        'Please enter a valid Title'
      );
    }
    const { title } = this.state;
    this.props.addingNewDeck(data);
    this.props.navigation.navigate('QuizMenu', { title });
  };

  render() {
    return (
      <View>
        <InputTextField
          fieldLabel="Deck Title?"
          maxLength={50}
          placeholder="Title"
          onChangeText={title => this.setState({ title })}
        />
        <GenericButton onPress={() => this.handleOnPress(this.state)} />
      </View>
    );
  }
}


export default connect(null, { addingNewDeck })(NewDeck);
