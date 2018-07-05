import {
  QUIZ_INCREMENT_SCORE,
  QUIZ_DECREMENT_SCORE,
  RESTART_QUIZ,
  CORRECT_ANSWER_BUTTON,
  INCORRECT_ANSWER_BUTTON,
  SHOW_ANSWER,
} from '../actions';

const initialState = {
  quizNumbers: {
    questionNumber: 0,
    quizScoreCorrect: 0,
    quizScoreIncorrect: 0,
  },
  quizDisplay: {
    showAnswer: false,
    toggleQuestion: true,
  },
};

const quiz = (state = initialState, action) => {
  switch (action.type) {
    case CORRECT_ANSWER_BUTTON:
      return {
        ...state,
        quizDisplay: {
          showAnswer: false,
          toggleQuestion: true,
        },
        quizNumbers: {
          questionNumber: state.quizNumbers.questionNumber + 1,
          quizScoreCorrect: state.quizNumbers.quizScoreCorrect + 1,
          quizScoreIncorrect: state.quizNumbers.quizScoreIncorrect,
        },
      };
    case INCORRECT_ANSWER_BUTTON:
      return {
        ...state,
        quizDisplay: {
          showAnswer: false,
          toggleQuestion: true,
        },
        quizNumbers: {
          questionNumber: state.quizNumbers.questionNumber + 1,
          quizScoreCorrect: state.quizNumbers.quizScoreCorrect,
          quizScoreIncorrect: state.quizNumbers.quizScoreIncorrect + 1,
        },
      };
    case QUIZ_INCREMENT_SCORE:
      return {
        ...state,
        quizDisplay: {
          showAnswer: false,
          toggleQuestion: false,
        },
        quizNumbers: {
          questionNumber: state.quizNumbers.questionNumber + 1,
          quizScoreCorrect: state.quizNumbers.quizScoreCorrect + 1,
          quizScoreIncorrect: state.quizNumbers.quizScoreIncorrect,
        },
      };
    case QUIZ_DECREMENT_SCORE:
      return {
        ...state,
        quizDisplay: {
          showAnswer: false,
          toggleQuestion: false,
        },
        quizNumbers: {
          questionNumber: state.quizNumbers.questionNumber + 1,
          quizScoreCorrect: state.quizNumbers.quizScoreCorrect,
          quizScoreIncorrect: state.quizNumbers.quizScoreIncorrect + 1,
        },
      };
    case RESTART_QUIZ:
      return {
        ...state,
        quizDisplay: {
          showAnswer: false,
          toggleQuestion: true,
        },
        quizNumbers: {
          questionNumber: 0,
          quizScoreCorrect: 0,
          quizScoreIncorrect: 0,
        },
      };
    case SHOW_ANSWER:
      return {
        ...state,
        quizDisplay: {
          showAnswer: true,
          toggleQuestion: false,
        },
      };
    default:
      return state;
  }
};

export default quiz;
