import React, { MouseEvent } from 'react';
import { Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import i from './Task.module.css';

interface propsType {
  deleteItem: (itemId: string) => void,
  id: string,
  name: string
};

const Task: (props: propsType) => JSX.Element = (props: propsType) => {

  const onDeleteClick = (e: MouseEvent) => {
    props.deleteItem(props.id);
  };

  return (
    <div className={i.taskContainer}>
      <div>
        <Checkbox />
        <span>{props.name}</span>
      </div>
      <DeleteIcon className={i.delete} onClick={onDeleteClick} id={props.id} />
    </div>
  );
};

export default Task;