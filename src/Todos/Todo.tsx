import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";

export default function Todo(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<
    Array<{
      text: string;
      id: string;
      completed: boolean;
    }>
  >([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const addTodos = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (value) {
      setTodos((prev) => [
        ...prev,
        { id: uuidv4(), text: value, completed: false }
      ]);
    }
    setValue("");
  };

  const deleteTodo = (idx: string) => {
    setTodos(todos.filter((todo) => todo.id !== idx));
  };

  const updateTodo = (idx: string) => {
    let newTodos = todos.map((todo) => {
      if (todo.id === idx) {
        return {
          ...todo,
          completed: true
        };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };
  return (
    <div>
      <form>
        <div>
          <label htmlFor="todo">Todo</label>
          <input
            type="text"
            name="value"
            id="todo"
            value={value}
            onChange={handleChange}
          />
          <button onClick={addTodos}>Add</button>
        </div>
      </form>
      <TodoItem todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
}
