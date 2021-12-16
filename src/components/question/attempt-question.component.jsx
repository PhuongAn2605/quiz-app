import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { connect } from 'react-redux';

import './question.styles.css';
import { addUserAnswer } from "../../redux/user-answers/user-answers.actions";

const AttemptQuestion = ({ question, length, index, addUserAnswer }) => {
  const { _id, answers, text } = question;
  const [checked, setChecked] = useState(false);

    // console.log(userCorrectAnswers)

  const handleAddUserAnswer = (event) => {
    setChecked(!checked);
    addUserAnswer({
      question_id: event.currentTarget.name,
      answer: event.currentTarget.value
    });
  }

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
        style={{ width: "100%", margin:"auto", marginLeft: "10px"}}
      >
        {answers.map((answer, index) => (
          <FormControlLabel className="wrap-question"
            key={index}
            control={<Radio />}
            label={answer}
            value={index}
            name={_id}
            onChange={(e) => handleAddUserAnswer(e)}
          ></FormControlLabel>
        ))}
      </RadioGroup>
    </FormControl>
  );
};

const mapStateToProps = state => ({
  filteredAnswers: state.userAnswers.filteredAnswers
})

const mapDispatchToProps = dispatch => ({
  addUserAnswer: (userAnswer) => dispatch(addUserAnswer(userAnswer))
});

export default connect(mapStateToProps, mapDispatchToProps)(AttemptQuestion);
