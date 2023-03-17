import React from 'react';
import { Box } from '@mui/material';

interface Props {
   children?: React.ReactNode;
}

const VideoPandaPlayer: React.FC<Props> = ({ children, ...props }) => {
   return (
      <Box style={{position: "absolute" , width: "100%"  ,border: "0px solid blue"}} >
      <iframe  
         title="Tatiane Modena - Video Youtube"  
         id="panda-4c2dedb4-06f3-4bef-a5d7-fe44bb374ddf" 
         src="https://player-vz-2a5e3d8f-c82.tv.pandavideo.com.br/embed/?v=4c2dedb4-06f3-4bef-a5d7-fe44bb374ddf&muted=true&autoplay=true&mutedIndicatorIcon=true&mutedIndicatorClickRestart=true&saveProgress=false&controls=play-large" 
         style={{border:"none", top:"0px", left: "100px"}} 
         allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"  
         width="100%" height="200px"
      />
   </Box>
   )
}

export default VideoPandaPlayer;


























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