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
               
               <Grid item xs={12} style={{ }}>
                  <img src={thumbnail3passos} alt="thumbnail3passos" style={{width: "100%", height: "auto", border: "4px solid #000", borderRadius: 16}} />
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
         <Grid item xs={12}>
            <Button style={{backgroundColor: "#fff", borderRadius: 8}} onClick={() => {}} fullWidth>
               <Typography variant={"h6"} style={{color: theme.palette.textColor?.secondary, fontWeight: 700}} >BAIXAR MATERIAL EXTRA</Typography>
            </Button>
         </Grid>             
      </Grid>
      )
    }

   {/* SESSAO 2 - THUMS DAS PROXIMAS AULAS */} 
    const Session2 = () => {
      return (
         <Grid container style={{marginTop: 48}} gap={2}>
         <Grid item xs={12} style={{border: "1px solid black", borderRadius: 16, padding: "0px 8px 24px 8px", background: "#000"}} >
            <Grid container justifyContent={"center"} style={{border: "0px solid white", textAlign: "center" }} gap={0}>
               
               <Grid item xs={12} style={{ }}>
                  <img src={thumbnail3passos} alt="thumbnail3passos" style={{width: "100%", height: "auto", border: "4px solid #000", borderRadius: 16}} />
               </Grid>
               <Grid item xs={12} style={{marginTop: -12}}> 
                  <Typography variant={"h6"} style={{fontWeight: 700, color: theme.palette.textColor?.highlighted}} >Live 1 - <span style={{color: theme.palette.textColor?.default}} >3 Passos que te afastam da concorrência</span></Typography>
               </Grid>
               
            </Grid>
         </Grid>

         <Grid item xs={12} style={{border: "1px solid black", borderRadius: 16, padding: "0px 8px 24px 8px", background: "#000"}} >
            <Grid container justifyContent={"center"} style={{border: "0px solid white", textAlign: "center" }} gap={0}>
               
               <Grid item xs={12} >
                  <img src={thumbnailAEstrategia} alt="thumbnail3passos" style={{width: "100%", height: "auto", border: "4px solid #000", borderRadius: 16}} />
               </Grid>
               <Grid item xs={12} style={{marginTop: -12}}> 
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