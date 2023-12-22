import React from "react";
import "./App.scss";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import Todo from "./assets/direct-hit.png";
import Doing from "./assets/glowing-star.png";
import Done from "./assets/check-mark-button.png";

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <TaskColumn title="To do" image={Todo} />
        <TaskColumn title="Doing" image={Doing} />
        <TaskColumn title="Done" image={Done} />
      </main>
    </div>
  );
};

export default App;
