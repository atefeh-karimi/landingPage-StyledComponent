import React from "react";
import { Container } from "./styles/Container.Styled";
import { FooterStyled, FlexStyle } from "./styles/Footer.Styled";
import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <FooterStyled>
      <Container>
        <div className="text-center mb-5">
          <img src="./image/logo_white.svg" alt="" />
          <p>
            {" "}
            certainly helped narrow the whereabouts origin certainly
            <br /> helped narrow the whereabouts of lorem ipsum's origin
          </p>
        </div>
        <FlexStyle>
          <ul>
            <SocialIcons />
            <li>+98-9366488455</li>
            <li>atefeh.karimi.kia@gmail.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact US</li>
          </ul>
        </FlexStyle>
      </Container>
    </FooterStyled>
  );
}

export default Footer;
