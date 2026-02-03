import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggle }: any) {
  return (
    <>
      {todos.map((t: any) => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} />
      ))}
    </>
  );
}
