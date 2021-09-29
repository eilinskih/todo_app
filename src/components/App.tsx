import React, { useState } from 'react';
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

const blurFunc = (e: any) => {
  if (inputValue !== "") {
  setItemsList(itemsList.concat({id: `${Date.now()}`, taskName: inputValue}));
  e.target.value = "";
  setInputValue("");
  }
};

const deleteItem = (itemId: string) => {
  setItemsList(itemsList.filter(item => item.id !== itemId));
};

const changeFunc = (e: any) => {
  setInputValue(e);
};
  return (
    <div className={a.App}>
      <h1>Todos</h1>
      <TextField id="outlined-basic" label="Add todo" variant="outlined" onChange={e =>changeFunc(e.target.value)} value={inputValue} onBlur={e => blurFunc(e)}/>
        <TaskItems deleteItem={deleteItem} itemsList={itemsList}/>
    </div>
  );
}

export default App;

