import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [taskList, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  function onSelection (event) {
    setSelectedCategory(event.target.value);
  }

  function onTaskFormSubmit (newTask) {
    setTasks([...taskList, newTask]);
  }

  function removeTask (deletedTaskText) {
    const newList = taskList.filter(task => task.text !== deletedTaskText);
    setTasks(newList);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selection={selectedCategory}
        onSelection={onSelection}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        tasks={taskList}
        selectedCategory={selectedCategory}
        onClickDelete={removeTask}
      />
    </div>
  );
}

export default App;
