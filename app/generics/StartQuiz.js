import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Question from '../components/Question';
import Answer from '../components/Answer';
import Score from '../components/Score';
import {
  selectQuizLength,
  selectQuestionsAndAnswers,
} from '../selectors/quizSelectors';

const StartQuiz = ({
  currentQuestion,
  deckTitle,
  showAnswer,
  showQuestion,
  quizQuestionsNumber,
  questionsAndAnswers,
  userCorrectScore,
  userIncorrectScore,
}) => {
  if (questionsAndAnswers[currentQuestion] !== undefined) {
    return (
      <View>
        {showQuestion && (
          <Question
            deckTitle={deckTitle}
            question={questionsAndAnswers[currentQuestion].question}
          />
        )}
        {showAnswer && (
          <Answer
            answer={questionsAndAnswers[currentQuestion].answer}
            currentQuestion={currentQuestion}
            deckTitle={deckTitle}
            quizQuestionsNumber={quizQuestionsNumber}
          />
        )}
      </View>
    );
  }
  return (
    <Score
      quizQuestionsNumber={quizQuestionsNumber}
      userCorrectScore={userCorrectScore}
      userIncorrectScore={userIncorrectScore}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  currentQuestion: state.quiz.quizNumbers.questionNumber,
  showAnswer: state.quiz.quizDisplay.showAnswer,
  showQuestion: state.quiz.quizDisplay.toggleQuestion,
  deckTitle: ownProps.navigation.state.params.title,
  questionsAndAnswers: selectQuestionsAndAnswers(
    state, ownProps.navigation.state.params.title
  ),
  quizQuestionsNumber: selectQuizLength(
    state,
    ownProps.navigation.state.params.title
  ),
  userCorrectScore: state.quiz.quizNumbers.quizScoreCorrect,
  userIncorrectScore: state.quiz.quizNumbers.quizScoreIncorrect,
});

export default connect(mapStateToProps)(StartQuiz);
