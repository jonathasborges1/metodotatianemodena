import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

import { ReactComponent as calendarImg } from "@assets/iconCalendar.svg";
import { ReactComponent as arrowDownImg } from "@assets/iconArrowDown.svg";

export const ArrowDownIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      // sx={{border: "1px solid red", fill: "none", color: "blue", fontSize: "1rem"}}
      component={arrowDownImg}
      viewBox="0 0 40 40"
      {...props}
    />
  );
};

export const CalendarIcon: React.FC<SvgIconProps> = (props) => {
   return (
     <SvgIcon
       component={calendarImg}
       viewBox="0 0 42 40"
       {...props}
     />
   );
 };

