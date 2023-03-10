import React from 'react';
import { ButtonProps, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const PulsingButton = styled(Button)(({ theme }) => ({
  // position: 'relative',
  color: 'white',
  textDecoration: 'none',
  display: 'inline-block',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  //border: '2px solid white',
  borderRadius: '1rem',
  padding: '10px 20px',
  //margin: '40px',
  boxShadow: '0 2px 5px 0 rgba(3,6,26,0.15)',
  transition: '.5s all ease-in-out',
  '&:hover': {
    cursor: 'pointer',
    background: 'black',
    color: '#1F4141',
    animation: 'none',
    //animationPlayState: 'paused',
  },
  '&.button-pulse': {
    animation: 'pulse 2s infinite 3s cubic-bezier(0.25, 0, 0, 1)',
    boxShadow: '0 0 0 0 white',
  },
  '@keyframes pulse': {
    to: {
      boxShadow: '0 0 0 18px rgba(255, 255, 255, 0)', 
    },
  },
}));

interface Props extends ButtonProps {
  children?: React.ReactNode;
}

const ButtonPulse: React.FC<Props> = ({ children, ...props }) => {
  return (
    <PulsingButton {...props} className="button button-pulse">
      {children}
    </PulsingButton>
  );
}

export default ButtonPulse;