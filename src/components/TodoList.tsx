export default function TodoList({ todos, onSelect, onUpdate }: any) {
  return (
    <table border={1} cellPadding={8}>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((t: any, i: number) => (
          <tr key={t.id} onClick={() => onSelect(t)}>
            <td>{i + 1}</td>
            <td>{t.title}</td>
            <td>
              <select
                value={t.status}
                onChange={(e) =>
                  onUpdate(t.id, { status: e.target.value })
                }
              >
                <option value="created">created</option>
                <option value="on_going">on_going</option>
                <option value="completed">completed</option>
                <option value="problem">problem</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
