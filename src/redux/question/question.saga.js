import { put, all, takeLatest, call } from "@redux-saga/core/effects";
import Http from "../../utils/http";
import {
  fetchQuestionsSuccess,
  fetchQuestionsFailure,
} from "./question.actions";
import QuestionActionTypes from "./question.types";

export function* fetchQuestionData() {
  try {
    const data = yield Http.post("/attempts");
    const attempt_data = data.data;

    // const questions = attempt_data.questions;
    yield put(fetchQuestionsSuccess(attempt_data));

    // if (yield localStorage.getItem("wpr-attempt")) {
    //     yield localStorage.remove("wpr-attempt");
    //   }
      yield localStorage.setItem("wpr-attempt", JSON.stringify(attempt_data));
      // yield localStorage.setItem("attempt_id", attempt_data._id);
  } catch (error) {
    yield put(fetchQuestionsFailure(error));
  }
}

export function* fetchQuestions() {
  yield takeLatest(QuestionActionTypes.FETCH_QUESTIONS, fetchQuestionData);
}

export function* questionSaga() {
  yield all([call(fetchQuestions)]);
}
