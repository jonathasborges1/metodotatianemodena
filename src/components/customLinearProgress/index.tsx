import React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

interface CustomLinearProgressProps extends LinearProgressProps {
  text?: string;
  value: number;
}

const CustomLinearProgress: React.FC<CustomLinearProgressProps> = ({ text, ...props }) => {
  const theme = useTheme();
  const [progress, setProgress] = React.useState(0);

  const handleProgress = () => {
    setProgress((oldProgress) => {
      if (oldProgress >= props.value) {
        return props.value;
      }
      const diff = Math.random() * 50;
      return Math.min(oldProgress + diff, props.value);
    });
  };

  React.useEffect(() => {
    const timer = setInterval(handleProgress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: "0px solid red", margin: 8 }}>
      <LinearProgress
        {...props}
        variant="determinate"
        value={progress}
        color={"secondary"}
        
        sx={{
          border: "0px solid red",
          width: '95%',
          height: 30,
          bgcolor: '#AD862D', // offset
          borderRadius: 2,
          boxShadow: (theme) => `inset 0px 0px 5px ${theme.palette.backgroundColor.highlighted}`,
        }}
      />
      {text && (
        <div style={{position: "relative"}} >
          <Typography variant="h6" fontWeight={700} color="black" sx={{ mt: -4, ml: -13, position: "absolute", width: "max-content" }}>
            <pre style={{fontFamily: "Montserrat"}} >{text}</pre>
          </Typography>
        </div>

      )}
    </div>
  );
};

export default CustomLinearProgress;