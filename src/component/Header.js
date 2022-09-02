import React from "react";
import {
  HeaderStyled,
  NavStyle,
  Logo,
  Image,
  HeaderInfo,
} from "./styles/Header.Styled";
import { Container } from "./styles/Container.Styled";
import { ButtonStyled } from "./styles/Button.Styled";

function Header() {
  return (
    <HeaderStyled>
      <Container>
        <NavStyle>
          <Logo src="./image/logo.svg" alt="" />
          <ButtonStyled>Try It Free</ButtonStyled>
        </NavStyle>
        <HeaderInfo>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              {" "}
              With your permission we and our partners may use precise
              geolocation data and identification through device scanning. You
              may click to consent to our and our partners.
            </p>
            <ButtonStyled textColor="white" backgroundColor="#ff0099">
              Get Started For Free
            </ButtonStyled>
          </div>
          <Image src="./image/illustration-mockups.svg" />
        </HeaderInfo>
      </Container>
    </HeaderStyled>
  );
}

export default Header;
