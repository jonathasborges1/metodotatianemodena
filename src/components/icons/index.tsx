import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

import { ReactComponent as calendarImg } from "@assets/iconCalendar.svg";
import { ReactComponent as arrowDownImg } from "@assets/iconArrowDown.svg";
import { ReactComponent as arrowRightImg } from "@assets/iconArrowRight.svg";
import { ReactComponent as checkedImg } from "@assets/iconChecked.svg";

export const CheckedIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      component={checkedImg}
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

export const ArrowDownIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      component={arrowDownImg}
      viewBox="0 0 40 40"
      {...props}
    />
  );
};

 export const ArrowRightIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      component={arrowRightImg}
      viewBox="0 0 30 30.000001"
      {...props}
    />
  );
};
