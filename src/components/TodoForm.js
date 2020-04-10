import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log('new', this.state.item);
  };


  submitItem = e => {
    e.preventDefault();

    this.setState({ item: "" });
    this.props.addItem(e, this.state.item);
  };

  render() {
    
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          name="item"
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
