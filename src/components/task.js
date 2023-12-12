import React from 'react';

function Task(Text){
    return(
        <div className="task-container">
            <div className="task-text">
                {Text}
            </div>
            <div className="task-icon">
                eliminate
            </div>
        </div>
    );
}

export default Task;