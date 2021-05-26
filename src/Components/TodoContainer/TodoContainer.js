import Todo from './Todo/Todo'
import React from 'react';


var TodoContainer = ({Todos,RemoveTodo,MarkCompleted,UpdateTodo})=>{
    return(
        <div>
            {Todos.map((element)=>(
                < Todo id={element.key} key={element.key} UpdateTodo={UpdateTodo} Discreption={element.Discreption} 
                MarkCompleted={MarkCompleted} Completed={element.Completed} RemoveTodo={RemoveTodo} />
            ))}
        </div>
    )
}

export default TodoContainer;