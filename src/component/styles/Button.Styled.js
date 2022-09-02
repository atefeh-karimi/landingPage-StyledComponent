import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.backgroundColor || "white"};
  color: ${(props) => props.textColor || "black"};
  padding: 15px 50px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
