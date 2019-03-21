import React from "react";

import "../src/components/TodoComponents/Todo.css";
import TodoList from "../src/components/TodoComponents/TodoList";
import TodoForm from "../src/components/TodoComponents/TodoForm";

const list = [
  {
    name: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    name: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      list
    };
  }

  toggleItem = id => {
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          return {
            ...item,
            // name: item.name,
            // id: item.id,
            // completed: item.completed
            completed: !item.completed
          };
        }
        return item;
      })
    });
    // loop over list
    // find grocery by given id
    // change flag to true
    // return updated list to state.
  };

  addItem = item => {
    const copiedList = this.state.list.slice();
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };
    copiedList.push(newItem);
    // BUILD OUR ITEM OBJECT
    this.setState({ list: copiedList });
  };

  clearCompleted = () => {
    // use filter
    // looping over all the items inside of `this.state.list`
    // filter out any items, who's item.completed === true
    // set your state with your new filtered list.
  };

  render() {
    // when state is updated (Via setState) react calls render again!
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          list={this.state.list}
          toggleItem={this.toggleItem}
        />
        <button className="clear-btn" onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  };
}

export default App;
