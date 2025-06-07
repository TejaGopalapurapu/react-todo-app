// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Completed from './Pages/Completed';

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => setTodos([...todos, task]);
  const removeTodo = (index) => setTodos(todos.filter((_, i) => i !== index));

  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <Header />

        {/* Simple Navigation */}
        <nav style={{ textAlign: "center", marginBottom: "20px" }}>
          <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
          <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
          <Link to="/completed" style={{ margin: "0 10px" }}>Completed</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home todos={todos} addTodo={addTodo} removeTodo={removeTodo} />} />
          <Route path="/about" element={<About />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
