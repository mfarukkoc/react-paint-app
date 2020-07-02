import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

const NameInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background: transparent;
  border: none;
  text-overflow: ellipsis;
  font-size: 1rem;
  font-weight: bold;
  padding: 5px 10px 5px 10px;

  border-bottom: 1px solid transparent;
  display: block;
  &:hover,
  &:focus {
    border-bottom: 1px solid gray;
    outline: none;
  }

  &:not(:focus) {
    cursor: pointer;
  }
`;

const Name = React.memo(() => {
  const [name, setName] = useState('');
  return (
    <div>
      <NameInput
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Untitled"
      />
    </div>
  );
});

export default Name;
