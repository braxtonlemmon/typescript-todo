import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import GlobalStyle from "./theme/global";

function App() {
  const [todoList, setTodoList] = useState<string[]>([]);

  const addTodoToList = (todoItem: string): void => {
    setTodoList([...todoList, todoItem]);
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header title="WHAT A TODO" />
        <Form addTodoToList={addTodoToList} />
      </div>
    </ThemeProvider>
  );
}

export default App;
