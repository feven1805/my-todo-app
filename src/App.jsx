import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const taskAdd = () => {
    if (task!== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const taskDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>Welcome To My Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
      />
      <button onClick={taskAdd}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li type key={index}>
            {todo} <button onClick={() => taskDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;  
