import QuestionActionTypes from "./question.types";

export const fetchQuestions = () => ({
    type: QuestionActionTypes.FETCH_QUESTIONS
});

export const fetchQuestionsSuccess = result => ({
    type: QuestionActionTypes.FETCH_QUESTIONS_SUCCESS,
    payload: result
});

export const fetchQuestionsFailure = error => ({
    type: QuestionActionTypes.FETCH_QUESTIONS_FAILURE,
    payload: error
})