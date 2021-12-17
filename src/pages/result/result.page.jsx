import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";

import { Box, CircularProgress } from "@mui/material";

import { ArticleStyle } from "../../utils/styles";
import ResultQuestion from "../../components/question/result-question.component";
import { getResult } from "../../redux/user-answers/user-answers.actions";
import ButtonSubmit from "../../components/button/button.component";
import isEmpty from "is-empty";

const ResultPage = ({ getResult, result, questions, isLoading }) => {
  useEffect(() => {
    getResult();
  }, []);

  let storedResult = {};
  let storedQuestions = [];

  let score = {};
  let scoreText = {};
  let length = 0;

  const getStoredQuestions = useCallback(() => {
    console.log(isEmpty(questions) + ' questions');
    if (localStorage.getItem("wpr-attempt")) {
      storedQuestions = JSON.parse(
        localStorage.getItem("wpr-attempt")
      ).questions;
    } else{
      storedQuestions = [ ...questions];
    }
    length = storedQuestions.length;

  }, [questions, storedQuestions]);

  const getStoredResult = useCallback(() => {
    console.log(isEmpty(result) + ' result');
    if (localStorage.getItem("wpr-result")) {
      storedResult = JSON.parse(localStorage.getItem("wpr-result"));

    } else{
      storedResult = {...result};
    }
    score = storedResult.score;
    scoreText = storedResult.scoreText;
  }, [result, storedResult]);

  getStoredQuestions();
  getStoredResult();

  return (
    <ArticleStyle>
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
      {!isLoading && (
        <section id="attempt_quiz">
          <div id="show-question">
            {storedQuestions.map((question, index) => (
              <ResultQuestion
                key={index}
                index={index}
                question={question}
                length={length}
              />
            ))}
          </div>
        </section>
      )}
      <div className="form-result">
        <div>
          <h2>Result:</h2>
          <p className="score">{score}</p>
          <strong className="percent">{score * 10}</strong>
          <p className="message">{scoreText}</p>
        </div>
        <ButtonSubmit title="Try Again" url="/" button_id="start-quiz" />
      </div>
    </ArticleStyle>
  );
};

const mapStateToProps = (state) => ({
  result: state.userAnswers.result,
  questions: state.attempt.questions,
  isLoading: state.userAnswers.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getResult: () => dispatch(getResult()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
