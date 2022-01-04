import './style.css'
import React from 'react';
import Todo from "./components/Todo"
import todosData from "./todosData"
import logo from "./logo.png"

//create react class
class App extends React.Component{
  constructor(){
    super();
    
    // NOT USED: convert data to dict
    const transformedTodosData = {};
    for (let i = 0; i < todosData.length; i++) {
      transformedTodosData[todosData[i].id] = {
        text: todosData[i].text,
        completed: todosData[i].completed
      };
    }

    //setting state
    this.state = {
      data: todosData,
    }
    // this.handleChange = this.handleChange.bind(this);
  }

  // function called on checkbox clicked => check or uncheck the  checkbox using Id
  handleChange = (id) => {

    // update state
    this.setState( (state) => {
      // reverse boolean var
      state.data[id-1].completed = !state.data[id-1].completed;
      // return new state
      return {
        state
      };
  })
}
  // render Todo Components
  render(){
     const todoItems = this.state.data.map(
       (item) => {
         return <Todo 
         // give it the handle change func for event listener
          handleChange={this.handleChange}
          key={item.id}
          id={item.id}
          item={item}/>
       })
       // return item 
     return(
       <div>
         {todoItems}
       </div>
     )
  }
}
export default App;
