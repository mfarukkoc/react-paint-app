import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
  font-size: 2rem;
`;
export default React.memo(({ cb }) => {
  return (
    <StyledButton className="button-refresh-colors" onClick={cb}>
      &#8634;
    </StyledButton>
  );
});
