import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Checkbox, Grid, TextField, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ROUTES from '@config/routes';
import appConfig from '@config/appConfig';

import axios from 'axios';

interface FormData {
   name: string;
   email: string;
   phone: string;
 }
interface Props {
   children?: React.ReactNode;
}

const FormActiveCampaign: React.FC<Props> = ({ children, ...props }) => {
   const history = useHistory();
   const classes = useStyles();
   const theme = useTheme();
   const [isChecked, setIsChecked] = React.useState(false);
   const [formData, setFormData] = React.useState<FormData>({
      name: '',
      email: '',
      phone: '',
    });

   const [errors, setErrors] = React.useState<Partial<FormData>>({});

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

     event.preventDefault();
   //   if(isChecked) {
   //    alert("Necessario aceitar os termos para concluir seu cadastro");
   //    return -1;
   //   }
     const formIsValid = validateForm();
     if(formIsValid){
         try {
            const data = {
               MachineCode: appConfig.api.machineCode,
               EmailSequenceCode: appConfig.api.emailSequenceCode,
               SequenceLevelCode: appConfig.api.sequenceLevelCode,
               Name : formData.name,
               Email: formData.email,
               Phone: formData.phone,
               tags: 'inscrito', // adicione qualquer tag que você deseja associar ao email
            };
            const config = {
               method: 'post',
               maxBodyLength: Infinity,
               // url: 'https://llapi.leadlovers.com/webapi/lead?token=9782BDF758194372895B3452D952555E',
               url: `${appConfig.api.url}?token=${appConfig.api.token}`,
               headers: { 
               'Content-Type': 'application/json'
               },
               data : data
            };
            // const response = await axios.post( appConfig.api.url + `?token=${appConfig.api.token}` , {payload} )
            const response = await axios(config);

            console.log('Email enviado com sucesso!');
            if(response.status === 200){
               alert("Email cadastrado com sucesso");
               history.push(ROUTES.THANKS)
            }else{
               alert("Erro ao cadastrar o email");
               throw new Error("Erro ao enviar email");
            }
         } catch (error) {
            alert("Erro ao cadastrar o email");
            console.log("Erro ao enviar email : Razao -> " + error);
            // console.error('Erro ao enviar email');
         }
     }
   };

   const validateForm = (): boolean => {
      let isValid = true;
      const newErrors: Partial<FormData> = {};
      if (!formData.name) {
        newErrors.name = 'Ops! Campo Nome Obrigatorio!';
        isValid = false;
      }
      if (!formData.email) {
        newErrors.email = 'Ops! Campo Email Obrigatorio!';
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Formato de email invalido | Ex: joao@gmail.com';
        isValid = false;
      }
      if (!formData.phone) {
        newErrors.phone = 'Ops! Campo Telefone Obrigatorio! - Ex: 92 9 8844 673';
        isValid = false;
      } else if (!/^\d{10,11}$/.test(formData.phone)) {
        newErrors.phone = 'O numero de telefone deve conter pelo menos 10 digitos';
        isValid = false;
      }
      setErrors(newErrors);
      return isValid;
    };

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
      setErrors((prevErrors) => ({
         ...prevErrors,
         [name]: '',
       }));
    };

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };

   return (
     <form onSubmit={handleSubmit} style={{padding: "0px 0.2rem 0px 0.2rem" }}>
       
       <TextField id="outlined-basic" variant="outlined" name="name"
         label="Nome:"   
         onChange={handleInputChange}
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
            required
            fullWidth 
            error={Boolean(errors.name)}
            helperText={errors.name}
         />

       <TextField id="outlined-basic" variant="outlined" type="email"
         name="email" 
         label="Digite seu e-mail:"   
         onChange={handleInputChange}
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
            required
            fullWidth 
            error={Boolean(errors.email)}
            helperText={errors.email}
         />

      <TextField id="outlined-basic" variant="outlined" type="phone" 
         name="phone"
         label="Whatsapp:"   
         onChange={handleInputChange}
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
               fontSize: "0.9rem",
               color: theme.palette.textColor?.secondary,
               padding: "0.8rem",
            }
         }}
         sx={{
               border: "0px solid blue",
               borderRadius: 5, 
               backgroundColor: 'rgba(255, 255, 255, 0.8)',
               marginBottom: 1.5,
               padding: 0,
               "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "2px solid yellow",
                  borderRadius: 5,
               },
            }}
            required
            fullWidth 
            error={Boolean(errors.phone)}
            helperText={errors.phone}
         />

       <Button id="enviar" variant="contained" type="submit" fullWidth
         sx={{
            backgroundColor: theme.palette.backgroundColor.highlighted, 
            color: theme.palette.textColor?.secondary,
            borderRadius: 3,
            boxShadow: `0 0 2em 0.5em hsl(45 74% 62%)`,
            
         }}>
            <Typography variant="h5" sx={{fontWeight: 700, margin: "0.3rem",}} >EU QUERO PARTICIPAR</Typography>  
         </Button>

         <Grid container sx={{ marginTop: 1.2, marginBottom: 1 }} gap={0.4}>
            <Grid item xs={1}> <Checkbox checked={isChecked} onChange={handleCheckboxChange} sx={{color: "white"}}  /> </Grid>
            <Grid item xs={10.8} sx={{lineHeight: "0.4rem", marginTop: "0.4rem",}} >  
               <Typography variant={"caption"} sx={{fontSize: "0.55rem", fontWeight: 500}} > 
                  Aceito receber os e-mails da Tatiane Modena respeitando
                  a politica de privacidade descrita neste site e a LGPD vigente no Brasil.
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