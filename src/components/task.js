import React from 'react';
import './task.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({text, completed, finished}){
    return(
        <div className={completed ? 'task-container completed' : 'task-container'}>
            <div className="task-text">
                {text}
            </div>
            <div className="task-icon-container">
            <AiOutlineCloseCircle className='icon-eliminate'/>
            </div>
        </div>
    );
}

export default Task;