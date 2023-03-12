import React from 'react';

import { Grid, Link, Typography } from '@mui/material';

import ROUTES from '@config/routes';

interface Props {
   children?: React.ReactNode;
   sx?: React.CSSProperties;
}

const Footer: React.FC<Props> = ({ children, ...props }) => {
   return (
      <Grid container {...props}>
         <Grid item xs={12} textAlign={"center"} marginBottom={"1.5rem"}>
            <Typography variant="body1" fontSize={"0.8rem"} sx={{ fontWeight: 700}}>
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
               Tati Modena Cursos e Unhas Artificiais. <br />
               CNPJ: 26.671.428/0001-50 <br />
               Todos os Direitos Reservados.
            </Typography> 
         </Grid>

  </Grid>
   )
}

export default Footer;