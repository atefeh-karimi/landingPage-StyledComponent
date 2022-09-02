import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  flex-direction: ${(props) => props.layout};
  align-items: center;
  justify-content: space-between;
  border: 3px solid #d6d6d694;
  border-radius: 8px;
  padding: 60px;
  margin: 35px 0;
  img {
    width: 300px;
    margin: 0 30px;
    @media (max-width: ${(props) => props.theme.mobile}) {
      margin: 18px 0 8px 0;
    }
  }

  h1 {
    margin-bottom: 24px;
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    flex-direction: column;
  }
`;
