import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  
  const categoriesToDisplay = categories.filter(category => category !== 'All');
  const [newTask, setNewTask] = useState({text: '', category: categoriesToDisplay[0]});
  
  function handleFormSubmit (event) {
    event.preventDefault();
    onTaskFormSubmit(newTask);
  }

  function updateNewTask (event) {
    setNewTask({...newTask,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={newTask.text}
          onChange={updateNewTask}
        />
      </label>
      <label>
        Category
        <select name="category" value={newTask.category} onChange={updateNewTask}>
          {categoriesToDisplay.map(category => {
            return (
              <option key={category}>{category}</option>
            )
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
