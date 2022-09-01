import React from "react";
import Task from "./Task";

function TaskList ({ tasks, selectedCategory = 'All', onClickDelete }) {

  const tasksToDisplay = tasks.filter(task => {
    if (selectedCategory === 'All') return true;
    if (task.category === selectedCategory) return true;
    return false;
  });

  return (
    <div className="tasks">
      {tasksToDisplay.map(task => {
        return (
          <Task
            key={task.text}
            text={task.text}
            category={task.category}
            onClickDelete={onClickDelete}
          />
        )
      })}
    </div>
  );
}

export default TaskList;
