import React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface Props {
   children?: React.ReactNode;
   image: string;
   contentHighlighted: string;
   content: string;
   
}

const CardEvent: React.FC<Props> = ({ children, ...props }) => {
   const theme = useTheme();
   return (
      <Card >
         <CardMedia component={"img"} image={props.image}></CardMedia>
         <CardContent style={{margin: "-0.3rem 0.4rem 0.4rem 0.4rem", padding: "0px 15px 10px 15px", backgroundColor: "black"}}>
            <Typography variant={"h6"} style={{textAlign: "center", lineHeight: "1.5rem"}}> 
                  <b style={{color:theme.palette.textColor?.highlighted}}>{props.contentHighlighted}, </b> <b>{props.content}</b>    
            </Typography>
         </CardContent>
   </Card>
   )
}

export default CardEvent;