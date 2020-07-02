import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const WindowDiv = styled.div`
position: absolute;
bottom: 5px;
left: 50%;
transform: translateX(-50%);
border: 1px solid black;
color: black;
padding: 5px;
}
&.hidden {
opacity: 0;
transition: 1s;
visibility: hidden;
}
`;

export default function WindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      setVisible(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setVisible(false), 500);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <WindowDiv className={`window-size ${visible ? '' : 'hidden'}`}>
      {windowSize.width} x {windowSize.height}
    </WindowDiv>
  );
}
