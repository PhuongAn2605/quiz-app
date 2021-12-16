import React from "react";

import { HeaderStyle, QuizNameStyle } from "./header.styles";
import { ArticleStyle } from "../../utils/styles";

const Header = () => {
  return (
    <ArticleStyle>
      <HeaderStyle>
        <h1>WPR</h1>
        <div>
          <span>M</span>
          <span>E</span>
          <span>R</span>
          <span>N</span>
        </div>
      </HeaderStyle>
      <QuizNameStyle id="quiz-name">
        <h1>HTML Quiz</h1>
      </QuizNameStyle>
    </ArticleStyle>
  );
};

export default Header;
