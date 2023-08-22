"use client";

import React from "react";
import { Stack } from "@mui/material";
import { Slider, Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function Experience() {
  const CustomSlider = styled(Slider)(({ theme }) => ({
    color: "#f9c03f",
    "& .MuiSlider-thumb": {
      height: 50,
      width: 50,
      backgroundColor: "#000000",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
  }));

  return (
    <div className="my-[50px] w-[95%] md:w-[90%] mx-auto">
      <h1 className="text-[2rem] translate-right">Experience</h1>
      <section className="my-[30px] w-[90%] mx-auto">
        <Stack sx={{ height: 900 }} spacing={1} direction="row">
          <CustomSlider
            className="leading-tight"
            orientation="vertical"
            aria-label="Custom marks"
            value={[0, 25, 50, 75, 100]}
          />
          <div className="flex flex-col justify-center items-center">
            HI THERE
          </div>
        </Stack>
      </section>
    </div>
  );
}
