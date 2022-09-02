import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyled } from "./component/styles/Global.Styled";
import { Container } from "./component/styles/Container.Styled";
import Header from "./component/Header";
import { data } from "./content";
import Card from "./component/Card";
import Footer from "./component/Footer";

const theme = {
  color: {
    header: "#ebfbff",
    body: "fff",
    footer: "#003333",
  },
  mobile: "768px",
  tablet: "992px",
  laptop: "1200px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyled />
        <Header />
        <Container>
          {data.map((c) => {
            return (
              <Card
                key={c.id}
                id={c.id}
                title={c.title}
                body={c.body}
                img={c.image}
              />
            );
          })}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
