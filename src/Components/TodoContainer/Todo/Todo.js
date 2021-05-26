import React from 'react';
import './Todo.css'


var Todo = ({id,Discreption,Completed,RemoveTodo,MarkCompleted,UpdateTodo})=>{
    return(
        <div className="todo" style={{borderLeftColor: Completed ? 'green' : 'yellow'}}>
            <p className="text2">{Discreption}</p>
            <button className="btn-style-1" onClick={ ()=> UpdateTodo(id)} > Update </button>
            <button className="btn-style-1" onClick = { ()=> MarkCompleted(id) } >{Completed ? 'Mark Uncompleted' : 'Mark Completed'}</button>
            <button className="btn-style-1" onClick = { ()=> RemoveTodo(id) } > Delete </button>
        </div>
    );
}

export default Todo ;