import React, { useMemo } from "react";
import { connect } from "react-redux";

import { Box, CircularProgress, Stack } from "@mui/material";

import { ArticleStyle } from "../../utils/styles";
import ResultQuestion from "../../components/question/result-question.component";
import { getResult } from "../../redux/user-answers/user-answers.actions";
import ButtonSubmit from "../../components/button/button.component";



const ResultPage = ({ getResult, result, questions, isLoading }) => {
  // useEffect(() => {
  //   getResult();
  // }, []);

  // const filterAnswers = useMemo((result) => {
  //   const { correctAnswers, answers } = result;
  //   let userCorrectAnswers = {};
  //   let userWrongAnswers = {};
  
  //   const correctAnswerLeft = { ...correctAnswers };
  
  //   for (let ans in answers) {
  //     if (correctAnswers[ans] == answers[ans]) {
  //       userCorrectAnswers[[ans]] = correctAnswers[ans];
  //       delete correctAnswerLeft[[ans]];
  //     } else {
  //       userWrongAnswers[[ans]] = answers[ans];
  //     }
  //   }
  //   const filteredAnswers = {
  //     userCorrectAnswers,
  //     userWrongAnswers,
  //     correctAnswerLeft
  //   }
  //   localStorage.setItem('filtered-answers', JSON.stringify(filteredAnswers));
  //   return filteredAnswers;
  // }, [result]);

  const { correctAnswers, answers, score, scoreText } = result;
  //   console.log(correctAnswers);
    // console.log(answers)

  return (
    <ArticleStyle>
      {isLoading && <Box sx={{ display: 'flex', justifyContent: "center" }}><CircularProgress /></Box>}
      <section id="attempt_quiz">
        <div id="show-question">
          {questions.map((question, index) => (
            <ResultQuestion key={index} index={index} question={question} />
          ))}
        </div>
      </section>
      <div className="form-result">
        <div>
          <h2>Result:</h2>
          <p className="score">{score}</p>
          <strong className="percent">{score * 10}</strong>
          <p className="message">{scoreText}</p>
        </div>
        <ButtonSubmit
            title="Try Again"
            url="/"
            button_id="start-quiz"
          />
      </div>
    </ArticleStyle>
  );
};

const mapStateToProps = (state) => ({
  result: state.userAnswers.result,
  questions: state.attempt.questions,
  isLoading: state.userAnswers.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  getResult: () => dispatch(getResult()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
