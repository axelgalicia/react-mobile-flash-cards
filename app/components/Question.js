import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import GenericButton from './Buttons/GenericButton';
import { showAnswer } from '../actions';



const Remaining = styled.Text`
  padding-horizontal: 15;
  padding-vertical: 25;
  font-size: 12;
  text-align: center;
`;

const StyledQuestionText = styled.Text`
  font-size: 20;
  padding-horizontal: 15;
  padding-vertical: 25;
  text-align: center;
`;

const Question = ({
  currentQuestionNum,
  question,
  quizLength,
  showAnswer,
}) => (
  <View>
    <StyledQuestionText>{question}</StyledQuestionText>
    <GenericButton text="Show answer" onPress={() => showAnswer()} />
    <Remaining>
      {quizLength - currentQuestionNum} question(s) remaining including this one
    </Remaining>
  </View>
);

Question.propTypes = {
  currentQuestionNum: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  quizLength: PropTypes.number.isRequired,
  showAnswer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  quizLength: state.decks[ownProps.deckTitle].quizLength,
  currentQuestionNum: state.quiz.quizNumbers.questionNumber,
});

const mapDispatchToProps = dispatch => ({
  showAnswer: () => {
    dispatch(showAnswer());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
