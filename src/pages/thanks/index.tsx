import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

import CustomLinearProgress from '@components/customLinearProgress';
import { CheckedIcon } from '@components/icons';
import ButtonPulse from '@components/buttonPulse';
import Footer from '@components/footer';

import headerDespertar from "@assets/despertar-1920x1080.png"
import light from "@assets/imgLight-1920x1080Tiny.png"
import gif from "@assets/gif-320x180Tiny.png"
import appConfig from '@config/appConfig';
import VideoPandaPlayer from '@components/videoPandaPlayer';

interface Props {
   children?: React.ReactNode;
}

const benefits = [
   {
      icon: <CheckedIcon sx={{marginRight: 0.5}}/>,
      text: <Typography variant="body1" fontWeight={700} color={(theme) => theme.palette.textColor?.highlighted} >TER ACESSO A COMUNIDADE FECHADA;</Typography>
   },
   {
      icon: <CheckedIcon sx={{marginRight: 0.5}}/>,
      text: <Typography variant="body1" fontWeight={700} color={(theme) => theme.palette.textColor?.highlighted} >GARANTIR SUA CONDIÇÃO ESPECIAL;</Typography>
   },
   {
      icon: <CheckedIcon sx={{marginRight: 0.5}}/>,
      text: <Typography variant="body1" fontWeight={700} color={(theme) => theme.palette.textColor?.highlighted} >RECEBER INFORMAÇÕES EXCLUSIVAS.</Typography>
   },
]

const Thanks: React.FC<Props> = ({ children, ...props }) => {
   const theme = useTheme();
   const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
   
   const handleRedirect = () => {
      window.location.href = appConfig.url.whatsapp;
    };

   return (
     <Grid container padding={"0rem"} paddingTop={0}  textAlign={"center"} justifyContent= {"center"} sx={{overflow: "hidden", border: "0px solid red"}}  >
         
         <Grid item xs={12} sm={8} md={8} lg={4}>

            <Grid container justifyContent= {"center"}>

               <Grid item xs={12} sx={{border: "0px solid red"}} >  
                  <img src={headerDespertar} alt="headerDespertar" style={{width: "100%", height: "auto"}} />
                  <div style={{position: "relative"}} >
                     <div style={{
                        position: "absolute" ,background: "gray", height: "250px", top: "-5rem", 
                        width: "500px", filter: "blur(40px)", opacity: 0.2, marginLeft: "-3rem"}} ></div>
                  </div>
               </Grid>

               <Grid item xs={12}>  
                  <CustomLinearProgress text="Você está quase lá...  75%" value={85}  ></CustomLinearProgress>
               </Grid>

               <Grid item xs={12} marginBottom={2} marginTop={2}>
                  <Typography variant={"h6"} fontWeight={700} fontSize={"0.9rem"}  > ENTRE NO GRUPO DO WHATSAPP PARA: </Typography>
               </Grid>

               <Grid item  sx={{border: "0px solid red"}}>
                  {benefits.map( (item,index) => {
                        return (
                           <Grid container key={index} alignContent={"center"} marginBottom={0.5} >
                              {item.icon} {" "} {item.text}
                           </Grid>
                        )
                     })}
               </Grid>

               <Grid item xs={12} marginTop={2} style={{position: "relative" , height: "200px", border: "0px solid red"}} >
                     <VideoPandaPlayer></VideoPandaPlayer>
               </Grid>

               <Grid item xs={12} margin={2}>
                     <ButtonPulse onClick={handleRedirect} sx={{background: "#37BC09 !important", color: "black" }} fullWidth> 
                        <Typography variant='h6' fontWeight={700}>QUERO ENTRAR AGORA</Typography> 
                     </ButtonPulse>
               </Grid>

               <Grid item paddingLeft={4} paddingRight={4}>
                  <Typography variant='body2' fontWeight={700} fontSize={"0.65rem"} >O GRUPO É SILENCIADO E SOMENTE OS ADMINISTRADORES ENVIARÃO MENSAGENS. </Typography>
               </Grid>
                  
               <Grid item marginTop={4} marginBottom={4}>
                  <img src={light} alt="light" style={{width: "40%", height: "auto"}} />
               </Grid>

               <Grid item sx={{border: "0px solid red"}}>
               
                  <div style={{position: "relative", zIndex: 1}} >
                     <div style={{
                        position: "absolute" ,background: "gray", height: "400px", 
                        width: "600px", filter: "blur(40px)", opacity: 0.4, marginLeft: "-3rem"}} ></div>
                  </div>

                  <Footer sx={{ position: "relative", zIndex: 2}}/>
               </Grid>



            </Grid>


         </Grid>
         

     </Grid>
   )
}

export default Thanks;