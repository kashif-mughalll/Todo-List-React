import React , {useState,useRef} from 'react';

var Form = (props) => {

    const ref1 = useRef(null);    
    const [Text, setText] = useState("");
    
    return(
        <div>
            <input ref={ref1} className="input-bar" type="text" placeholder = "Enter here ..."
                onChange = { (e)=> setText(e.target.value) }
            ></input>
            <button className="btn-style-1"
                onClick = {
                    ()=>{
                        ref1.current.value = '';
                        setText("");
                        if(isEmpty(Text.trim())) {
                            alert("Please Enter Something first ....")
                            return;
                        }

                        var Todo = {
                            Discreption : Text,
                            Completed : false,
                            key : parseInt(Math.random() * 100000)
                        }
                        props.AddTodo(Todo);
                    }
                }
            >Add</button>
        </div>
    );
}

export default Form;


function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}