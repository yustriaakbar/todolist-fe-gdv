import { useEffect, useState } from 'react';
import './styles/todo.css';
import { getTodos, createTodo, updateTodo } from './api/todoApi';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState<any[]>([]);
  const [search, setSearch] = useState('');

  const loadTodos = async () => {
    const res = await getTodos(search);
    setTodos(res.data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="todo-card">
      <div className="todo-header">Todo List</div>

      <div className="todo-body">
        <div className="search-box">
          <input
            placeholder="Search todo"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={loadTodos}>🔍</button>
        </div>

        <TodoList
          todos={todos}
          onToggle={async (todo: any) => {
            await updateTodo(todo.id, {
              status: todo.status === 'completed' ? 'created' : 'completed',
            });
            loadTodos();
          }}
        />

        {/* <button className="clear-btn">Clear All</button> */}

        <TodoForm
          onAdd={async (title: string) => {
            await createTodo(title);
            loadTodos();
          }}
        />
      </div>
    </div>
  );
}

export default App;
