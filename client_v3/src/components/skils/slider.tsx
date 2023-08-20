"use client"
import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

export default function SkillSlider(props: {
  length: number;
  color: string;
  label: string;
}) {

  const CustomSlider = styled(Slider)(({ theme }) => ({
    color: props.color, // Change this to your desired color
  }));

  return (
    <div className="mr-[20px]">
      <Box width={400}>
        <label>{props.label}</label>
        <CustomSlider
          className="leading-tight"
          value={props.length}
          aria-label="Default"
        />
      </Box>
    </div>
  );
}
