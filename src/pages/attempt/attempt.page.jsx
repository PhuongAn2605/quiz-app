import { Box, CircularProgress, Stack } from "@mui/material";
import isEmpty from "is-empty";
import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import ButtonSubmit from "../../components/button/button.component";
import ConfirmModal from "../../components/modal/modal.component";

import AttemptQuestion from "../../components/question/attempt-question.component";
import { openModal } from "../../redux/modal/modal.actions";
import ModalTypes from "../../redux/modal/modal.types";
import { fetchQuestions } from "../../redux/question/question.actions";
import { ArticleStyle } from "../../utils/styles";
import { FormStyle } from "../introduction/introduction.styles";

const AttemptPage = ({ questions, isLoading, history, attempt_id }) => {
  const [newAttempt, setNewAttempt] = useState(true);

  let questionList = [];

  const getQuestions = useCallback(() => {
    if (isEmpty(questions)) {
      // console.log(JSON.parse(localStorage.getItem('wpr-attempt')).questions)
      questionList = JSON.parse(localStorage.getItem("wpr-attempt")).questions;
    } else {
      questionList = [...questions];
    }
  }, [questionList, questions]);

  getQuestions();

  return (
    <ArticleStyle>
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}

      <section id="attempt-quiz">
        <div id="show-question">
          {!isEmpty(questionList) &&
            questionList.map((question, index) => (
              <AttemptQuestion
                key={index}
                index={index}
                question={question}
                length={questionList.length}
                newAttempt={newAttempt}
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
  attempt_id: state.attempt.attempt_id,
});

export default connect(mapStateToProps)(AttemptPage);
