import React from 'react';
import { css } from 'styled-components/macro';

export default function Todo({ todo }) {
  return (
    <li
      css="
        margin: 40px;
      "
    >
      {todo}
    </li>
  );
}
