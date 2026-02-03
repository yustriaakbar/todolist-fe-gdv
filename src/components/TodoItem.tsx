export default function TodoItem({ todo, onToggle }: any) {
  return (
    <div className="todo-item">
      <div className="todo-left">
        <input
          type="checkbox"
          checked={todo.status === 'completed'}
          onChange={() => onToggle(todo)}
        />
        <span
          className={
            todo.status === 'completed' ? 'todo-complete' : ''
          }
        >
          {todo.title}
        </span>
      </div>
      <span className="delete-btn">🗑</span>
    </div>
  );
}
