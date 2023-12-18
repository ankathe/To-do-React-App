import React from "react";
import Form from "./form.js";
import "./ListTask.css";
import Task from './task.js';
import { useState } from "react";

function ListTask() {
    const [tasks, setTasks] = useState([]);
    const addTask = (task) => {
        if(task.text.trim()){
            task.text = task.text.trim();
            const taskAct = [task, ...tasks];
            setTasks(taskAct);
        }
    };

    const deleteTask = (id) => {
        const taskAct = tasks.filter(task => task.id !== id);
        setTasks(taskAct);
    }
    const completedTask = (id) => {
        const taskAct = tasks.map(task => {
            if(task.id === id){
                task.completed = !task.completed;
        }
        return task;
    });
    setTasks(taskAct);
    }


    return(
        <div className="container-general">
        <Form onSubmit={addTask}/>
        <div className="task-list-container">
            {tasks.map((task) => 
            <Task 
            key={task.id}
            id={task.id}
            text={task.text} 
            completed={task.completed} 
            deleteTask={deleteTask}
            completedTask={completedTask}/>
            
            )}
        </div>
        </div>
    );
};

export default ListTask;
