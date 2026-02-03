import { useState } from 'react';

export default function TodoForm({ onAdd }: any) {
  const [title, setTitle] = useState('');

  return (
    <div style={{ marginBottom: 16 }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo title"
      />
      <button
        onClick={() => {
          if (!title) return;
          onAdd(title);
          setTitle('');
        }}
      >
        Add
      </button>
    </div>
  );
}
