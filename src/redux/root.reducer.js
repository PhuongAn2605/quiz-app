import { combineReducers } from 'redux';
import modalReducer from './modal/modal.reducer';
import attemptReducer from './question/question.reducers';
import userAnswerReducer from './user-answers/user-answers.reducer';

const rootReducer = combineReducers({
    attempt: attemptReducer,
    modal: modalReducer,
    userAnswers: userAnswerReducer
});

export default rootReducer;