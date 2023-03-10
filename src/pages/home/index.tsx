import React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme, useTheme } from '@mui/material/styles';
import { Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';

import expertIMG from "@assets/tatianemodenaexpert.png"
import expertIMG2 from "@assets/tatianemodenaexpert2.png"
import expertIMG3 from "@assets/tatianemodenaexpert3.png"


import card1 from "@assets/card1.png"
import card1High from "@assets/card1-1920x1080.png"
import card2High from "@assets/card2-1920x1080.png"


import FormActiveCampaign from '@components/formActiveCampaign';
import { ArrowDownIcon, CalendarIcon } from '@components/icons';
import { NeonButton } from '@components/neonButton';


interface Props {
    children?: React.ReactNode;
}

const Home: React.FC<Props> = ({ children, ...props }) => {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <Grid container justifyContent= "center" sx={{overflow: "hidden"}}>

            <Grid item xs={12} lg={4}>
                
                <Grid container gap={2}>


                {/** Sessao   1   */}
                {/* <Grid container>
                    <Grid item>
                        <Card>
                            <CardMedia component={"img"} image={expertIMG3}></CardMedia>
                            <CardContent style={{margin: 2, padding: "10px 15px 10px 15px", backgroundColor: "black"}}>
                                <Typography variant={"h6"} style={{textAlign: "center", lineHeight: "1.5rem"}}> 
                                    Como se tornar a referência na sua Região aplicando a <b style={{color:theme.palette.textColor?.highlighted}}>ESTRATÉGIA POSICIONAMENTO REFERENCIA </b>  
                                    no seu Instagram e finalmente Atrair clientes que valorizam financeiramente seu Trabalho.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    
                    <Grid container sx={{padding: 1}}>
                        <FormActiveCampaign></FormActiveCampaign>
                        <Grid item sx={{display: "flex",}}>
                            <CalendarIcon sx={{  marginLeft: 1.1, marginRight: 0.5, }}/> 
                            <Typography variant="body1" sx={{}}> 27, 28, 29 e 30 de Março, <b style={{fontWeight: 900}} >AO VIVO, ás 19:00h</b> </Typography>
                        </Grid>

                    </Grid>



                </Grid> */}

                <Divider sx={{width: "100%", border: `1px solid ${theme.palette.backgroundColor.highlighted}`}} ></Divider>

                {/** Sessao 2 */}
                <Grid container justifyContent={"center"} sx={{border: "0px solid red"}} gap={2}>
                    <Grid item sx={{display: "flex"}}>
                        <ArrowDownIcon sx={{fontSize: "1.5rem"}}/> 
                        <Typography variant='h5' 
                            sx={{fontWeight: 700, color: theme.palette.textColor?.highlighted, margin: "0px 4px 0px 4px"}}
                        > 
                                CRONOGRAMA DO EVENTO 
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Card sx={{marginTop: 0}}>
                            <CardMedia component={"img"} image={card1High}></CardMedia>
                            <CardContent style={{margin: 2, padding: "0px 15px 10px 15px", backgroundColor: "black"}}>
                                <Typography variant={"h6"} style={{textAlign: "center", lineHeight: "1.5rem"}}> 
                                     <b style={{color:theme.palette.textColor?.highlighted}}>27/03 AO VIVO, </b> <b>ás 19:00h</b>    
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card sx={{backgroundColor: "black"}}>
                            <CardMedia component={"img"} image={card2High}></CardMedia>
                            <CardContent style={{margin: 2, padding: "0px 15px 10px 15px", backgroundColor: "black"}}>
                                <Typography variant={"h6"} style={{textAlign: "center", lineHeight: "1.5rem"}}> 
                                     <b style={{color:theme.palette.textColor?.highlighted}}>28/03 AO VIVO, </b> <b>ás 19:00h</b>    
                                </Typography>
                            </CardContent>
                        </Card>
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
