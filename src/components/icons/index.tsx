import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

import { ReactComponent as calendarImg } from "@assets/iconCalendar.svg";

export const CalendarIcon: React.FC<SvgIconProps> = (props) => {
   return (
     <SvgIcon
       component={calendarImg}
       viewBox="0 0 42 40"
       {...props}
     />
   );
 };