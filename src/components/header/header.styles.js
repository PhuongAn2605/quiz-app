import styled from "styled-components";



export const HeaderStyle = styled.header`
  display: flex;
  border-bottom: 1px solid #cccccc;
  height: 80px;

  div,
  h1 {
    display: flex;
    flex-grow: 1;
  }

  div,
  div span,
  h1 {
    display: flex;
    align-content: space-between;
    align-items: center;
  }
  div {
    justify-content: flex-end;
  }
  h1 {
    font-family: "Helvetica", sans-serif;
    font-size: 32px;
    font-weight: bold;
    color: #ee3322;
    justify-content: flex-start;
    margin: 0;
  }
  div span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: #ffee00;
    border-radius: 100%;
    font-weight: bold;
    margin: 0 5px;
    transform: rotate(-30deg);
  }
`;

export const QuizNameStyle = styled.section`
  margin: auto;
  height: 425px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-image: url("./images/background.jpg");
  height: 425px;
  margin-bottom: 20px;
  background-size: cover;
  background-position: center;

  h1 {
    background-color: rgba(255, 255, 255, 0.9);
    font-family: "Pangolin", "Trebuchet MS", cursive;
    font-size: 60px;
    color: black;
    padding: 10px;
    max-width: 75%;
  }
`;
