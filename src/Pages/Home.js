// src/pages/Home.js
import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

function Home({ todos, addTodo, removeTodo }) {
  return (
    <div>
        <h1>Home Page</h1>
        <h2>To Do Project</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default Home;
