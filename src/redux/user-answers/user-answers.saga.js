import { takeLatest, put, call, all } from '@redux-saga/core/effects';

import Http from "../../utils/http";
import { submitUserAnswersFailure, submitUserAnswersSuccess } from './user-answers.actions';
import UserAnswerTypes from "./user-answers.types";

function* submitUserAnswers(payload) {
    const { userAnswers, attempt_id } = payload.payload;
    try{
        const data = yield Http.post(`/attempts/${attempt_id}/submit`, {
            answers: userAnswers
        });
        const result = data.data;
        // if(localStorage.getItem('wpr-result')){
        //     localStorage.removeItem('wpr-result');
        // };
        // yield localStorage.setItem('wpr-result', JSON.stringify(result));
        yield put(submitUserAnswersSuccess(result));
    }catch(error){
        yield put(submitUserAnswersFailure(error));
    }
}

export function* submitUserAnswersStart() {
    yield takeLatest(UserAnswerTypes.SUBMIT_USER_ANSWER_START, submitUserAnswers);
}

export function* userAnswersSaga() {
    yield all([call(submitUserAnswersStart)])
}