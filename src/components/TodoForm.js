// src/components/TodoForm.js
import React, { useState, useRef, useEffect } from 'react';

function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");
  const inputRef = useRef(null); // 1. Create a ref

  useEffect(() => {
    inputRef.current.focus(); // 2. Auto-focus on mount
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTodo(task);
    setTask("");
    inputRef.current.focus(); // 3. Focus again after submitting
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "10px" }}>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        ref={inputRef} // 4. Attach ref to input
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
