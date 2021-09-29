import React from 'react';
import t from './TaskItems.module.css';
import Task from './Task'

type propsType = {
  deleteItem: Function,
  itemsList: {
    id: string,
    taskName: string}[]
}

function TaskItems(props: propsType) {
  let items = props.itemsList.map(item => {
    return (
    <Task id={item.id} key={item.id} name={item.taskName} deleteItem={props.deleteItem}/>
    )
  });
  return (
    <div className={t.itemsContainer}>
    {items}
    </div>
  );
}

export default TaskItems;