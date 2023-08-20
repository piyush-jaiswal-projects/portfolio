"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

export default function SkillSlider(props: {
  length: number;
  color: string;
  label: string;
}) {
  
  const [animatedValue, setAnimatedValue] = useState(0);
  const finalValue = props.length; // Set your desired final value
  const animationDuration = 500; // Duration of the animation in milliseconds


  useEffect(() => {
    const startTime = Date.now();
    const animationInterval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / animationDuration, 1);
      const newValue = Math.round(progress * finalValue);
      setAnimatedValue(newValue);

      if (progress === 1) {
        clearInterval(animationInterval);
      }
    }, 16); // Update roughly every frame (60 fps)

    return () => {
      clearInterval(animationInterval);
    };
  }, [finalValue]);

  const CustomSlider = styled(Slider)(({ theme }) => ({
    color: props.color, // Change this to your desired color
  }));

  return (
    <div className="mr-[20px]">
      <Box width={400}>
        <label>{props.label}</label>
        <CustomSlider
          className="leading-tight"
          value={animatedValue}
          aria-label="Default"
        />
      </Box>
    </div>
  );
}
