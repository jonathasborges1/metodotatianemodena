import { Box, Button, Checkbox, Grid, TextField, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

interface Props {
   children?: React.ReactNode;
}

const FormActiveCampaign: React.FC<Props> = ({ children, ...props }) => {
   const classes = useStyles();
   const theme = useTheme();
   const [email, setEmail] = React.useState('');

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();
 
     const apiKey = 'SUA_API_KEY'; // substitua com sua API key do ActiveCampaign
     const listId = 'SUA_LISTA_ID'; // substitua com o ID da lista que você deseja adicionar o email
 
     const data = {
       email: email,
       tags: 'inscrito', // adicione qualquer tag que você deseja associar ao email
     };
 
     const response = await fetch(`https://YOURACCOUNT.api-us1.com/api/3/contactLists/${listId}/contacts`, {
       method: 'POST',
       headers: {
         'Api-Token': apiKey,
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ contact: data }),
     });
 
     if (response.ok) {
       console.log('Email enviado com sucesso!');
     } else {
       console.error('Erro ao enviar email');
     }
   };
 
   const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     setEmail(event.target.value);
   };
   return (
     <form onSubmit={handleSubmit} style={{padding: "0px 0.2rem 0px 0.2rem" }}>
       {/* <label htmlFor="email">Endereço de e-mail:</label> */}
       {/* <input type="email" id="email" value={email} /> */}
       
       <TextField id="outlined-basic" variant="outlined" fullWidth
         type="email" 
         label="Digite seu e-mail"   
         onChange={handleEmailChange}
         InputLabelProps={{
             classes: {root: classes.root},
               sx:{ 
                  marginLeft: "0.4rem",
                  marginTop: "-0.2rem", 
                  paddingRight: "6px",
                  fontSize: "0.9rem",
                  "&.Mui-focused": { // Controle de css no momento que o usuario esta digitando
                     color: "yellow",
                     backgroundColor: "black",
                     paddingRight: "6px",
                     borderRadius: 5,
                  }, 
                  "&.MuiInputLabel-shrink" : { // Controle de css apos usuario ter digitado
                     color: "yellow",
                     backgroundColor: "black",
                     borderRadius: 5,
                  },
               }
         }}
         inputProps={{
            sx:{border: "0px solid blue",
               // marginTop: "-0.3rem", 
               fontSize: "0.9rem",
               color: theme.palette.textColor?.secondary,
               padding: "0.8rem",
            }
         }}
         sx={{
               border: "0px solid blue",
               borderRadius: 5, 
               //backgroundColor: theme.palette.backgroundColor.default,
               backgroundColor: 'rgba(255, 255, 255, 0.8)',
               marginBottom: 1.5,
               padding: 0,
               "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "2px solid yellow",
                  borderRadius: 5,
               },
            }} 
         />

       <Button variant="contained" type="submit" fullWidth
         sx={{
            backgroundColor: theme.palette.backgroundColor.highlighted, 
            color: theme.palette.textColor?.secondary,
            borderRadius: 3,
            boxShadow: `0 0 2em 0.5em hsl(45 74% 62%)`,
            
         }}>
            <Typography variant="h5" sx={{fontWeight: 700, margin: "0.3rem",}} >EU QUERO PARTICIPAR</Typography>  
         </Button>

         <Grid container sx={{ marginTop: 1.2, marginBottom: 1 }} gap={0.4}>
            <Grid item xs={1}> <Checkbox sx={{color: "white"}}  /> </Grid>
            <Grid item xs={10.8} sx={{lineHeight: "0.4rem", marginTop: "0.2rem",}} >  
               <Typography variant={"caption"} sx={{fontSize: "0.49rem"}} > 
                  Aceito receber os e-mails da Tatiane Modena respeitando
                  a politica de pricavidade descrita neste site e a LGPD vigente no Brasil.
               </Typography>
            </Grid>
         </Grid>
     </form>
   );
}

export default FormActiveCampaign;

const useStyles = makeStyles({
   root: {
     '& .MuiInputLabel-shrink': {
       border: "10px solid blue",
       color: 'red',
     },
   },
 });