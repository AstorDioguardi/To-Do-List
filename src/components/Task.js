import React from "react";

import { AiOutlineCloseCircle } from 'react-icons/ai';

const Task = ({ id, text, finished, toCompleteTask, deleteTask }) => (
  <div className={finished ? 'task__container task__finished' : 'task__container'}>
    <div className='task__text' onClick={() => toCompleteTask(id)}>
      {text}
    </div>
    <div className='task__icon-container' onClick={() => deleteTask(id)}>
      <AiOutlineCloseCircle className='task__icon'/>
    </div>
  </div>
);

export default Task;