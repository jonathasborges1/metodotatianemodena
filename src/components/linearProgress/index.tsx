import React, { useState, useEffect } from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import { styled, useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 5,
  '& .MuiLinearProgress-bar': {
    borderRadius: 5,
    backgroundColor: theme.palette.warning.main,
  },
}));

interface CustomProgressBarProps extends LinearProgressProps {
  value: number;
}

const CustomProgressBar: React.FC<CustomProgressBarProps> = ({ value, ...props }) => {
  const [progress, setProgress] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    if (value > 0 && value <= 75) {
      const timer = setTimeout(() => {
        setProgress(value);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [value]);

  return (
   <>
      <CustomLinearProgress
         {...props}
         variant="determinate"
         value={progress}
         // TransitionProps={{ timeout: { enter: 500, exit: 1000 } }}
         sx={{ bgcolor: 'background.default' }}
      />
      <Typography  >TESTE</Typography>
   </>

    );
};

export default CustomProgressBar;













// import React from "react";
// import { LinearProgress, LinearProgressProps } from '@mui/material';

// interface CustomLinearProgressProps extends LinearProgressProps {
//   value: number;
// }

// const CustomLinearProgress: React.FC<CustomLinearProgressProps> = ({ value, ...rest }) => {
//   const [progress, setProgress] = React.useState(0);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => {
//         if (prevProgress >= value) {
//           clearInterval(timer);
//         }
//         return prevProgress + 10;
//       });
//     }, 500);
//     return () => {
//       clearInterval(timer);
//     };
//   }, [value]);

//   return (
//     <LinearProgress
//       {...rest}
//       variant="determinate"
//       value={progress}
//       // TransitionComponent={TransitionComponent}
//       transitionDuration={{ enter: 500, exit: 1000 }}
//       // TransitionProps={{ onEnter: () => setProgress(0), onEntered: () => setProgress(value), duration: 500 }}
//       sx={{ bgcolor: 'yellow', height: '10px' }}
//     />
//   );
// };


























// import { useState } from "react";
// import LinearProgress, { LinearProgressProps } from "@mui/material/LinearProgress";
// import { makeStyles } from "@mui/styles";
// import { TransitionProps } from "@mui/material/transitions";
// // import { LinearProgressProps } from "@mui/material/Progress/LinearProgress";

// const useStyles = makeStyles(() => ({
//   root: {
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: "#f5f5f5",
//   },
//   bar: {
//     borderRadius: 5,
//     backgroundColor: "#ffc107",
//   },
// }));

// interface CustomLinearProgressProps extends LinearProgressProps {}

// const CustomLinearProgress: React.FC<CustomLinearProgressProps> = (props) => {
//   const classes = useStyles();
//   const [progress, setProgress] = useState(0);

//   const handleProgress = () => {
//     setProgress(75);
//   };

//   const TransitionComponent = (props: TransitionProps) => {
//     return <LinearProgress  />;
//   };

//   const transitionProps: Partial<TransitionProps> = {
//     onEnter: () => setProgress(0),
//     onEntered: handleProgress,
//     timeout: { enter: 500, exit: 1000 },
//   };

//   return (
//     <LinearProgress
//       classes={{ root: classes.root, bar: classes.bar }}
//       variant="determinate"
//       value={progress}
      
//       {...transitionProps}
//       {...props}
//     />
//   );
// };

// export default CustomLinearProgress;