import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import isEmpty from "is-empty";

import { Radio, FormControlLabel } from "@mui/material";

import { addUserAnswer } from "../../redux/user-answers/user-answers.actions";

import "./question.styles.css";

const STATUS = {
  CORRECT_ANSWER: "CORRECT_ANSWER",
  YOUR_ANSWER: "YOUR_ANSWER",
  OTHER: "OTHER",
};

const InputRadioForm = ({ index, answer, _id, disabled, filteredAnswers, userAnswers, addUserAnswer }) => {
  const [className, setClassName] = useState("wrap-question");
  const [checked, setChecked] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(STATUS.OTHER);
  // const [newAttempt, setNewAttempt] = useState(false);

  let storedFilteredAnswers = {};
  let storedUserAnswers = {};


  const getStoredUserAnswers = useCallback(() => {
    if(localStorage.getItem('user-answers')){
      storedUserAnswers = JSON.parse(localStorage.getItem('user-answers'));
    }else{
      storedUserAnswers = { ...userAnswers};
    }
  }, [userAnswers, storedUserAnswers]);


  const getStoredFilteredAnswers = useCallback(() => {
    if (isEmpty(filteredAnswers)) {
      storedFilteredAnswers = JSON.parse(
        localStorage.getItem("filtered-answers")
      );
    } else if (!isEmpty(filteredAnswers)) {
      storedFilteredAnswers = { ...filteredAnswers };
    }
  }, [filteredAnswers, storedFilteredAnswers]);

  getStoredUserAnswers();
  getStoredFilteredAnswers();

  useEffect(() => {
    if(_id in storedUserAnswers && storedUserAnswers[_id] == index){
      setChecked(true);
      setClassName('wrap-question isSelected');
      // setNewAttempt(true);
    }
  }, [storedUserAnswers, _id, index])

  useEffect(() => {
    if (!isEmpty(storedFilteredAnswers)) {
      const { userCorrectAnswers, userWrongAnswers, correctAnswerLeft } =
        storedFilteredAnswers;

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
    }
  }, [storedFilteredAnswers, filteredAnswers, _id, index]);

  const handleAddUserAnswer = (event) => {
    addUserAnswer({
      question_id: event.currentTarget.name,
      answer: event.currentTarget.value,
    });
  };

  return (
    <div className="input-radio">
      <FormControlLabel
        className={className}
        key={index}
        control={<Radio />}
        label={answer}
        value={index}
        name={_id}
        checked = {checked}
        disabled={disabled}
        onChange={(e) =>handleAddUserAnswer(e)}
      />
      {answerStatus == STATUS.CORRECT_ANSWER && (
        <span className="span-answer">Correct answer</span>
      )}
      {answerStatus == STATUS.YOUR_ANSWER && (
        <span className="span-answer">Your answer</span>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  filteredAnswers: state.userAnswers.filteredAnswers,
  userAnswers: state.userAnswers.answers
});
const mapDispatchToProps = (dispatch) => ({
  addUserAnswer: (userAnswer) => dispatch(addUserAnswer(userAnswer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputRadioForm);
