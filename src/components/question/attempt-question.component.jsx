import React, { useEffect, useMemo, useState } from "react";
import {
  RadioGroup,
  FormControl,
  FormLabel,
} from "@mui/material";
import { connect } from "react-redux";

import "./question.styles.css";
import { addUserAnswer } from "../../redux/user-answers/user-answers.actions";
import isEmpty from "is-empty";
import InputRadioFormAttempt from "./input-radio-form-attempt";

const AttemptQuestion = ({
  userAnswers,
  question,
  length,
  index,
  addUserAnswer,
}) => {
  const { _id, answers, text } = question;
  const [className, setClassName] = useState("wrap-question");

  // const handleAddUserAnswer = (event) => {
  //   addUserAnswer({
  //     question_id: event.currentTarget.name,
  //     answer: event.currentTarget.value,
  //   });
  // };

  let storedAnswers = {};
  useEffect(() => {
    if (isEmpty(userAnswers)) {
      storedAnswers = JSON.parse(localStorage.getItem("user-answers"));
      // setNewAttempt(false);
    } else {
      storedAnswers = { ...userAnswers };
      // setNewAttempt(true);
    }
  }, [userAnswers]);

  return (
    <FormControl component="fieldset" className="ques-form">
      <FormLabel component="legend">
        <h2>
          Question {index + 1} of {length}
        </h2>
      </FormLabel>

      <FormLabel component="legend">{text}</FormLabel>
      <RadioGroup
        aria-label={_id}
        name="radio-buttons-group"
        style={{ width: "100%" }}
      >
        {answers.map((answer, index) => {
          return (
            // <FormControlLabel
            //   className={className}
            //   key={index}
            //   control={<Radio />}
            //   label={answer}
            //   value={index}
            //   name={_id}
            //   // checked={checked}
            //   onChange={(e) => handleAddUserAnswer(e)}
            // ></FormControlLabel>
            <InputRadioFormAttempt
              key={index}
              index={index}
              answer={answer}
              _id={_id}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

const mapStateToProps = (state) => ({
  filteredAnswers: state.userAnswers.filteredAnswers,
  userAnswers: state.userAnswers.answers,
});

const mapDispatchToProps = (dispatch) => ({
  addUserAnswer: (userAnswer) => dispatch(addUserAnswer(userAnswer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AttemptQuestion);
