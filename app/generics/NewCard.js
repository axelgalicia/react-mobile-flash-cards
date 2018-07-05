import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import { addingNewCard } from '../actions';
import InputTextField from '../components/InputTextField';
import GenericButton from '../components/Buttons/GenericButton';
import { connect } from 'react-redux';



class NewCard extends Component {
  state = {
    answer: '',
    question: '',

  };

  onPress = () => {
    if (this.state.question.length < 2) {
      return Alert.alert(
        'Your question',
        'needs more than 2 characters.'
      );
    }

    if (this.state.answer.length < 2) {
      return Alert.alert(
        'Your answer',
        'needs more than 2 characters.'
      );
    }

    const { title } = this.props.navigation.state.params;
    const data = {
      title,
      question: this.state.question,
      answer: this.state.answer,
    };
    this.props.addingNewCard(data);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View>
        <InputTextField
          fieldLabel="Question to add?"
          maxLength={100}
          placeholder="Question"
          onChangeText={question => this.setState({ question })}
        />
        <InputTextField
          fieldLabel="Enter the answer?"
          maxLength={100}
          placeholder="Answer"
          onChangeText={answer => this.setState({ answer })}
        />
        <GenericButton onPress={() => this.onPress()} />
      </View>
    );
  }
}


export default connect(null, { addingNewCard })(NewCard);
