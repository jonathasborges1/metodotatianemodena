import React from "react";
import { Button, styled } from "@mui/material";

export const NeonButton = styled(Button)(({ theme }) => ({
   color: "#000",
   textTransform: "none",
   background: "#E6C357",
   position: "relative",
   overflow: "hidden",
   transition: "0.5s",
   boxShadow: `0 0 2em 0.5em hsl(45 74% 62%)`,
   //transform: `perspective(1em) rotateX(40deg) scale(1, 0.35)`,
   //filter: `blur(1em)`,
   //textShadow: `0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor`,
   // "&:after": {
   //   content: '""',
   //   position: "absolute",
   //   top: 0,
   //   left: 0,
   //   right: 0,
   //   bottom: 0,
   //   background: "#f80",
   //   filter: "blur(10px)",
   //   zIndex: -1,
   // },
   // "&:hover": {
   //   background: "#f00",
   //   "&:after": {
   //     filter: "blur(20px)",
   //     opacity: 0.8,
   //   },
   // },
 }));

