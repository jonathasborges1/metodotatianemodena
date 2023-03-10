import ImageFade from '@components/imageFade';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/styles';
import React from 'react';

import expert from "@assets/tatianemodenaexpert2highteste.png"

interface Props {
   children?: React.ReactNode;
   content?: string;
   image?: string;
   assinatura?: string;
}

const CardExpert: React.FC<Props> = ({ children, ...props }) => {
   // const theme = useTheme();
   return (
      <Card sx={{background: "none"}}>
         {/* <CardMedia component={"img"} image={props.image} sx={{width: "200%", marginLeft: "-10rem", border:"10px solid red"}} ></CardMedia> */}

         {/* <ImageFade src={expert} ></ImageFade> */}
         <img src='' alt="" />
         <Grid container style={{backgroundImage: `url(${expert})`, backgroundSize: "100% auto" }} ></Grid>

         <CardContent style={{margin: "-0.3rem 0.4rem 0.4rem 0.4rem", padding: "0px 15px 10px 15px", backgroundColor: "black"}}>
            <Typography variant={"h6"} style={{textAlign: "center", lineHeight: "1.5rem"}}> 
                   <b>{props.content}</b>    
            </Typography>
         </CardContent>
         <Box sx={{position: "absolute", border: "0px solid red"}}>
            <CardMedia component={"img"} image={props.assinatura} sx={{marginTop: "-0.5rem", width: "95%"}} ></CardMedia>
            
         </Box>
         
      </Card>
   )
}

export default CardExpert;