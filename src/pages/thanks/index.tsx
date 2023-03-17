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
     <Grid container padding={"1.5rem"} paddingTop={0}  textAlign={"center"} justifyContent= {"center"} sx={{overflow: "hidden"}}  >
         
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
                     <Box style={{position: "absolute" , width: "100%"  ,border: "0px solid blue"}} >
                        <iframe  
                           title="Tatiane Modena - Video Youtube"  
                           id="panda-4c2dedb4-06f3-4bef-a5d7-fe44bb374ddf" 
                           src="https://player-vz-2a5e3d8f-c82.tv.pandavideo.com.br/embed/?v=4c2dedb4-06f3-4bef-a5d7-fe44bb374ddf&muted=true&autoplay=true&mutedIndicatorIcon=true&mutedIndicatorClickRestart=true&saveProgress=false&controls=play-large" 
                           style={{border:"none", top:"0px", left: "100px"}} 
                           allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"  
                           width="auto" height="200px"
                        />
                     </Box>


                     {/* <img src={gif} alt="gif" style={{width: "100%", height: "auto"}} /> */}
                     {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/EktTWdWUFjA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                     {/* <VideoPlayer></VideoPlayer> */}
                     {/* <div 
                        style={{
                           width: "100%",
                           height: "100%",
                           background: "black",
                           display: "flex",
                           justifyContent: "center",
                           alignItems: "center",
                        }}>

                        <div className="videoWrapper" style={{
                              position: "relative",
                              display: "flex",
                              flexDirection: "column",
                              overflow: "hidden",
                              justifyContent: "center",
                              alignItems: "center",
                        }}>
                           <header className="cover"  
                              style={{
                                 position: "absolute",
                                 // border: "1px solid red",
                                 top: "1rem",
                                 height: "calc((320px - (370px * (9 / 16))) / 2)",
                                 width: "100%",
                                 background: "transparent",
                                 opacity: "1",
                                 display: "flex",
                                 justifyContent: "center",
                                 alignItems: "center",
                                 color: "white",
                                 fontSize: "20px",
                                 textAlign: "center",
                              }}
                           ></header>

                           <iframe title="Tatiane Modena - Video Youtube" 
                              src={"https://www.youtube.com/embed/EktTWdWUFjA"} 
                              //frameborder={"0"} 
                              allow={"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"} 
                              style={{
                                 width:"370px",
                                 height:"380px",
                                 border: "1px solid black"
                              }}
                              // allowFullScreen
                           />
                           <div style={{
                              position: "absolute",
                              // border: "1px solid red",
                              bottom: "2rem",
                              height: "calc((300px - (370px * (9 / 16))) / 2)",
                              width: "100%",
                              opacity: "0.1",
                           }} ></div>
                           <footer className="cover"
                              style={{
                                 // border: "1px solid red",
                                 position: "absolute",
                                 bottom: "0rem",
                                 height: "calc((300px - (370px * (9 / 16))) / 2)",
                                 width: "100%",
                                 background: "black",
                                 opacity: "1.5",
                                 display: "flex",
                                 justifyContent: "center",
                                 alignItems: "center",
                                 color: "white",
                                 fontSize: "20px",
                                 textAlign: "center",
                              }}
                           ></footer>
                        </div>
                        </div> */}

               
               {/* <div style={{ position: "relative", paddingTop: "56.25%"}}>
                  <iframe  title="Tatiane Modena - Video Youtube"   
                  id="panda-player" 
                  src="https://player-vz-2a5e3d8f-c82.tv.pandavideo.com.br/embed/?v=4c2dedb4-06f3-4bef-a5d7-fe44bb374ddf&muted=true&autoplay=true&mutedIndicatorIcon=true&mutedIndicatorTextTop=Texto de cima&mutedIndicatorTextBottom=Texto de baixo&saveProgress=false&mutedIndicatorClickRestart=true&controls=play-large" 
                  style={{border:"none", position:"absolute",top:0, height:"100%", width:"100%" }} 
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
                  />
               </div> */}

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