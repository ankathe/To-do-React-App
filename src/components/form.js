import React from 'react';
import './form.css';
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

function Form(props) {
   const [input, setInput] = useState('');
    const handleChange = e =>{
        setInput(e.target.value);
   }
    const handleSending = e => {
        e.preventDefault();

        const taskNew ={
            id: uuidv4(),
            text: input,
            completed: false
        }
        props.onSubmit(taskNew);
    }

    return(
    <form
    className="form-container"
    onSubmit={handleSending}>
        <input 
        name='text' 
        type='text' 
        className="form-text" 
        placeholder='write a new task that you have in mind'
        onChange={handleChange}
        />
        <button 
        type="submit" 
        className="button-add"> 
        Add</button>
    </form>
    );
}

export default Form;