import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import GlobalStyle from "./theme/global";

// import styled from "styled-components";

// const Test = styled.p`
//   color: ${(props) => props.theme.colors.secondary};
// `;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header title="WHAT A TODO" />
        {/* input */}
        {/* list */}
        {/* <Test>Yo yo yo</Test> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
