import React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme, useTheme } from '@mui/material/styles';
import { Card, CardContent, CardMedia, Divider, Grid, Link, Typography, useMediaQuery } from '@mui/material';

import expert1High from "@assets/tatianemodena-1-1920x1080Tiny.png"
import expert2High from "@assets/tatianemodena-2-700x1080Tiny.png"
import expert3High from "@assets/tatianemodena-3-700x1080Tiny.png"

import card1High from "@assets/card1-1920x1080Tiny.png"
import card2High from "@assets/card2-1920x1080Tiny.png"
import card3High from "@assets/card3-1920x1080Tiny.png"
import card4High from "@assets/card4-1920x1080Tiny.png"

import backgroundGradiente from '@assets/backgroundTiny.png'
import AssinaturaExpert from "@assets/assinatura-1920x1080Tiny.png"

import FormActiveCampaign from '@components/formActiveCampaign';
import { ArrowDownIcon, CalendarIcon } from '@components/icons';
import CardEvent from '@components/cardEvent';
import CardSeries from '@components/cardSeries';

import ButtonPulse from '@components/buttonPulse';
import ROUTES from '@config/routes';

interface Props {
    children?: React.ReactNode;
}

const Home: React.FC<Props> = ({ children, ...props }) => {
    const theme = useTheme();
    const classes = useStyles();

    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    const scrollToSection = () => {
        const section = document.getElementById("section1");
        if (section !== null) {
            section.scrollIntoView({ behavior: "smooth" });
          }
      }

    const cardsEvent = [
        {
            image: card1High,
            contentHighlighted: "27/03 AO VIVO, ",
            content: "ás 19:00h"
        },
        {
            image: card2High,
            contentHighlighted: "28/03 AO VIVO,",
            content: "ás 19:00h"
        },
        {
            image: card3High,
            contentHighlighted: "29/03 AO VIVO,",
            content: "ás 19:00h"
        },
        {
            image: card4High,
            contentHighlighted: "30/03 AO VIVO,",
            content: "ás 19:00h"
        },
    ]


    return (
        <Grid container justifyContent= "center" sx={{overflow: "hidden"}}>

            <Grid item xs={12} lg={4}>
                
                <Grid container>


                    {/** Sessao 1 - Formulario de Inscricao */}
                    <Grid container id={"section1"}>
                        <Grid item>
                            <Card sx={{backgroundColor: "black"}}>
                                <CardMedia component={"img"} image={expert1High} sx={{border: "0px solid red", height: !isLargeScreen ? "105vw" : "35vw" }} ></CardMedia>
                                <CardContent style={{margin: "0px 8px 0px 8px", padding: "4px 40px 10px 40px", backgroundColor: "black"}}>
                                    <Typography variant={"h6"} style={{textAlign: "center", lineHeight: "1.5rem", marginTop: 0.5}}> 
                                        APRENDA A LOTAR SUA AGENDA E <b style={{color:theme.palette.textColor?.highlighted}} >FATURAR 3X MAIS</b>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        
                        <Grid container justifyContent={"center"} sx={{padding: 1, border: "0px solid red"}}>
                            
                            <Grid item>
                                <FormActiveCampaign/>
                            </Grid>

                            <Grid item sx={{display: "flex", alignItems: "flex-start", border: "0px solid blue", paddingLeft: 1.5, paddingRight: 1.5 }}>
                                <CalendarIcon sx={{   fontSize: 30 }}/> 
                                <Typography variant="h6" sx={{textAlign: "center", paddingLeft: 0.8 }}> 
                                     27, 28, 29 e 30 de Março, ás 19:00h <br />
                                    <b style={{fontWeight: 900}} > AO VIVO NO INSTAGRAM </b> 
                                </Typography>
                            </Grid>

                        </Grid>



                    </Grid>

                    <Divider sx={{width: "100%", border: `1px solid ${theme.palette.backgroundColor.highlighted}`}} ></Divider>

                    {/** Sessao 2 - Cronograma / Evento */}
                    <Grid container justifyContent={"center"} sx={{border: "0px solid red", }}>
                        <Grid item sx={{display: "flex", marginTop: 4, marginBottom: 2}}>
                            <ArrowDownIcon sx={{fontSize: "1.5rem"}}/> 
                            <Typography variant='h5' 
                                sx={{fontWeight: 700, color: theme.palette.textColor?.highlighted, margin: "0px 4px 0px 4px"}}
                            > 
                                    CRONOGRAMA DO EVENTO 
                            </Typography>
                        </Grid>

                        <Grid item>
                            {cardsEvent.map((card,index) => {
                                return(
                                    <CardEvent key={index} image={card.image} contentHighlighted={card.contentHighlighted} content={card.content} />
                                )
                            })}
                        </Grid>

                    </Grid>


                    {/** Sessao 3 - Persona + Expert */}
                    <Grid container justifyContent={"center"} sx={{backgroundImage: `url(${backgroundGradiente})`, backgroundRepeat: "no-repeat" , backgroundSize: "100% auto" , padding: 2}} gap={2}>
                        <Grid item> <Typography variant="h4" sx={{fontWeight: 700, marginTop: 4, marginBottom: 0}} textAlign={"center"} >Para quem é essa Série?</Typography></Grid>
                        <Grid item> <CardSeries/> </Grid>

                        <Grid item xs={12}> 

                            <ButtonPulse onClick={scrollToSection} sx={{background: "red", marginTop: 1}} fullWidth>
                                <Typography variant="h5" sx={{color: "white", fontWeight: 700}} >EU QUERO PARTICIPAR</Typography> 
                            </ButtonPulse>

                        </Grid>

                        
                        <Grid item xs={12}>
                            <Grid container sx={{border: "0px solid red", 
                                height: !isLargeScreen ? "75vh" : "105vh", 
                                backgroundImage: `url(${expert2High})`, 
                                backgroundRepeat: 'no-repeat', 
                                backgroundSize: "cover", 
                                backgroundPosition: "center" ,  }} 
                            > 
                            <div style={{position: "relative"}} >

                            <div style={{
                                    position: 'absolute',
                                    top: "-3rem",
                                    left: "-2rem",
                                    width: !isLargeScreen ? '100vh' : "115vh",
                                    height: !isLargeScreen ? '90vh' : "115vh",
                                    background: 'linear-gradient(to bottom, transparent, black)',
                            }}></div>
                            </div>
                            
                            </Grid>

                            <Grid item sx={{textAlign: "center", position: "relative", marginTop: "-2rem" }} >
                                <Typography variant="h5" sx={{fontWeight: 500}} > Conheça sua Mentora:</Typography>
                            </Grid>

                            <Grid container sx={{background: 'black', position: "relative", border: "0px solid blue", width: "115%", padding: "0px 3rem 0px 3rem", marginLeft: "-1.4rem" }}>
                                <Grid container sx={{border: "0px solid red", 
                                    height: "15vh",
                                    backgroundImage: `url(${AssinaturaExpert})`, 
                                    backgroundRepeat: 'no-repeat', 
                                    backgroundSize: "cover", 
                                    backgroundPosition: "center" ,  }} >
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Typography align='center' variant="body1" fontWeight={"500"} fontSize={"0.9rem"}>
                                    Tatiane Modena é criadora do Método EXPRESS GEL NAIL®, uma metodologia exclusiva que te ensina a fazer as unhas artificiais 
                                    mais lucrativas e rápidas do mundo. Empresária e manicure, com mais de 10 anos de carreira, se tornou uma profissional referência, 
                                    tendo formado mais de 2.000 alunas em 17 países. 
                                </Typography>
                                <Typography align='center' variant={"h4"} marginTop={"2rem"} marginBottom={"2rem"} padding={"0rem 1.5rem 0px 1.5rem"}> 
                                    <b style={{color: theme.palette.backgroundColor.highlighted}}>Ela não te dá dicas, </b>  te gera resultados!
                                </Typography>
                            </Grid>


                            <ButtonPulse onClick={scrollToSection} sx={{background: theme.palette.backgroundColor.highlighted, marginTop: 1}} fullWidth>
                                <Typography variant="h5" sx={{color: "black", fontWeight: 700}} >EU QUERO PARTICIPAR</Typography> 
                            </ButtonPulse>

                            <Grid container sx={{background: 'black', position: "relative", border: "0px solid blue", width: "125%", padding: 0, marginTop: "1rem" ,marginLeft: "-1rem" }}>
                                <Grid container sx={{border: "0px solid red", 
                                    height: "76vh",
                                    backgroundImage: `url(${expert3High})`, 
                                    backgroundRepeat: 'no-repeat', 
                                    backgroundSize: "cover", 
                                    backgroundPosition: "center" ,  }} 
                                > 
                                
                                </Grid>
                            </Grid>
                            
                            {/** Sessao 4 - rodape / footer */}
                            <Grid container>
                                <Grid item xs={12} textAlign={"center"} marginBottom={"1.5rem"}>
                                    <Typography variant="h6" sx={{ fontWeight: 700}}>
                                    <Link
                                        href={ROUTES.POLICY}
                                        target="_blank"
                                        rel="noopener"
                                        sx={{color: "gray"}}
                                    >
                                        Política de Privacidade
                                    </Link> {" "} | {" "}
                                    <Link
                                        href={ROUTES.TERMS}
                                        target="_blank"
                                        rel="noopener"
                                        sx={{color: "gray"}}
                                    >
                                        Termos de Uso
                                    </Link>
                                          
                                    </Typography> 
                                </Grid>
                                <Grid item xs={12} textAlign={"center"}>
                                    <Typography variant="h6" sx={{ fontWeight: 700}}>
                                        Tati Modena Cursos e Unhas Artificiais. 
                                        CNPJ: 26.671.428/0001-50 
                                        Todos os Direitos Reservados.
                                    </Typography> 
                                </Grid>

                            </Grid>

                        </Grid>


                        
                    </Grid>

                </Grid>


            </Grid>



        </Grid>
    )
}

export default Home;

const useStyles = makeStyles((theme: Theme) => ({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }));
