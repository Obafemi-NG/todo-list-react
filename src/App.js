import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

export default class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const newItems = [...this.state.items, updatedItem];
      this.setState({
        items: newItems,
        item: '',
        id: uuidv4(),
        editItem: false,
      })
    
    
  };
  handleClearList = () => {
    console.log("handle clear list");
  };
  handleEdit = (id) => {
    console.log(`handle edit ${id}`);
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
