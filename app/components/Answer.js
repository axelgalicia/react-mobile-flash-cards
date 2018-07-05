import React from 'react';
import styled from 'styled-components/native';
import GenericButton from './Buttons/GenericButton';
import { View } from 'react-native';
import { connect } from 'react-redux';
import BasicButton from './Buttons/BasicButton';
import {
  setIncorrectAnswer,
  incrementQuizScore,
  setCorrectAnswer,
  decrementQuizScore,
} from '../actions';


const AnswerText = styled.Text`
  font-size: 25;
  padding-horizontal: 15;
  padding-vertical: 25;
  text-align: center;
`;

const Remaining = styled.Text`
  padding-vertical: 25;
  text-align: center;
  padding-horizontal: 15;
  font-size: 12;
`;


const Answer = ({
  answer,
  currentQuestion,
  userCorrectAnswer,
  quizQuestionsNumber,
  userIncorrectAnswer,
  correctAndRenderQuizScore,
  incorrectAndRenderQuizScore,
}) => {
  const onPress = () => {
    {
      quizQuestionsNumber === currentQuestion ?
        (
          <View>
            <GenericButton
              text="Correct"
              onPress={() => correctAndRenderQuizScore()}
            />
            <BasicButton
              text="Incorrect"
              onPress={() => incorrectAndRenderQuizScore()}
            />
          </View>
        ) : ''
    }

    return (
      <View>
        <GenericButton text="Correct" onPress={() => userCorrectAnswer()} />
        <BasicButton text="Incorrect" onPress={() => userIncorrectAnswer()}
        />
      </View>
    );
  };

  return (
    <View>
      <AnswerText>{answer}</AnswerText>
      {onPress()}
      <Remaining>
        {quizQuestionsNumber - currentQuestion + 1} more question(s)
      </Remaining>
    </View>
  );
};


const mapDispatchToProps = dispatch => ({
  userCorrectAnswer: () => { dispatch(setCorrectAnswer()); },
  userIncorrectAnswer: () => { dispatch(setIncorrectAnswer()); },
  correctAndRenderQuizScore: () => { dispatch(incrementQuizScore()); },
  incorrectAndRenderQuizScore: () => { dispatch(decrementQuizScore()); },
});

export default connect(null, mapDispatchToProps)(Answer);
