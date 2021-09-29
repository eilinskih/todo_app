import React from 'react';
import i from './Task.module.css';
import { Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

type propsType = {
  deleteItem: Function,
  id: string,
  name: string
}

function Task(props: propsType) {

  const onDeleteClick = (e: any) => {
    props.deleteItem(props.id)
  }
  return (
      <div className={i.taskContainer}>
        <div>
          <Checkbox />
          <span>{props.name}</span>
        </div>  
          <DeleteIcon className={i.delete} onClick={onDeleteClick} id={props.id}/>
      </div>
  );
}

export default Task;