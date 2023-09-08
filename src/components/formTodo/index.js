import React, { useState } from "react";
import "./index.css";

export default function FormTodo() {
  const API = "http://localhost:5000";
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todo = {
      id: Math.random(),
      title,
      time,
      done: false,
    };

    await fetch(API + "/todos", {
      method: "Post",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setTitle("");
    setTime("");
  };

  return (
    <div className="form-todo">
      <h2>Insira a sua próxima tarefa</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="title">Tarefa</label>
          <input
            type="text"
            name="title"
            placeholder="Titulo da tarefa"
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="time">Duração</label>
          <input
            type="text"
            name="time"
            placeholder="Estimativa do tempo (1h,2h...)"
            onChange={(e) => setTime(e.target.value)}
            value={time || ""}
            required
          />
        </div>
        <input type="submit" value="Criar Tarefa" />
      </form>
    </div>
  );
}
