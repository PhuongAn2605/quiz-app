import styled from "styled-components";

export const ArrowRightStyle = styled.i`
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 2px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

export const ButtonStyle = styled.button`
  padding: 1rem 1rem;
  /* background-color: #2196F3; */
  color: white;
  background-color: ${({ button_id }) =>
    button_id === "green-btn" ? "#4CAF50" : "#2196F3"};
  &:hover {
    background-color: ${({ button_id }) =>
      button_id === "green-btn" ? "#46a049" : "#0d8bf2"};
  }
`;
