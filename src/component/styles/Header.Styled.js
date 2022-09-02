import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: ${(props) => props.theme.color.header};
  padding: 40px 0;
`;

export const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 70px;

  @media (max-width: ${(props) => props.theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${(props) => props.theme.mobile}) {
    margin-bottom: 40px;
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${(props) => props.theme.mobile}) {
    margin: 40px 0 30px;
  }
`;
