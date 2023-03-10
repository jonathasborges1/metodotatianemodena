import { ArrowRightIcon } from '@components/icons';
import { Grid, Typography } from '@mui/material';
import React from 'react';

interface cards {
   title: string;
}

interface Props {
   children?: React.ReactNode;
   cards: cards[];
}

const CardSeries: React.FC<Props> = ({ children, ...props }) => {
   return (
      <Grid container gap={2} sx={{border: "0px solid red",}} >

            {props.cards.map( (card,index) => {
               return(
                  <Grid item key={index} display={"flex"} alignItems={"center"}  sx={{backgroundColor: `rgba(000, 000, 001, 0.7)`, padding: "1rem", border: "1px solid black", borderRadius: 3}} >
                     <ArrowRightIcon sx={{fontSize: "1.5rem"}}/>
                     <Typography variant={"h6"} sx={{marginLeft: 1}}>{card.title}</Typography>
                  </Grid>
               )
            })}
         
      </Grid>
   )
}

export default CardSeries;