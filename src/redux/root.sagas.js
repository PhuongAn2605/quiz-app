import { all, call } from '@redux-saga/core/effects';
import { questionSaga } from './question/question.saga';
import { userAnswersSaga } from './user-answers/user-answers.saga';

export default function* rootSaga(){
    yield all([
        call(questionSaga),
        call(userAnswersSaga)
    ])
}