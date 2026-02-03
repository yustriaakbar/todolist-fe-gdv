export default function TodoDetail({ todo }: any) {
  if (!todo) return null;

  return (
    <div style={{ marginTop: 16 }}>
      <h3>Detail Todo</h3>
      <p>Status: {todo.status}</p>
      {todo.problem_desc && (
        <p>Problem: {todo.problem_desc}</p>
      )}
      <p><i>AI Recommendation: (placeholder)</i></p>
    </div>
  );
}
