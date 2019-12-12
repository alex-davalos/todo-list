import React, { Component } from "react";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    }
  }

  updateInput(key, value) {
    //Update react state
    this.setState({
      [key]: value
    });

  }

  addItem() {
  //Create a unique ID for new item
    const newItem ={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    }
  //Copy list items
    const list = [...this.state.list];
   
  //Add new item to list
    list.push(newItem);

  //Update state
    this.setState({
      list,
      newItem: "", 
    });

  }

  deleteItem(id){
    //Copy list
    const list =  [...this.state.list]

    //Filter out deleted item
    const updatedList = list.filter(item => item.id !== id);

    //Update State 
    this.setState({
      list: updatedList
    });
  }

  render() {
    return(

      <div className='app'>
        <div>
          <h1>Todo List </h1>
          <br />
          
          <ul>
            {this.state.list.map(item => {
              return(
              <li key={item.id}>
                <button
                 onClick = {() => this.deleteItem(item.id)}
                >
                X
                </button>
                {item.value}
              </li> 
              )
            })}
          </ul>
          <br />
          
          <input
          type = "text"
          placeholder = "Type an item here.."
          value = {this.state.newItem} 
          onChange = { e => this.updateInput("newItem", e.target.value)}
          />

          <button className="input-button"
            onClick = { () => this.addItem()}
          >
          Add
          </button>
          
         
        </div>
      </div>
    );
  }
}

  export default App;
