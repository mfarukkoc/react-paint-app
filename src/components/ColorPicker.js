import React, { useState, useEffect } from 'react';
import randomColor from 'randomcolor';
import styled from 'styled-components';

const StyledColorPicker = styled.fieldset`
  border: none;
  padding: 0;

  input {
    opacity: 0;
    position: absolute;
  }
  span {
    content: '';
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    margin: 5px 15px;
    border: 2px solid black;
    transition: 0.3s;
  }
  label {
    cursor: pointer;
  }
  label:hover span {
    transform: rotate(45deg);
  }
  input:checked + span {
    transform: scale(1.5);
  }
`;

const ColorPicker = ({ colors = [], activeColor, setActiveColor }) => {
  if (!colors.length) return null;
  return (
    <StyledColorPicker>
      {colors.map((color, i) => (
        <label key={i}>
          <input
            name="color"
            type="radio"
            value={color}
            checked={activeColor === color}
            onChange={() => setActiveColor(color)}
          />
          <span style={{ background: color }} />
        </label>
      ))}
    </StyledColorPicker>
  );
};

export default ColorPicker;
