import React, { useState, useEffect } from "react";
import { Wrapper } from "./App.styles";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Display from "./components/Display/Display";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import GlobalStyle from "./theme/global";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  const [todoList, setTodoList] = useState<string[]>([]);
  console.log(store);
  const addTodoToList = (todoItem: string): void => {
    setTodoList([...todoList, todoItem]);
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Header title="WHAT A TODO" />
          <Form addTodoToList={addTodoToList} />
          <Display todoList={todoList} />
        </Wrapper>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
