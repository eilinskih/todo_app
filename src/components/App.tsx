import React, { useState, FocusEvent, ChangeEvent } from 'react';
import { TextField } from '@material-ui/core';

import a from './App.module.css';
import TaskItems from './TaskItems';
import { IHTMLInputElement, IItemsList } from './tsInterfaces';
import { connect } from 'react-redux';
import { addItemAC, deleteItemAC } from './../Redux/appReducer'
import { AppStateType } from './../Redux/store'

interface IAppProps {
  appState: Array<IItemsList>
  addItemAC: (item: IItemsList) => { type: string, taskItem: IItemsList }
  deleteItemAC: (itemId: string) => { type: string, taskId: string }
};

const App: (props: IAppProps) => JSX.Element = (props) => {
  const [inputValue, setInputValue] = useState<string>("");

  const blurFunc = (e: FocusEvent<IHTMLInputElement>) => {
    if (inputValue !== "") {
      props.addItemAC({ id: `${Date.now()}`, taskName: inputValue });
      e.target.value = "";
      setInputValue("");
    };
  };

  const deleteItem = (itemId: string) => {
    props.deleteItemAC(itemId);
  };

  const changeFunc = (e: ChangeEvent<IHTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={a.App}>
      <h1>Todos</h1>
      <TextField id="outlined-basic" label="Add todo" variant="outlined" onChange={changeFunc} value={inputValue} onBlur={blurFunc} />
      <TaskItems deleteItem={deleteItem} itemsList={props.appState} />
    </div>
  );
};

const mstp = (state: AppStateType) => ({
  appState: state.appReducer
})

const AppContainer = connect(mstp, { addItemAC, deleteItemAC })(App)

export default AppContainer;