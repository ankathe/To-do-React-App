import React from 'react';
import './form.css';

function Form(props) {

    const handleSending = e => {
        const taskNew ={
            id: '34';
        }
    }
    return(
    <form className="form-container">
        <input 
        name='text' 
        type='text' 
        className="form-text" 
        placeholder='write a new task that you have in mind'>
        </input>
        <button type="submit" className="button-add"> Add</button>
    </form>
    );
}

export default Form;