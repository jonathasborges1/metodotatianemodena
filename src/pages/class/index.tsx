import { Button, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';

import logotipo from "@assets/logotipoTiny.png"
import thumbnail3passos from "@assets/class-3-passosTiny.png"
import thumbnailAEstrategia from "@assets/class-a-estrategiaTiny.png"
import thumbnailOCaminho from "@assets/class-o-caminhoTiny.png"
import thumbnailAgilidade from "@assets/class-a-agilidadeTiny.png"
import CountdownTimer from '@components/countDownTimer';
import appConfig from '@config/appConfig';
import Footer from '@components/footer';
import ButtonPulse from '@components/buttonPulse';
import FakeVideo from '@components/videoFake';

interface Props {
   children?: React.ReactNode;
}

const Class: React.FC<Props> = ({ children, ...props }) => {
   const theme = useTheme();

   const handleRedirect = () => {
      window.location.href = appConfig.url.whatsapp;
    };
    
    {/* SESSAO 1 - LOGOOTIPO + HEADER + VIDEO EM DESTAQUE */}
    const Session1 = () => {
      return(
         <Grid container style={{textAlign: "center"}} gap={2}>

         <Grid item xs={12}>
            <img src={logotipo} alt="logotipo" style={{width: "50%", height: "auto"}} />
            <Typography variant={"h5"} style={{fontWeight: 700, color: theme.palette.textColor?.highlighted, textTransform: "uppercase"}}>
               As inscrições do Método Express Gel Nail iniciam:
            </Typography>
            
         </Grid>
         <Grid item xs={12} style={{border: "1px solid #fff", borderRadius: 16, padding: "4px 3rem 16px 3rem"}} >
            <CountdownTimer></CountdownTimer>
         </Grid>

{/* BLOCO VIDEO COM THUMBNAIL */}
         <Grid item xs={12} style={{border: "1px solid black", borderRadius: 16, padding: "8px 8px 24px 8px", background: "#8F631B"}} >
            <Grid container style={{border: "0px solid white", }} gap={1}>
               {/* <FakeVideo thumbnailUrl={thumbnail3passos}></FakeVideo> */}
               <Grid item xs={12} style={{ cursor: "pointer" }}>
                  {/* <img src={thumbnail3passos} alt="thumbnail3passos" style={{width: "100%", height: "auto", border: "4px solid #000", borderRadius: 16}} />
                  <div
                  style={{
                     cursor: "pointer",
                     position: 'relative',
                     top: '-15%',
                     left: '50%',
                     marginTop: -70,
                     transform: 'translate(-50%, -50%)',
                  }}
                  >
                  <button style={{ border: 'none', background: 'none', opacity: 0.7,  cursor: "pointer", }}>
                     <svg viewBox="0 0 100 100" style={{ width: '70px', height: '70px' }}>
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#8F631B" strokeWidth="8" />
                        <polygon points="40,30 70,50 40,70" fill="#8F631B" />
                     </svg>
                  </button>
                  </div> */}
                  <iframe  
                     title="Tatiane Modena - Video Youtube"  
                     // id="panda-4c2dedb4-06f3-4bef-a5d7-fe44bb374ddf" 
                     src="https://www.youtube.com/embed/LpM7RDKosH0" 
                     style={{border:"none", top:"0px", left: "100px"}} 
                     allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
                     allowFullScreen={true}
                     width="100%" height="200px"
                  />
               </Grid>

               <Grid item xs={12}> 
                  <Typography variant={"h5"} style={{fontWeight: 700, color: "#000"}} >Live 1 | Assista Agora</Typography>
                  <Typography variant={"h5"} style={{fontWeight: 600, color: "#fff", fontSize: "1.8em"}} >3 Passos que te afastam da concorrência</Typography>
               </Grid>
            </Grid>
         </Grid>

{/* BLOCO DOS BOTOES - WHATSAPP + MATERIAL EXTRA */}
         <Grid item xs={12}>
            <ButtonPulse style={{backgroundColor: "#37BC09", borderRadius: 8}} onClick={handleRedirect} fullWidth>
               <Typography variant={"h6"} style={{color: theme.palette.textColor?.secondary, fontWeight: 700}} >ENTRE NO GRUPO DO WHATSAPP</Typography>
            </ButtonPulse>
         </Grid>             
      </Grid>
      )
    }

   {/* SESSAO 2 - THUMS DAS PROXIMAS AULAS */} 
    const Session2 = () => {
      return (
         <Grid container style={{marginTop: 48}} gap={2}>

         {/* <Grid item xs={12} style={{border: "1px solid black", borderRadius: 16, padding: "0px 8px 24px 8px", background: "#000"}} >
            <Grid container justifyContent={"center"} style={{border: "0px solid white", textAlign: "center" }} gap={0}>
               
               <Grid item xs={12} style={{ }}>
                  <img src={thumbnail3passos} alt="thumbnail3passos" style={{width: "100%", height: "auto", border: "4px solid #000", borderRadius: 16}} />
               </Grid>
               <Grid item xs={12} style={{marginTop: -12}}> 
                  <Typography variant={"h6"} style={{fontWeight: 700, color: theme.palette.textColor?.highlighted}} >Live 1 - <span style={{color: theme.palette.textColor?.default}} >3 Passos que te afastam da concorrência</span></Typography>
               </Grid>
               
            </Grid>
         </Grid> */}

         <Grid item xs={12} style={{border: "1px solid black", borderRadius: 16, padding: "0px 8px 24px 8px", background: "#000"}} >
            <Grid container justifyContent={"center"} style={{border: "0px solid white", textAlign: "center" }} gap={0}>
               
               <Grid item xs={12} >
                  {/* <img src={thumbnailAEstrategia} alt="thumbnail3passos" style={{width: "100%", height: "auto", border: "4px solid #000", borderRadius: 16}} /> */}
               
                  {/* <iframe  
                     title="Tatiane Modena - A Estrategia - Video Youtube"  
                     id="panda-4c2dedb4-06f3-4bef-a5d7-fe44bb374ddf" 
                     src="https://player-vz-2a5e3d8f-c82.tv.pandavideo.com.br/embed/?v=480b74ff-8109-4d91-9b6e-bcea505358ec&muted=true&autoplay=true&mutedIndicatorIcon=true&mutedIndicatorClickRestart=true&saveProgress=false&controls=play-large" 
                     style={{border:"none", top:"0px", left: "100px"}} 
                     allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"  
                     width="100%" height="200px"
                  /> */}

               <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                     <iframe
                     title="Tatiane Modena - A Estrategia - Video Youtube" 
                     id="panda-6f23651a-6b07-4705-8db7-15f5c9447265"
                     src="https://www.youtube.com/embed/1f3WQWqbZdA"
                     style={{ border: 'none', position: 'absolute', top: 0, left: 0 }}
                     allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                     allowFullScreen={true}
                     width="100%"
                     height="100%"
                     ></iframe>
                  </div>               
               </Grid>

               <Grid item xs={12} style={{marginTop: 8}}> 
                  <Typography variant={"h6"} style={{fontWeight: 700, color: theme.palette.textColor?.highlighted}} >Live 2 - <span style={{color: theme.palette.textColor?.default}} >A Estratégia: Seja Referência</span></Typography>
               </Grid>
               
            </Grid>
         </Grid>

         <Grid item xs={12} style={{border: "1px solid black", borderRadius: 16, padding: "0px 8px 24px 8px", background: "#000"}} >
            <Grid container justifyContent={"center"} style={{border: "0px solid white", textAlign: "center" }} gap={0}>
               
               <Grid item xs={12} >
                  <img src={thumbnailOCaminho} alt="thumbnail3passos" style={{width: "100%", height: "auto", border: "4px solid #000", borderRadius: 16}} />
               </Grid>
               <Grid item xs={12} style={{marginTop: 0}}> 
                  <Typography variant={"h6"} style={{fontWeight: 700, color: theme.palette.textColor?.highlighted}} >Live 3 - <span style={{color: theme.palette.textColor?.default}} >O Caminho Para Faturar 3X Mais</span></Typography>
               </Grid>
               
            </Grid>
         </Grid>

         <Grid item xs={12} style={{border: "1px solid black", borderRadius: 16, padding: "0px 8px 24px 8px", background: "#000"}} >
            <Grid container justifyContent={"center"} style={{border: "0px solid white", textAlign: "center", opacity: 0.4 }} gap={0}>
               
               <Grid item xs={12} >
                  <img src={thumbnailAgilidade} alt="thumbnail3passos" style={{width: "100%", height: "auto", border: "4px solid #000", borderRadius: 16}} />
               </Grid>
               <Grid item xs={12} style={{marginTop: 0, }}> 
                  <Typography variant={"h6"} style={{fontWeight: 700, color: theme.palette.textColor?.highlighted}} >
                     Live 4 - <span style={{color: theme.palette.textColor?.default}} >EXPRESS GEL NAIL®: Qualidade; Agilidade e Padrão</span>
                  </Typography>
               </Grid>
               
            </Grid>
         </Grid>
      </Grid>
      )
    }

   return (
      <Grid container justifyContent={"center"}>
         <Grid item xs={12} lg={4} style={{border: "0px solid red", padding: 16}}>

         {<Session1/>}
         {<Session2/>}

         </Grid>
         <Footer></Footer>
      </Grid>
   )
}

export default Class;