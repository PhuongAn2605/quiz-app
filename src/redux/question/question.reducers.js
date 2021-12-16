import QuestionActionTypes from "./question.types"

const INITIAL_STATE = {
    questions: [],
    attempt_id: null,
    isLoading: false,
    error: null
}

const attemptReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case QuestionActionTypes.FETCH_QUESTIONS_SUCCESS:
            return {
                ...state,
                questions: action.payload.questions,
                attempt_id: action.payload._id,
                isLoading: false,
                error: null
            }
        case QuestionActionTypes.FETCH_QUESTIONS_FAILURE:
            return {
                ...state,
                isLoading: true,
                error: action.payload
            }
        default:
            return state;
    }
}

export default attemptReducer;