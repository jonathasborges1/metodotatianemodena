import React from 'react';
import styled, { keyframes } from 'styled-components';

type SmokeEffectProps = {
  className?: string;
  children: React.ReactNode;
};

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #0077FF, #003399);
`;

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333333;
  filter: blur(10px);
`;

const BlueSmokeBlurEffect: React.FC<SmokeEffectProps> = ({ children }) => {
  return (
    <>
      <StyledBackground />
      <StyledOverlay />
      {children}
    </>
  );
};

export default BlueSmokeBlurEffect;

// export default BlueSmokeEffect;

// export default SmokeEffect;