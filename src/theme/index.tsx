import { TypeBackground } from "@mui/material";
import { TypeText, createTheme } from '@mui/material/styles';

export interface CustomTypeBackground extends TypeBackground {
  default: string;
  primary: string;
  secondary?: string;
  backgroundCustom?: string;
  highlighted?: string;
}

export interface customTypographyOptions extends Partial<TypeText> {
  default: string;
  selected?: string;
  primary?: string;
  secondary?: string;
  highlighted?: string;
}

declare module '@mui/material/styles' {
  interface Palette { // Serve para conseguirmos acessar o atributo personalizado - Ex: theme.palette.backgroundColor?.primary
    backgroundColor: CustomTypeBackground;
    textColor?: customTypographyOptions;
  }
  interface PaletteOptions { // Serve para a variavel Theme Suporte atributos personalizado no body
    backgroundColor?: CustomTypeBackground;
    textColor?: customTypographyOptions;
  }
}

const Theme = createTheme({
    spacing: 10,
    typography: {
      fontFamily: [ 'Montserrat' ,'sans-serif'].join(','),
      fontSize: 11,
      subtitle1:{
        //color: "#FFDB70",
      }
    },
    palette: {
      primary: {
        main: "#fff", 
        contrastText: "#000",
        light: "#272B2D",
      },
      secondary: {
        main: "#FFDB70", 
        contrastText: "#fff",
      },
      error: {
        main: "#C30C0C",
      },
      success: {
        main: "#5AC45F",
      },
      text: {
        primary: "#e8e6e3",
        secondary: '#000',
        disabled: 'rgba(60, 72, 88, 0.38)',
      },
      textColor: {
        default: "#e8e6e3",
        secondary: '#000',
        highlighted: "#E6C357",
        selected: "#FFDB70",
      },
      background: {
        default: "#000",
        paper: "#17191A",
      },
      backgroundColor: {
        default: "#000",
        primary: "#17191A",
        secondary: "##0f0f",
        highlighted: "#E6C357",
        backgroundCustom: '#000',
        paper: "#000",
      },
    },
  
  });

  export default Theme;