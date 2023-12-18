import React from 'react';
import './task.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({id, text, completed, completedTask, deleteTask}){
    return(
        <div className={completed ? 'task-container completed' : 'task-container'}>
            <div 
            className="task-text"
            onClick={() => completedTask(id)} >
            {text}
            </div>
            <div className="task-icon-container"
            onClick={() => deleteTask(id)}>
            <AiOutlineCloseCircle 
            className='icon-eliminate'/>
            </div>
        </div>
    );
};

export default Task;