import React from 'react';
import TodoContainer from './Components/TodoContainer/TodoContainer'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header';
import './App.css'
import UpdateForm from './Components/UpdateForm/UpdateForm'


class App extends React.Component {

  state = {
    Todos : [],
    ShowUpdateForm : false,
    todo : null
  }

  AddTodo = (Todo) => {
    this.setState({
      Todos : [...this.state.Todos,Todo]
    })
  }

  UpdateTodo = (id)=> {
    let todo = null;
    this.state.Todos.forEach(element => { if(element.key == id) todo = element; });
    this.setState({
      ShowUpdateForm : true,
      todo : todo
    })
  }

  UpdateTodos = (id,Discreption) =>{
    let NewList = [];    
    this.state.Todos.forEach(element => {      
      if(element.key != id) NewList.push(element)
      else
      {
        let NewElement = {...element}
        NewElement.Discreption = Discreption;
        NewList.push(NewElement);
      } 
    });
    this.setState({
      ShowUpdateForm : false,
      Todos : NewList
    })
  }

  RemoveTodo = (id)=> {
    let NewList = this.state.Todos.slice();
    for (let index = 0; index < NewList.length; index++) {
      if(NewList[index].key == id){
        NewList.splice(index,1);
        this.setState({
          Todos : NewList
        })
    }}
  }

  MarkCompleted = (id)=> {
    let NewList = [];    
    this.state.Todos.forEach(element => {      
      if(element.key != id) NewList.push(element)
      else
      {
        let NewElement = {...element}
        NewElement.Completed = !NewElement.Completed;
        NewList.push(NewElement);
      } 
    });
    this.setState({
      Todos : NewList
    })
  }

  render(){
    return(
      <div className="flex">
        {this.state.ShowUpdateForm ? <Header content="Update Todo" /> : <Header content="Todo App" /> }        
        {this.state.ShowUpdateForm ? <UpdateForm UpdateTodos={this.UpdateTodos} todo={this.state.todo} /> : 
          (
            <div className="App">
              <Form AddTodo={this.AddTodo} ></Form>
              <TodoContainer UpdateTodo={this.UpdateTodo} Todos={this.state.Todos} MarkCompleted={this.MarkCompleted} RemoveTodo={this.RemoveTodo} />
            </div>
          )
        }
      </div>
    );
  }
}


export default App;
