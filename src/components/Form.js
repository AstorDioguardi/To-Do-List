import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import '../stylesheets/Form.css';

const FormTasks = (props) => {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSend = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      finished: false
    }

    props.onSubmit(newTask);
    setInput('');
  };

  return (
  <form className='task__form' onSubmit={handleSend}>
    <input className='task__input' type='text' placeholder='Write a task' name='text' value={input} onChange={handleChange}/>
    <button className='task__button'>Add Task</button>
  </form>);
};

export default FormTasks;