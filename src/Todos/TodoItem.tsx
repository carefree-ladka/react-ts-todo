type TodoItemProps = {
  todos: {
    text: string;
    id: string;
    completed: boolean;
  }[];
  deleteTodo: (idx: string) => void;
  updateTodo: (idx: string) => void;
};

export default function TodoItem(props: TodoItemProps): JSX.Element {
  return (
    <div>
      <ul>
        {props.todos?.map((todo) => (
          <div className="todo-item">
            <li
              key={todo.text}
              style={{
                textDecoration: todo.completed ? "line-through" : "none"
              }}
            >
              {todo.text}
            </li>
            <button onClick={() => props.deleteTodo(todo.id)}>delete</button>
            <button onClick={() => props.updateTodo(todo.id)}>update</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
