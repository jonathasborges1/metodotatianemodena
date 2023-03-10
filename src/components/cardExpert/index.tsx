import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useTheme } from '@mui/styles';
import React from 'react';

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
         <CardMedia component={"img"} image={props.image} sx={{width: "200%", marginLeft: "-10rem"}} ></CardMedia>
         <CardContent style={{margin: "-0.3rem 0.4rem 0.4rem 0.4rem", padding: "0px 15px 10px 15px", backgroundColor: "black"}}>
            <Typography variant={"h6"} style={{textAlign: "center", lineHeight: "1.5rem"}}> 
                   <b>{props.content}</b>    
            </Typography>
         </CardContent>
         <CardMedia component={"img"} image={props.assinatura} sx={{marginTop: "-0.5rem"}} ></CardMedia>
      </Card>
   )
}

export default CardExpert;