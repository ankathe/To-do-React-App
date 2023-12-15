import React from "react";
import Form from "./form.js";
import "./ListTask.css";
import { useState } from "react";

function ListTask() {
  return (
    <>
      <Form />
      <div className="task-list-container">
        {task.map((task) => (
          <Tarea texto={task.text}
          completed ={task.completed}/>
        ))}
      </div>
    </>
  );
}

export default ListTask;
