import React, { useState, FocusEvent, ChangeEvent } from 'react';
import { TextField } from '@material-ui/core';

import a from './App.module.css';
import TaskItems from './TaskItems';
import { IHTMLInputElement, IItemsList } from './tsInterfaces';
import { useDispatch, useSelector } from 'react-redux';
import { addItemAC, deleteItemAC } from './../Redux/appReducer'
import { AppStateType, AppDispatch } from './../Redux/store'


const App: React.FC = () => {

  const [inputValue, setInputValue] = useState<string>("");
  const itemsList = useSelector<AppStateType, IItemsList[]>(state => state.appReducer.itemsList);
  const dispatch = useDispatch<AppDispatch>()

  const blurFunc = (e: FocusEvent<IHTMLInputElement>) => {
    if (inputValue !== "") {
      dispatch(addItemAC({ id: `${Date.now()}`, taskName: inputValue }));
      e.target.value = "";
      setInputValue("");
    };
  };

  const deleteItem = (itemId: string) => {
    dispatch(deleteItemAC(itemId));
  };

  const changeFunc = (e: ChangeEvent<IHTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={a.App}>
      <h1>Todos</h1>
      <TextField id="outlined-basic" label="Add todo" variant="outlined" onChange={changeFunc} value={inputValue} onBlur={blurFunc} />
      <TaskItems deleteItem={deleteItem} itemsList={itemsList} />
    </div>
  );
};

export default App;