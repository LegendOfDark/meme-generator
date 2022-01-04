import './style.css'
import React from 'react';
import Todo from "./components/Todo"
import todosData from "./todosData"
import logo from "./logo.png"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      firstName: "", 
      lastName: "",
      isFriendly: true,
      gender: "",
      textArea: "Some default value",
      favColor: ""
    }
    this.handleChange=this.handleChange.bind(this)
  }


  handleChange(e){
    const {name, value, type, checked} = e.target
    const action = type === "checkbox" ?  checked : value 
    this.setState({
       [name] : action 
      })
  }

  handleSubmit(e){
    e.preventDefault()
    alert("form submitted")
      
  }

  render(){
      return(
      <form onSubmit={(e) => this.handleSubmit(e)}>

        <input value={this.state.firstName} name="firstName" className="button-styling" onChange={this.handleChange} type="text" placeholder="First Name" />
        <br />
        <input value={this.state.lastName} className="button-styling" name="lastName" onChange={this.handleChange} type="text" placeholder="Last Name" />
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <textarea name="textArea" value={this.state.textArea} onChange={this.handleChange}/>
        <br />
        <label><input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handleChange}/> Friendly</label>
        <br />
        <br />
        <label><input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange}/> Male</label>
        <br />
        <label><input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange}/> Female</label>
        <h1>{this.state.gender === "" ? "Hello" : "You are " + this.state.gender}</h1>
        
        <br />
        <label>Select Favorite Color: </label>
        <select 
            value={this.state.favColor}
            onChange={this.handleChange}
            name="favColor"
        >
            <option value="" selected disabled hidden>Choose here</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="red">red</option>
            <option value="black">black</option>
        </select>
        <h1>{this.state.favColor === "" ? "Select Fav Color" : "Your Fav Color is " + this.state.favColor}</h1>
        <button>Submit</button>
      </form>
    )
  }
}



export default App;







// const character_id = 241//Math.round(150 + Math.random() * 100) 
// fetch(`https://api.disneyapi.dev/characters/${character_id}`)
//   .then(response => response.json())
//   .then(data => {
//     this.setState( () => {
//       return {
//         character : data,
//         loading : false
//       }
//     })
//   })
//   .catch(() => console.log("didn't work")); this.render()