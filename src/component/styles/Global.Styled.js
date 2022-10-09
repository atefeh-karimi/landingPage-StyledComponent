import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: ${(props) => props.theme.color.body};
  color: hsl(192,100%,9%);
  font-size: 1.15em;
  user-select:none;
}
p{
  opacity: 0.6;
  line-height: 1.5;
}
img{
  max-width: 100%;
}
li{
  user-select:none;
  cursor: pointer;
}
`;
