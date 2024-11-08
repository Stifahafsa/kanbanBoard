
### `README.md`

```markdown
# Kanban Board React Application

This is a simple Kanban board built with React. It allows users to manage tasks by moving them between three columns: **To-do**, **In Progress**, and **Done**. The application supports adding tasks, dragging and dropping them between columns, and ensures that tasks are not duplicated when moved.

## Features

- **Add New Task**: Add tasks to the board by using a form that includes the task's name and category (To-do, In Progress, or Done).
- **Drag and Drop**: Tasks can be dragged between the three columns (To-do, In Progress, Done) using HTML5 drag-and-drop functionality.
- **Task Management**: Tasks are managed in different states (`To-do`, `In Progress`, `Done`). The state is updated dynamically when tasks are moved.
- **No Task Duplication**: When a task is moved from one column to another, it is removed from the original column and added to the new one, preventing duplication.

## Technologies Used

- **React**: The core library used to build the UI.
- **State Management**: React `useState` hook for managing tasks in different columns.
- **CSS**: Basic CSS for styling the board and its components.
- **Drag and Drop**: Native HTML5 drag-and-drop API for moving tasks between columns.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/kanban-board-react.git
   ```

2. Navigate to the project directory:
   ```bash
   cd kanban-board-react
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to see the Kanban board in action.

## File Structure

```
/src
  /components
    Board.js          # Main board component that handles task management
    Form.js           # Form component to add new tasks
  App.js              # Main application component
  App.css             # Styling for the board and tasks
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the classic Kanban board workflow.
- Uses React hooks (`useState`) to manage state in functional components.
```

### Instructions pour personnaliser le fichier `README.md` :
1. **Remplacer les détails de votre repository** : Changez le lien de clonage dans la section "How to Run the Project" avec l'URL correcte de votre repository GitHub.
2. **Ajoutez des captures d'écran ou des GIF** : Si vous le souhaitez, vous pouvez ajouter des images pour montrer à quoi ressemble le tableau Kanban en action. Par exemple, vous pouvez ajouter une section avec des images :
   ```markdown
   ## Screenshots
   ![Kanban Board](path_to_image.png)
   ```

