import React, { useEffect } from "react";
import { connect } from "react-redux";

import ButtonSubmit from "../../components/button/button.component";

import { AuthorStyle, FormStyle } from "./introduction.styles";
import { ArticleStyle } from "../../utils/styles";
import { fetchQuestions } from "../../redux/question/question.actions";

const clearData = async () => {
  if (await localStorage.getItem("wpr-attempt")) {
    await localStorage.removeItem("wpr-attempt");
  }
  if(await localStorage.getItem("wpr-result")){
    await localStorage.removeItem("wpr-result");
  }
  if(await localStorage.getItem("filtered-answers")){
    await localStorage.removeItem("filtered-answers")
  }
}

const IntroductionPage = ({ fetchQuestions }) => {

  useEffect(() => {
    fetchQuestions();
    clearData();
    
  }, [])

  return (
    <ArticleStyle>
      <section id="introduction">
        <AuthorStyle className="author">By Phuong An</AuthorStyle>
        <h2>The Test</h2>
        <p>The test contains 10 questions and there is no time limit.</p>
        <p>
          The test is not official, it's just a nice way to see how much you
          know, or don't know, about HTML.
        </p>
        <h2>Count Your Score</h2>
        <p>
          You will get 1 point for each correct answer. At the end of the Quiz,
          your total score will be displayed. Maximum score is 10 points.
        </p>

        <FormStyle>
          <h2>Start the quiz</h2>
          <p>Good luck!</p>
          <br />
          <ButtonSubmit
            title="Start the HTML quiz"
            url="/attempts"
            button_id="start-quiz"
          />
        </FormStyle>
      </section>
    </ArticleStyle>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions())
})

export default connect(null, mapDispatchToProps)(IntroductionPage);
