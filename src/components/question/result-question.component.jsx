import React, { useCallback, useEffect, useMemo, useState } from "react";
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
import { getData, getUSerCorrectAnswers } from "./getData";
import { getResult } from "../../redux/user-answers/user-answers.actions";

const ResultQuestion = ({
  question,
  length,
  index,
  result,
  getResult,
}) => {
  const { _id, answers, text } = question;
  console.log(result);

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
            key={index}
            index={index}
            answer={answer}
            _id={_id}
            disable={true}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

const mapStateToProps = (state) => ({
  filteredAnswers: state.userAnswers.filteredAnswers,
  result: state.userAnswers.result,
});

const mapDispatchToProps = (dispatch) => ({
  getResult: () => dispatch(getResult()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultQuestion);
