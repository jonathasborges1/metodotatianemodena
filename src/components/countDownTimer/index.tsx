import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdownDate = new Date('2023-03-30T19:00:00').getTime();

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(intervalId);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p></p>
      <Typography variant={"h6"}> <b>0{countdown.days}</b> DIAS | <b>{countdown.hours}</b> HORAS | <b>{countdown.minutes}</b> MINUTOS | <b>{countdown.seconds}</b> SEGUNDOS </Typography>
    </div>
  );
};

export default CountdownTimer;