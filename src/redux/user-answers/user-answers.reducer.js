import UserAnswerTypes from "./user-answers.types";
import { filterAnswers } from "./user-answers.utils";

const INITIAL_STATE = {
  answers: {},
  result: {},
  filteredAnswers: {},
  error: null,
  isLoading: false,
};

const userAnswerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserAnswerTypes.ADD_USER_ANSWER:
      const { question_id, answer } = action.payload;
      state.answers[question_id] = answer;
      localStorage.setItem('user-answers', JSON.stringify(state.answers));
      return {
        ...state,
        error: null,
      };
    case UserAnswerTypes.SUBMIT_USER_ANSWER_SUCCESS:
      state.result = action.payload;

      return {
        ...state,
        result: action.payload,
        filteredAnswers: filterAnswers(action.payload),
        isLoading: false,
        error: null,
      };
    case UserAnswerTypes.SUBMIT_USER_ANSWER_FAILURE:
      return {
        ...state,
        isLoading: true,
        error: action.payload,
      };
    case UserAnswerTypes.GET_RESULT:
      // console.log('get result')
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userAnswerReducer;
