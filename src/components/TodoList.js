import React from 'react';

function TodoList({ todos, removeTodo }) {
  return (
    <div>
      <h2>Your Todos</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              style={{ marginLeft: '10px' }}
              onClick={() => removeTodo(index)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
