import React, { useState, useEffect, useRef, useCallback } from 'react';
import Name from './Name';
import ColorPicker from './ColorPicker';
import randomColor from 'randomcolor';
import WindowSize from './WindowSize';
import Canvas from './Canvas';
import RefreshButton from './Refresh';

import styled from 'styled-components';

const PaintHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid black;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Paint = () => {
  const [activeColor, setActiveColor] = useState('');

  const getColors = useCallback(() => {
    const baseColor = randomColor().slice(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
      .then((res) => res.json())
      .then((res) => {
        setColors(res.colors.map((color) => color.hex.value));
        setActiveColor(res.colors[0].hex.value);
      });
  }, []);
  const [colors, setColors] = useState();
  useEffect(() => {
    getColors();
  }, []);

  const headerRef = useRef({ offsetHeight: 0 });
  const windowsizeRef = useRef({ offsetHeight: 0 });
  return (
    <div className="app">
      <PaintHeader
        ref={headerRef}
        style={{ borderTop: `10px solid ${activeColor}` }}
      >
        <Name />
        <div style={{ marginTop: 10 }}>
          <ColorPicker
            colors={colors}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
          />
          <RefreshButton cb={getColors} />
        </div>
      </PaintHeader>
      {activeColor && (
        <Canvas
          color={activeColor}
          height={
            window.innerHeight -
            headerRef.current.offsetHeight -
            windowsizeRef.current.offsetHeight
          }
        />
      )}
      <div ref={windowsizeRef}>
        <WindowSize />
      </div>
    </div>
  );
};

export default Paint;
