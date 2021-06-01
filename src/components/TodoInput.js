/* eslint-disable no-unused-vars */
import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <span><i className="fas fa-book" /></span>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
        </form>
        <button
          type="submit"
          disabled = {item ? false : true}
          className= {editItem ? "btn btn-block btn-success text-uppercase mt-3" : "btn btn-block btn-primary text-uppercase mt-3"}
          onClick={handleSubmit}
        >
          {editItem ? "edit item" : "add item"}
        </button>
      </div>
    );
  }
}
