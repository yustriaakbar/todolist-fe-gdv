import { useEffect, useState } from 'react';
import { getTodos, createTodo, updateTodo } from './api/todoApi';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoDetail from './components/TodoDetail';

function App() {
  const [todos, setTodos] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadTodos = async () => {
    setLoading(true);
    try {
      const res = await getTodos();
      setTodos(res.data);
      setError('');
    } catch (err) {
      setError('Gagal load data todo');
    }
    setLoading(false);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo App</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <TodoForm
        onAdd={async (title: string) => {
          await createTodo(title);
          loadTodos();
        }}
      />

      <TodoList
        todos={todos}
        onSelect={setSelected}
        onUpdate={async (id: number, payload: any) => {
          await updateTodo(id, payload);
          loadTodos();
        }}
      />

      <TodoDetail todo={selected} />
    </div>
  );
}

export default App;
