// let filteredAnswersStored;
// let userCorrectAnswers;
// let userWrongAnswers;
// let correctAnswerLeft;

export const getData = async () => {
  const filteredAnswersStored = await JSON.parse(
    localStorage.getItem("filtered-answers")
  );
  console.log(filteredAnswersStored)
  return filteredAnswersStored;
  // console.log(filteredAnswersStored)
//   getUSerCorrectAnswers(filteredAnswersStored)
//   getUSerWrongAnswers(filteredAnswersStored);
//   getCorrectAnswerLeft();

//   userCorrectAnswers = filteredAnswersStored.userCorrectAnswers;
//   userWrongAnswers = filteredAnswersStored.userWrongAnswers;
//   correctAnswerLeft = filteredAnswersStored.correctAnswerLeft;
};

// export const getUSerCorrectAnswers = (filteredAnswersStored) => {
//     return filteredAnswersStored.userCorrectAnswers;
// }

// export const getUSerWrongAnswers = (filteredAnswersStored) => {
//     return filteredAnswersStored.userWrongAnswers;
// }

// export const getCorrectAnswerLeft = (filteredAnswersStored) => {
//     return filteredAnswersStored.correctAnswerLeft;
// }