import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  RadioGroup,
  FormControl,
  FormLabel,
} from "@mui/material";
import { connect } from "react-redux";

import "./question.styles.css";
import InputRadioForm from "./input-radio-form";
import { getResult } from "../../redux/user-answers/user-answers.actions";

const ResultQuestion = ({
  question,
  length,
  index
}) => {
  const { _id, answers, text } = question;
  // console.log(result);

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
        style={{ width: "100%"}}
      >
        {answers.map((answer, index) => (
          <InputRadioForm
            key={index}
            index={index}
            answer={answer}
            _id={_id}
            disabled={true}
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
