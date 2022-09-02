import styled from "styled-components";

export const SocialIconsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  list-style-type: none;
  @media (max-width: ${(props) => props.theme.mobile}) {
    justify-content: center;
  }
  li {
    margin-right: 5px;
    &:hover {
      opacity: 0.6;
    }
  }
`;
