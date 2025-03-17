import { useState } from 'react';
import CreateForm from '../CreateForm/CreateForm';
import Todo from '../Todo/Todo';
import './TodoWrapper.css'
import { TodoProps } from '../../interface';

const TodoWrapper = () => {

  const [todos, setTodos] = useState<TodoProps[]>([
    { content: 'cooking', id: Math.random(), isCompleted: false, isEditing: false },
    { content: 'landry', id: Math.random(), isCompleted: false, isEditing: false },
  ]);

  const addTodo = (content: string) => {
    setTodos([...todos, { content, id: Math.random(), isCompleted: false, isEditing: false }]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id: number) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo;
    }));
  };

  const toggleEditing = (id: number) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo;
    }));
  };

  const editTodo = (id: number, content: string) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ? { ...todo, content, isEditing: false } : todo;
    }));
  };

  return <div className="wrapper">
    <h1>Todo List</h1>
    <CreateForm addTodo={addTodo} />
    {todos.map((todo) => {
      return <Todo 
        key={todo.id} {...todo} 
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        toggleCompleted={toggleCompleted}
        toggleEditing={toggleEditing}
      />
    })}
  </div>;
}

export default TodoWrapper