import React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme, useTheme } from '@mui/material/styles';
import { Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';

import expertIMG from "@assets/tatianemodenaexpert.png"
import FormActiveCampaign from '@components/formActiveCampaign';
import { CalendarIcon } from '@components/icons';

interface Props {
    children?: React.ReactNode;
}

const Home: React.FC<Props> = ({ children, ...props }) => {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <Grid container justifyContent= "center" >
            <Grid item xs={12} lg={4}>
                {/* <h1 className={classes.container}>Este bloco representa o componente <b style={{color:"#00f"}} >home</b> </h1> */}
                {/* {children} */}

                <Card>
                    <CardMedia component={"img"} image={expertIMG}></CardMedia>
                    {/* <img src={`${expertIMG}`} alt="" /> */}
                    <CardContent style={{margin: 2, backgroundColor: "black"}}>
                        <Typography variant={"h5"} style={{textAlign: "center", lineHeight: "1.6rem"}}> 
                            Como se tornar a referência na sua Região aplicando a <b style={{color:theme.palette.backgroundColor.highlighted}}>ESTRATÉGIA POSICIONAMENTO REFERENCIA </b>  
                            no seu Instagram e finalmente Atrair clientes que valorizam financeiramente seu Trabalho.
                        </Typography>
                    </CardContent>
                </Card>

                <FormActiveCampaign></FormActiveCampaign>
                
                <Grid container sx={{margin: 2}}>
                    <CalendarIcon sx={{marginRight: 0.2}}/> {" "}
                    <Typography variant="body1" sx={{}}> 27, 28, 29 e 30 de Março, <b style={{fontWeight: 900}} >AO VIVO, às 19:00h</b> </Typography>
                </Grid>

                <Divider sx={{width: "100%", border: `1px solid ${theme.palette.backgroundColor.secondary}`}} ></Divider>
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
