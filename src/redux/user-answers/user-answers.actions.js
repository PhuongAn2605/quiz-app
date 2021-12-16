import UserAnswerTypes from "./user-answers.types";

export const addUserAnswer = (userAnswer) => ({
    type: UserAnswerTypes.ADD_USER_ANSWER,
    payload: userAnswer
})

export const submitUserAnswersStart = (userAnswers, attempt_id) => ({
    type: UserAnswerTypes.SUBMIT_USER_ANSWER_START,
    payload: {
        userAnswers,
        attempt_id
    }
});

export const submitUserAnswersSuccess = (result) => ({
    type: UserAnswerTypes.SUBMIT_USER_ANSWER_SUCCESS,
    payload: result
});

export const submitUserAnswersFailure = (error) => ({
    type: UserAnswerTypes.SUBMIT_USER_ANSWER_FAILURE,
    payload: error
});

export const getResult = () => ({
    type: UserAnswerTypes.GET_RESULT
})