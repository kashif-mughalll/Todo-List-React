import React ,{ useState } from 'react'

function UpdateForm({todo,UpdateTodos}) {
    const [Text, setText] = useState(todo.Discreption)
    return (
        <div className="update-form">
            <input className="input-bar" value={Text} onChange={(e)=> setText(e.target.value)} />
            <button className="btn-style-1" onClick={()=>{

                if(isEmpty(Text.trim())) {
                    alert("Please Enter Something first ....")
                    return;
                }
                UpdateTodos(todo.key,Text);

            }}> Update </button>
        </div>
    )
}

export default UpdateForm


function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}