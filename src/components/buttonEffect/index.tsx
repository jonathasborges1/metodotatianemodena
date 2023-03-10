import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface Props {
   children?: React.ReactNode;
}


const useStyles = makeStyles({
   button: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      animation: "$bounce 1s infinite",
      transition: "transform .2s",
      "&:hover": {
        transform: "scale(1.2)",
      },
   },
   "@keyframes bounce": {
      "0%, 100%": {
        transform: "translateY(0)",
      },
      "50%": {
        transform: "translateY(-10px)",
      },
   },
});
 
const UnbounceButton: React.FC<Props> = ({...props}) => {
   const classes = useStyles();

   return (
      <Button
         className={classes.button}
         variant="contained"
         color="primary"
         disableElevation
         {...props}
      />
   );
}

export default UnbounceButton