/* eslint-disable */
import React, { Component } from 'react';
import Styles from './style-todoinput';
import { css } from 'styled-components/macro';
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
      <Styles>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="enter task"
            value={todo}
            onChange={this.handleChange}
          />
          <div
            css={`
              display: flex;
              flex-direction: row;
              justify-content: space-evenly;
              height: 45px;
              padding: 10px 0;
              width: 5%;
            `}
          >
            <FontAwesomeIcon
              css={`
                margin: 15px 2% 0 0;
              `}
              size="lg"
              icon={faCheck}
              type="submit"
              value="submit"
              onClick={this.handleSubmit}
            />
            <FontAwesomeIcon
              css={`
                margin: 15px 0 2% 0;
              `}
              color="red"
              size="lg"
              icon={faWindowClose}
              type="submit"
              value="submit"
            />
          </div>
        </form>
      </Styles>
    );
  }
}
