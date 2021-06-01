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
                <i className="fas fa-book fa-2x" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
              title={item}
              onChange={handleChange}
            />
          </div>
        </form>
        <button
          type="submit"
          className="btn btn-block btn-primary text-uppercase mt-3"
          onClick={handleSubmit}
        >
          add item
        </button>
      </div>
    );
  }
}
