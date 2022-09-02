import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: ${(props) => props.theme.color.footer};
  color: white;
  padding: 80px 0 60px;

  img {
    margin-bottom: 20px;
    @media (max-width: ${(props) => props.theme.mobile}) {
      margin-left: 0;
    }
  }

  ul {
    list-style-type: none;

    li {
      margin-bottom: 18px;
      &:hover {
        opacity: 0.6;
      }
    }
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
      margin-bottom: 30px;
    }
  }
`;

export const FlexStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: ${(props) => props.theme.mobile}) {
    flex-direction: column;
  }
`;
