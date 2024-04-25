import React, { useState } from "react";
import FormTasks from "./Form";
import Task from "./Task";
import'../stylesheets/ThingsToDo.css';

const ThingsToDo = () => {

  const [tasks, setTasks] = useState ([]); 

  const addTask = task => {
    if (task.text.trim()) { //si la cadena/tarea no esta vacia, entonces:
      task.text = task.text.trim(); //se le quitan los espacios innecesarios del inicio y final
      const updatedTasks = [task, ...tasks]; //se declara que la nueva tarea este al principio y en orden hacia el final las anteriores
      setTasks(updatedTasks); //se actualiza el estado de tareas
    }
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const finishTask = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.finished = !task.finished;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
  <>
    <FormTasks onSubmit={addTask} />
    <div className='list__container'>
      {
        tasks.map((task) => 
          <Task 
            key={task.id} 
            id={task.id} 
            text={task.text} 
            finished={task.finished}
            toCompleteTask={finishTask}
            deleteTask={deleteTask}
          />
        )
      }
    </div>
  </>)
};

export default ThingsToDo;