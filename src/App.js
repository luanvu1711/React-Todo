import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import SearchBar from "./components/SearchBar";
import "./style.css";

const list = [
  {
    name: "Dentist Appointment",
    id: 1,
    completed: false
  },
  {
    name: "Taking out the trash",
    id: 2,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list
    };
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };

    this.setState({
      list: [...this.state.list, newItem]
    });
  };

  
  toggleItem = itemId => {
     this.setState({
      list: this.state.list.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearPurchased = e => {
    e.preventDefault();

    this.setState({
      list: this.state.list.filter(item => !item.completed)
    });
  };

  handleInput = e => {
    
  } 
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        {/* <SearchBar /> */}
        <TodoList
          list={this.state.list}
          toggleItem={this.toggleItem}
          clearPurchased={this.clearPurchased}
        />
      </div>
    );
  }
}

export default App;
