import React, { useState, FocusEvent } from 'react';
import a from './App.module.css';
import { TextField } from '@material-ui/core';
import TaskItems from './TaskItems'

type stateType = {
  id: string,
  taskName: string
};

function App() {
  let [itemsList, setItemsList] = useState<stateType[]>([]);
  let [inputValue, setInputValue] = useState("");

  const blurFunc = (e: FocusEvent<HTMLInputElement>) => {
    if (inputValue !== "") {
      setItemsList(itemsList.concat({ id: `${Date.now()}`, taskName: inputValue }));
      e.target.value = "";
      setInputValue("");
    };
  };

  const deleteItem = (itemId: string) => {
    setItemsList(itemsList.filter(item => item.id !== itemId));
  };

  const changeFunc = (e: FocusEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={a.App}>
      <h1>Todos</h1>
      <TextField id="outlined-basic" label="Add todo" variant="outlined" onChange={changeFunc} value={inputValue} onBlur={blurFunc} />
      <TaskItems deleteItem={deleteItem} itemsList={itemsList} />
    </div>
  );
}

export default App;

