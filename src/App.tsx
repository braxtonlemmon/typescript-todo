import React from "react";
import { Wrapper } from "./App.styles";
import Header from "./components/Header/Header";
import UserForm from "./components/UserForm/UserForm";
import Form from "./components/Form/Form";
import Display from "./components/Display/Display";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import GlobalStyle from "./theme/global";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function App() {
  const isInitiated: boolean = useSelector((state: RootState) => {
    return state.systemReducer.isInitiated;
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header title="WHAT A TODO" />
        {!isInitiated && <UserForm />}
        {isInitiated && (
          <>
            <Form />
            <Display />
          </>
        )}
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
