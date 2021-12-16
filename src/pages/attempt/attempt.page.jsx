import { Box, CircularProgress, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ButtonSubmit from "../../components/button/button.component";
import ConfirmModal from "../../components/modal/modal.component";

import AttemptQuestion from "../../components/question/attempt-question.component";
import { openModal } from "../../redux/modal/modal.actions";
import ModalTypes from "../../redux/modal/modal.types";
import { fetchQuestions } from "../../redux/question/question.actions";
import { ArticleStyle } from "../../utils/styles";
import { FormStyle } from "../introduction/introduction.styles";

const AttemptPage = ({ fetchQuestions, questions, isLoading, history, attempt_id }) => {


  // useEffect(() => {
  //   fetchQuestions();
  // }, []);

  // console.log(attempt_id);
  // console.log(questions)

  console.log(isLoading);


  return (
    <ArticleStyle>
    {isLoading && <Box sx={{ display: 'flex', justifyContent: "center" }}><CircularProgress /></Box>}

      <section id="attempt-quiz">
        <div id="show-question">
          {questions.map((question, index) => (
            <AttemptQuestion
              key={index}
              index={index}
              question={question}
              length={questions.length}
            />
          ))}
        </div>
      </section>
      <FormStyle>
        <ButtonSubmit
          title="Submit your answer "
          button_id="green-btn"
          action={ModalTypes.OPEN_MODAL}
        />
      </FormStyle>
      <ConfirmModal history={history} />
    </ArticleStyle>
  );
};

const mapStateToProps = (state) => ({
  questions: state.attempt.questions,
  isLoading: state.attempt.isLoading,
  attempt_id: state.attempt.attempt_id
});

// const mapDispatchToProps = (dispatch) => ({
//   fetchQuestions: () => dispatch(fetchQuestions())
// });

export default connect(mapStateToProps)(AttemptPage);
