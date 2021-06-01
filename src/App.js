import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

export default class App extends Component {
  state = {
    items: [{id: 1, title: 'wake up'}],
    id: uuidv4(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    console.log("handle change");
  };
  handleSubmit = (e) => {
    console.log("handle submit");
  };
  handleClearList = () => {
    console.log("handle clear list");
  };
  handleEdit = (id) => {
    console.log(`handle delete ${id}`);
  };
  handleRemove = (id) => {
    console.log(`handle delete ${id}`);
  };
  render() {
    // console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h2 className="text-center text-capitalize">todo input</h2>
            <TodoInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
          />
          <h2 className = 'text-center text-capitalize' > todo list items</h2>
          <TodoList
            items={this.state.items}
            handleEdit={this.handleEdit}
            handleRemove={this.handleRemove}
            handleClearList={this.handleClearList}
          />
          </div>
        </div>
        
      </div>
    );
  }
}
