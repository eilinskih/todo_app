import React from 'react';

import { IItemsList } from './tsInterfaces'
import t from './TaskItems.module.css';
import Task from './Task'


interface propsType {
  deleteItem: (itemId: string) => void,
  itemsList: IItemsList[]
};

const TaskItems: React.FC< propsType > = (props) => {
  const items = props.itemsList.map(item => {
    return (
      <Task id={item.id} key={item.id} taskName={item.taskName} deleteItem={props.deleteItem} />
    );
  });

  return (
    <div className={t.itemsContainer}>
      {items}
    </div>
  );
};

export default TaskItems;