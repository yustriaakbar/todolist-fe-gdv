import { useState } from 'react';

export default function TodoForm({ onAdd }: any) {
  const [title, setTitle] = useState('');

  return (
    <div className="add-box">
      <input
        placeholder="Add new todo it"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          if (!title) return;
          onAdd(title);
          setTitle('');
        }}
      >
        + Add
      </button>
    </div>
  );
}
