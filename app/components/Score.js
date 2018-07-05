import React from 'react';
import PropTypes from 'prop-types';
import BasicButton from './Buttons/BasicButton';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { restartQuiz } from '../actions';

const StyledQuizScoreText = styled.Text`
  padding-vertical: 15;
  padding-horizontal: 15;
  font-size: 20;
  text-align: center;
`;

const Score = ({
  quizQuestionsNumber,
  userCorrectScore,
  userIncorrectScore,
  userResetQuiz,
}) => (
  <View>
    <StyledQuizScoreText>
      You got {userCorrectScore} right and {userIncorrectScore} wrong from a
      total of {quizQuestionsNumber} questions.
    </StyledQuizScoreText>
    <BasicButton
      text="Reset Quiz?"
      onPress={() => {
        userResetQuiz();
      }}
    />
  </View>
);

Score.propTypes = {
  quizQuestionsNumber: PropTypes.number.isRequired,
  userCorrectScore: PropTypes.number.isRequired,
  userIncorrectScore: PropTypes.number.isRequired,
  userResetQuiz: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userQuizScore: state.quiz.quizNumbers.Score,
});

const mapDispatchToProps = dispatch => ({
  userResetQuiz: () => {
    dispatch(restartQuiz());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Score);
