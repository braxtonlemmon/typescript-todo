import React, { useState, useEffect } from "react";
import { Wrapper } from "./App.styles";
import Header from "./components/Header/Header";
import UserForm from "./components/UserForm/UserForm";
import Form from "./components/Form/Form";
import Display from "./components/Display/Display";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import GlobalStyle from "./theme/global";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Header title="WHAT A TODO" />
          <UserForm />
          <Form />
          <Display />
        </Wrapper>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
