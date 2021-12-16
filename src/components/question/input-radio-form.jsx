import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Radio, FormControlLabel } from "@mui/material";

import "./question.styles.css";

const STATUS = {
  CORRECT_ANSWER: "CORRECT_ANSWER",
  YOUR_ANSWER: "YOUR_ANSWER",
  OTHER: "OTHER",
};

let filteredAnswersStored;
let userCorrectAnswers;
let userWrongAnswers;
let correctAnswerLeft;

const getData = async () => {
  filteredAnswersStored = await JSON.parse(
    localStorage.getItem("filtered-answers")
  );
  // console.log(filteredAnswersStored)

  userCorrectAnswers = filteredAnswersStored.userCorrectAnswers;
  userWrongAnswers = filteredAnswersStored.userWrongAnswers;
  correctAnswerLeft = filteredAnswersStored.correctAnswerLeft;
};

const InputRadioForm = ({ index, answer, _id, disabled }) => { 

  // let filteredAnswersStored;
  // let userCorrectAnswers;
  // let userWrongAnswers;
  // let correctAnswerLeft;

  const [className, setClassName] = useState("wrap-question");
  const [checked, setChecked] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(STATUS.OTHER);

  useEffect(async () => {
    await getData();
    if (_id in userCorrectAnswers && userCorrectAnswers[_id] == index) {
      setClassName("wrap-question wrap-question-correct");
      setChecked(true);
      setAnswerStatus(STATUS.CORRECT_ANSWER);
    } else if (_id in userWrongAnswers && userWrongAnswers[_id] == index) {
      setClassName("wrap-question wrap-question-wrong");
      setChecked(true);
      setAnswerStatus(STATUS.YOUR_ANSWER);
    } else if (_id in correctAnswerLeft && correctAnswerLeft[_id] == index) {
      setClassName("wrap-question isSelected");
      setAnswerStatus(STATUS.CORRECT_ANSWER);
    } else {
      setClassName("wrap-question");
      setAnswerStatus(STATUS.OTHER);
    }
  }, []);

  return (
    <div className="input-radio">
      <FormControlLabel
      className={className}
      key={index}
      control={<Radio />}
      label={answer}
      value={index}
      name={_id}
      checked={checked}
      disabled={disabled}
    />
      {answerStatus == STATUS.CORRECT_ANSWER && (
        <span class="span-answer">Correct answer</span>
      )}
      {answerStatus == STATUS.YOUR_ANSWER && (
        <span class="span-answer">Your answer</span>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  filteredAnswers: state.userAnswers.filteredAnswers,
});

export default connect(mapStateToProps)(InputRadioForm);
