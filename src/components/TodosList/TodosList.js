import React from 'react';
import { css } from 'styled-components/macro';
import Todo from '../TodoItem/TodoItem';

export default function TodosList({ todos }) {
  return (
    <ul
      css="
        font-family: Arial, Helvetica, sans-serif;
        font-size: 2rem;
        list-style-type: none;
        margin: 10px;
        padding: 20px;
        height: 30vh;
      "
    >
      {todos.map(todo => (
        <Todo key={todo} todo={todo} />
      ))}
    </ul>
  );
}
