import React, { useState } from 'react';

function Form({ onClose, onAddTask }) {
  const [taskName, setTaskName] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [taskList, setTaskList] = useState('todo');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now().toString(), // Générer un ID unique
      name: taskName,
      description: taskDesc,
      list: taskList, // Indiquer dans quelle liste la tâche doit être ajoutée
    };

    // Appeler la fonction pour ajouter la tâche dans la bonne colonne
    onAddTask(newTask);

    // Fermer le formulaire après soumission
    onClose();
  };

  return (
    <div className="form-container">
      <h3>Add New Task</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Task name: </label><br />
        <input
          type="text"
          id="name"
          name="name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        /><br />
        
        <label htmlFor="desc">Description: </label><br />
        <textarea
          name="desc"
          id="desc"
          value={taskDesc}
          onChange={(e) => setTaskDesc(e.target.value)}
        /><br />
        
        <label htmlFor="list">Select List: </label><br />
        <select
          name="list"
          id="list"
          value={taskList}
          onChange={(e) => setTaskList(e.target.value)}
        >
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select><br />
        
        <button type="submit">Add Task</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default Form;
