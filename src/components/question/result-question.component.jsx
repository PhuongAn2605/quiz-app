import React, { useEffect, useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { connect } from "react-redux";

import "./question.styles.css";
import InputRadioForm from "./input-radio-form";



const ResultQuestion = ({ question, length, index, filteredAnswers }) => {
  const { _id, answers, text } = question;

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
        style={{ width: "100%", margin: "auto", marginLeft: "10px" }}
      >
        {answers.map((answer, index) => (
          <InputRadioForm
            index={index}
            answer={answer}
            _id={_id}
            disable={true}
            // userCorrectAnswers={userCorrectAnswers}
            // userWrongAnswers={userWrongAnswers}
            // correctAnswerLeft={correctAnswerLeft}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

const mapStateToProps = (state) => ({
  filteredAnswers: state.userAnswers.filteredAnswers,
});

export default connect(mapStateToProps)(ResultQuestion);
