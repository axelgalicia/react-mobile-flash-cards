
//Quiz Actions
export const CORRECT_ANSWER_BUTTON = 'CORRECT_ANSWER_BUTTON';
export const QUIZ_INCREMENT_SCORE = 'QUIZ_INCREMENT_SCORE';
export const QUIZ_DECREMENT_SCORE = 'QUIZ_DECREMENT_SCORE';
export const RESTART_QUIZ = 'RESTART_QUIZ';
export const SHOW_ANSWER = 'SHOW_ANSWER';
export const INCORRECT_ANSWER_BUTTON = 'INCORRECT_ANSWER_BUTTON';


export const setCorrectAnswer = () => ({
  type: CORRECT_ANSWER_BUTTON,
});
export const incrementQuizScore = () => ({
  type: QUIZ_INCREMENT_SCORE,
});
export const decrementQuizScore = () => ({
  type: QUIZ_DECREMENT_SCORE,
});
export const restartQuiz = () => ({
  type: RESTART_QUIZ,
});
export const showAnswer = () => ({
  type: SHOW_ANSWER,
});
export const setIncorrectAnswer = () => ({
  type: INCORRECT_ANSWER_BUTTON,
});

// Deack Actions
export const ADDING_NEW_DECK = 'ADDING_NEW_DECK';
export const ADDING_NEW_CARD = 'ADDING_NEW_CARD';

export const addingNewDeck = data => ({
  type: ADDING_NEW_DECK,
  data,
});
export const addingNewCard = data => ({
  type: ADDING_NEW_CARD,
  data,
});