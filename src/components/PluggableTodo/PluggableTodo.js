import React, { Component } from 'react';
import './PluggableTodo.css';

class PluggableTodo extends Component {
  render() {
    return (
      <div className="container">
        <p>
          <label htmlFor="new-task">Add Item</label>
          <input id="new-task" type="text" />
          <button>Add</button>
        </p>

        <h3>Todo</h3>
        <ul id="incomplete-tasks">
          <li>
            <input type="checkbox" />
            <label>Pay Bills</label>
            <input type="text" />
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </li>
          <li className="editMode">
            <input type="checkbox" />
            <label>Go Shopping</label>
            <input type="text" value="Go Shopping" />
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </li>
        </ul>

        <h3>Completed</h3>
        <ul id="completed-tasks">
          <li>
            <input type="checkbox" checked />
            <label>See the Doctor</label>
            <input type="text" />
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default PluggableTodo;
