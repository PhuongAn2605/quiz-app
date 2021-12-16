export const filterAnswers = (result) => {
  const { correctAnswers, answers } = result;
  let userCorrectAnswers = {};
  let userWrongAnswers = {};

  const correctAnswerLeft = { ...correctAnswers };

  for (let ans in answers) {
    if (correctAnswers[ans] == answers[ans]) {
      userCorrectAnswers[[ans]] = correctAnswers[ans];
      delete correctAnswerLeft[[ans]];
    } else {
      userWrongAnswers[[ans]] = answers[ans];
    }
  }
  const filteredAnswers = {
    userCorrectAnswers,
    userWrongAnswers,
    correctAnswerLeft
  }
  localStorage.setItem('filtered-answers', JSON.stringify(filteredAnswers));
  return filteredAnswers;
};
