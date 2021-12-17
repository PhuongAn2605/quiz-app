import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import isEmpty from "is-empty";

import { Radio, FormControlLabel } from "@mui/material";

import { addUserAnswer } from "../../redux/user-answers/user-answers.actions";

import "./question.styles.css";


const InputRadioFormAttempt = ({ index, answer, _id, userAnswers, addUserAnswer }) => {
  const [className, setClassName] = useState("wrap-question");
  const [checked, setChecked] = useState(false);
  // const [newAttempt, setNewAttempt] = useState(false);

  let storedUserAnswers = {};


  const getStoredUserAnswers = useCallback(() => {
    if(localStorage.getItem('user-answers')){
      storedUserAnswers = JSON.parse(localStorage.getItem('user-answers'));
    }else{
      storedUserAnswers = { ...userAnswers};
    }
  }, [userAnswers, storedUserAnswers]);


  getStoredUserAnswers();

  useEffect(() => {
    if(_id in storedUserAnswers && storedUserAnswers[_id] === index){
      setChecked(true);
      setClassName('wrap-question isSelected');
      // setNewAttempt(true);
    }
  }, [storedUserAnswers, _id, index])

 
  const handleAddUserAnswer = (event) => {
    addUserAnswer({
      question_id: _id,
      answer: event.currentTarget.value,
    });
    console.log(_id);
  };

  return (
    <div className="input-radio">
      { checked && <FormControlLabel
        className={className}
        key={index}
        control={<Radio />}
        label={answer}
        value={index}
        name={_id}
        checked = {checked}
        onChange={(e) =>handleAddUserAnswer(e)}
      />}
      {
        !checked && <FormControlLabel
        className={className}
        key={index}
        control={<Radio />}
        label={answer}
        value={index}
        name={_id}
        onChange={(e) =>handleAddUserAnswer(e)}
      />
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  userAnswers: state.userAnswers.answers
});
const mapDispatchToProps = (dispatch) => ({
  addUserAnswer: (userAnswer) => dispatch(addUserAnswer(userAnswer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputRadioFormAttempt);
