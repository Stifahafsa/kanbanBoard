import React, { useState } from 'react';
import '../App.css';
import Form from './Form';

function Board() {
  const [todoTasks, setTodoTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [showForm, setShowForm] = useState(false); // État pour afficher le formulaire
  const [draggedTask, setDraggedTask] = useState(null); // État pour suivre la tâche en cours de glissement

  const handleShowForm = () => {
    setShowForm(true); // Afficher le formulaire
  };

  const handleCloseForm = () => {
    setShowForm(false); // Fermer le formulaire
  };

  // Fonction pour ajouter une tâche à la bonne liste (selon la colonne choisie)
  const handleAddTask = (newTask) => {
    if (newTask.list === 'todo') {
      setTodoTasks((prevTasks) => [...prevTasks, newTask]);
    } else if (newTask.list === 'inprogress') {
      setInProgressTasks((prevTasks) => [...prevTasks, newTask]);
    } else if (newTask.list === 'done') {
      setDoneTasks((prevTasks) => [...prevTasks, newTask]);
    }
  };

  // Gérer le début du glissement
  const handleDragStart = (e, task) => {
    setDraggedTask(task); // Suivre la tâche glissée
  };

  // Gérer le glissement sur une zone de dépôt
  const handleDragOver = (e) => {
    e.preventDefault(); // Permettre à l'élément d'être déplacé sur cette zone
  };

  // Gérer le dépôt de la tâche dans une nouvelle colonne
  const handleDrop = (e, column) => {
    e.preventDefault();

    if (draggedTask) {
      // Retirer la tâche de la colonne actuelle
      if (draggedTask.list === 'todo') {
        setTodoTasks((prevTasks) => prevTasks.filter(task => task.id !== draggedTask.id));
      } else if (draggedTask.list === 'inprogress') {
        setInProgressTasks((prevTasks) => prevTasks.filter(task => task.id !== draggedTask.id));
      } else if (draggedTask.list === 'done') {
        setDoneTasks((prevTasks) => prevTasks.filter(task => task.id !== draggedTask.id));
      }

      // Ajouter la tâche à la nouvelle colonne
      const updatedTask = { ...draggedTask, list: column };
      
      if (column === 'todo') {
        setTodoTasks((prevTasks) => [...prevTasks, updatedTask]);
      } else if (column === 'inprogress') {
        setInProgressTasks((prevTasks) => [...prevTasks, updatedTask]);
      } else if (column === 'done') {
        setDoneTasks((prevTasks) => [...prevTasks, updatedTask]);
      }

      setDraggedTask(null); // Réinitialiser la tâche en cours de glissement
    }
  };

  return (
    <div>
      <h1>Kanban Board</h1>
      <div className="example-parent">
        <div className="example-form">
          {/* Bouton pour ajouter une tâche */}
          <button onClick={handleShowForm} id='btn'>Add new task</button>

          {/* Formulaire d'ajout de tâche */}
          {showForm && (
            <Form onClose={handleCloseForm} onAddTask={handleAddTask} />
          )}
        </div>

        {/* Section To-do */}
        <div
          className="example-origin"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'todo')}
        >
          <h2>To-do</h2>
          {todoTasks.map((task) => (
            <div
              key={task.id}
              className="example-draggable"
              draggable="true"
              onDragStart={(e) => handleDragStart(e, task)}
            >
              {task.name}
            </div>
          ))}
        </div>

        {/* Section In Progress */}
        <div
          className="example-drop"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'inprogress')}
        >
          <h2>In Progress</h2>
          {inProgressTasks.map((task) => (
            <div
              key={task.id}
              className="example-draggable"
              draggable="true"
              onDragStart={(e) => handleDragStart(e, task)}
            >
              {task.name}
            </div>
          ))}
        </div>

        {/* Section Done */}
        <div
          className="example-dropzone"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'done')}
        >
          <h2>Done</h2>
          {doneTasks.map((task) => (
            <div
              key={task.id}
              className="example-draggable"
              draggable="true"
              onDragStart={(e) => handleDragStart(e, task)}
            >
              {task.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Board;
