import React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme, useTheme } from '@mui/material/styles';
import { Button, Card, CardContent, CardMedia, Divider, Grid, Link, Typography } from '@mui/material';

// import expertIMG from "@assets/tatianemodenaexpert.png"
// import expertIMG2 from "@assets/tatianemodenaexpert2.png"
// import expertIMG3 from "@assets/tatianemodenaexpert3.png"
// import expertHigh from "@assets/tatianemodenaexperthigh.png"
import expertHigh from "@assets/tatianemodena-1920x1080Tiny.png"

// import card1 from "@assets/card1.png"
import card1High from "@assets/card1-1920x1080Tiny.png"
import card2High from "@assets/card2-1920x1080Tiny.png"
import card3High from "@assets/card3-1920x1080Tiny.png"
import card4High from "@assets/card4-1920x1080Tiny.png"


import FormActiveCampaign from '@components/formActiveCampaign';
import { ArrowDownIcon, CalendarIcon } from '@components/icons';
// import { NeonButton } from '@components/neonButton';

import CardEvent from '@components/cardEvent';
import CardSeries from '@components/cardSeries';

import backgroundGradiente from '@assets/background.png'

import expert2High from "@assets/tatianemodenaexpert2high.png"
import expert from "@assets/tatianemodenaexpert2highteste.png"
import expert3High from "@assets/tatianemodenaexpert3high.png"


import CardExpert from '@components/cardExpert';
import AssinaturaExpert from "@assets/assinatura-1920x1080.png"
import UnbounceButton from '@components/buttonEffect';
import ButtonPulse from '@components/buttonPulse';
import ROUTES from '@config/routes';

// import UnbounceButton  from '@components/buttonEffect';
// import UnbounceButton from '@components/buttonEffect';
// import SmoothButton from '@components/buttonEffect';

interface Props {
    children?: React.ReactNode;
}

const Home: React.FC<Props> = ({ children, ...props }) => {
    const theme = useTheme();
    const classes = useStyles();

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

    const cardSeries = [
        {
            title: "Profissionais que desejam TRIPLICAR SEU FATURAMENTO."
        },
        {
            title: "Profissionais que querem se tornar referência na sua região!"
        },
        {
            title: "Profissionais que querem ser bem pagos pelos seus serviços."
        },
        {
            title: "Profissionais com dificuldade para captar clientes pelo Instagram."
        }
    ]

    const cardExpert = {
        image: expert2High,
        contentHighlighted: "",
        content: "Conheça sua Mentora:",
        assinatura: AssinaturaExpert
    }

    return (
        <Grid container justifyContent= "center" sx={{overflow: "hidden"}}>

            <Grid item xs={12} lg={4}>
                
                <Grid container>


                    {/** Sessao 1 - Formulario de Inscricao */}
                    <Grid container id={"section1"}>
                        <Grid item>
                            <Card sx={{backgroundColor: "black"}}>
                                <CardMedia component={"img"} image={expertHigh} sx={{width: "130%", marginLeft: "-3.5rem"}} ></CardMedia>
                                <CardContent style={{margin: 2, padding: "10px 15px 10px 15px", backgroundColor: "black"}}>
                                    <Typography variant={"h6"} style={{textAlign: "center", lineHeight: "1.5rem"}}> 
                                        Como se tornar a referência na sua Região aplicando a <b style={{color:theme.palette.textColor?.highlighted}}>ESTRATÉGIA POSICIONAMENTO REFERENCIA </b>  
                                        no seu Instagram e finalmente Atrair clientes que valorizam financeiramente seu Trabalho.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        
                        <Grid container justifyContent={"center"} sx={{padding: 1}}>
                            <FormActiveCampaign></FormActiveCampaign>
                            <Grid item sx={{display: "flex", alignItems: "center" }}>
                                <CalendarIcon sx={{  marginLeft: 1.1, marginRight: 0.5, }}/> 
                                <Typography variant="h6" sx={{}}> 27, 28, 29 e 30 de Março, <b style={{fontWeight: 900}} >AO VIVO, ás 19:00h</b> </Typography>
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
                        <Grid item> <Typography variant="h4" sx={{fontWeight: 700}} textAlign={"center"} >Para quem é essa Série?</Typography></Grid>
                        <Grid item> <CardSeries cards={cardSeries} /></Grid>

                        <Grid item xs={12}> 

                            <ButtonPulse onClick={scrollToSection} sx={{background: "red", marginTop: 1}} fullWidth>
                                <Typography variant="h5" sx={{color: "white", fontWeight: 700}} >EU QUERO PARTICIPAR</Typography> 
                            </ButtonPulse>

                        </Grid>

                        
                        <Grid item xs={12}>
                            <Grid container sx={{border: "0px solid red", 
                                height: "60vh",
                                backgroundImage: `url(${expert})`, 
                                backgroundRepeat: 'no-repeat', 
                                backgroundSize: "cover", 
                                backgroundPosition: "center" ,  }} 
                            > 
                            <div style={{position: "relative"}} >

                            <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: "-2rem",
                                    width: '100vh',
                                    height: '65vh',
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
                                    Profissional Referência no Brasil , já formou mais de 2.000 alunos em 17 paises. 
                                    Criadora do Método EXPRESS GEL NAIL®, uma metodologia exclusiva que te ensina a fazer Unhas Artificiais mais 
                                    lucrativas e rápidas do mundo. Empresária e Manicure, considerada uma Referência na sua Região. Tem 100% do seu 
                                    faturamento feito por clientes e alunos vindos do seu Instagram. 
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
