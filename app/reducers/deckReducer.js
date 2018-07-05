import { initialDeckData } from '../config/initState';
import { ADDING_NEW_CARD, ADDING_NEW_DECK } from '../actions';

const decks = (state = initialDeckData, action) => {
  switch (action.type) {
    case ADDING_NEW_CARD:
      return {
        ...state,
        [action.data.title]: {
          title: state[action.data.title].title,
          quizLength: state[action.data.title].quizLength + 1,
          questions: [
            ...state[action.data.title].questions,
            {
              question: action.data.question,
              answer: action.data.answer,
            },
          ],
        },
      };
    case ADDING_NEW_DECK:
      return {
        ...state,
        [action.data.title]: {
          ...action.data,
          quizLength: 0,
          questions: [],
        },
      };
    default:
      return state;
  }
};

export default decks;
