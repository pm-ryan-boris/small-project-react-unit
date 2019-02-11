/* eslint-disable */
import React, { Component } from 'react';
import Styles from './style-todoinput';
import TodosList from '../TodosList/TodosList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faWindowClose } from '@fortawesome/free-solid-svg-icons';

export default class TodoInput extends Component {
  state = { todos: [], todo: '' };

  handleSubmit = e => {
    const { todos, todo } = this.state;
    e.preventDefault();
    this.setState({ todos: [...todos, todo] });
    this.handleReset();
  };

  handleChange = e => {
    this.setState({ todo: e.target.value });
  };

  handleReset = () => {
    return this.setState({ todo: '' });
  };

  render() {
    const { todo, todos } = this.state;
    return (
      <>
        <Styles>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="enter task"
              value={todo}
              onChange={this.handleChange}
            />
            <FontAwesomeIcon
              size="lg"
              icon={faCheck}
              type="submit"
              value="submit"
              onClick={this.handleSubmit}
            />
            <FontAwesomeIcon
              color="red"
              size="lg"
              icon={faWindowClose}
              type="submit"
              value="submit"
            />
          </form>
        </Styles>
        <TodosList todos={todos} />
      </>
    );
  }
}
