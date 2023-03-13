import { ArrowRightIcon } from '@components/icons';
import { Grid, Typography } from '@mui/material';
import React from 'react';

interface Props {
   children?: React.ReactNode;
}

const CardSeries: React.FC<Props> = ({ children, ...props }) => {
   return (
      <Grid container sx={{border: "0px solid red",}} >

         <Grid item display={"flex"} alignItems={"center"}  sx={{backgroundColor: `rgba(000, 000, 001, 0.7)`, padding: "1rem", border: "1px solid black", borderRadius: 3, marginTop:"1.5rem"}} >
            <ArrowRightIcon sx={{fontSize: "1.5rem"}}/>
            <Typography variant={"h6"} sx={{marginLeft: 1}}>Profissionais que desejam <b style={{fontWeight: 700}}>TRIPLICAR SEU FATURAMENTO.</b> </Typography>
         </Grid>

         <Grid item display={"flex"} alignItems={"center"}  sx={{backgroundColor: `rgba(000, 000, 001, 0.7)`, padding: "1rem", border: "1px solid black", borderRadius: 3, marginTop:"1.5rem"}} >
            <ArrowRightIcon sx={{fontSize: "1.5rem"}}/>
            <Typography variant={"h6"} sx={{marginLeft: 1}}>Profissionais que querem se tornar <b style={{fontWeight: 700}}>referência</b> na sua região!</Typography>
         </Grid>

         <Grid item display={"flex"} alignItems={"center"}  sx={{backgroundColor: `rgba(000, 000, 001, 0.7)`, padding: "1rem", border: "1px solid black", borderRadius: 3, marginTop:"1.5rem"}} >
            <ArrowRightIcon sx={{fontSize: "1.5rem"}}/>
            <Typography variant={"h6"} sx={{marginLeft: 1}}>Profissionais que querem ser <b style={{fontWeight: 700}}>bem pagas</b> pelos seus serviços.</Typography>
         </Grid>
         
         <Grid item display={"flex"} alignItems={"center"}  sx={{backgroundColor: `rgba(000, 000, 001, 0.7)`, padding: "1rem", border: "1px solid black", borderRadius: 3, marginTop:"1.5rem"}} >
            <ArrowRightIcon sx={{fontSize: "1.5rem"}}/>
            <Typography variant={"h6"} sx={{marginLeft: 1}}>Profissionais que querem <b style={{fontWeight: 700}}>lotar a agenda,</b> sem terminar o dia exausta.</Typography>
         </Grid>

      </Grid>
   )
}

export default CardSeries;