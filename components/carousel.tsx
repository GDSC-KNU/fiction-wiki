import React from "react";
import next from "next";
import { useState, useEffect, useRef, TouchEvent } from "react";

export default function Carousel() {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const [offSet, setOffSet] = useState(0);
  // const slideRef = useRef("");

  // window.onload = function touchControll() {
  //   const screenWidth = imgCon?.clientWidth;
  //   let imgCon = document.querySelector("#img_container");

  //   imgCon?.addEventListener("touchstart", (e) => {
  //     // startPos = e.touches[0].pageX;
  //     console.log("2222");
  //   });
  // };

  // const TOTAL_SLIDES = 2;

  // const slideI = () => {
  //   let pos = 0;
  //   setInterval(() => {
  //     pos = (pos + 1) % 3;
  //     let target = document.querySelector(`#img_div_${pos}`);
  //     target?.classList.add("-ml-[100%]");
  //   }, 2000);
  // };

  // const nextSlide = () => {
  //   if (currentSlide >= TOTAL_SLIDES) {
  //     setCurrentSlide(0);
  //   } else {
  //     setCurrentSlide(currentSlide + 1);
  //   }
  // };

  // const changeSlide = (index: number) => {
  //   setCurrentSlide(index);
  // };

  // const prevSlide = () => {
  //   if (currentSlide === 0) {
  //     setCurrentSlide(TOTAL_SLIDES);
  //   } else {
  //     setCurrentSlide(currentSlide - 1);
  //   }
  // };

  // //touch slide
  // let startPos = 0;

  // let curPos = 0;

  // const touchStart = (event: any) => {
  //   let imgCon = document.querySelector("#img_container");
  //   console.log(event?.touches[0].pageX);
  // };

  // const touchMove = (event: any) => {
  //   let imgICon = document.querySelector("#img_inner_container");

  //   setOffSet(
  //     Math.round((curPos + (event.targetTouches[0].pageX - startPos)) / 100) *
  //       100
  //   );
  // };

  // const touchEnd = (event: any) => {
  //   // let imgCon = document.querySelector("#img_container");
  //   // const screenWidth: any = imgCon?.clientWidth;
  //   // const sum = curPos + (event?.touches[0]?.pageX - startPos);
  //   // let destination = Math.round(sum / screenWidth) * screenWidth;
  //   // if (destination > 0) {
  //   //   destination = 0;
  //   // } else if (destination < -(screenWidth * (3 - 1))) {
  //   //   destination = -(screenWidth * (3 - 1));
  //   // }

  //   // console.log(event?.touches[0]?.pageX);
  //   console.log(offSet);
  //   console.log("touchend");
  // };

  //   //touch slide end

  // useEffect(() => {
  // slideRef.current = `-ml-[${100 * currentSlide}%]`;

  // let cur = `-ml-[${100 * currentSlide}%]`;
  // console.log(cur);
  // console.log(currentSlide);
  // let imgICon = document.querySelector("#img_inner_container");
  // imgICon?.classList.remove("-ml-[0%]");
  // imgICon?.classList.remove("-ml-[100%]");
  // imgICon?.classList.remove("-ml-[200%]");
  // imgICon?.classList.remove("-ml-[300%]");
  // imgICon?.classList.add(cur);

  // let indexBCon = document.querySelector("#indexButtonContainer");
  // indexBCon?.children[0].classList.replace("bg-blue-200", "bg-black");
  // indexBCon?.children[1].classList.replace("bg-blue-200", "bg-black");
  // indexBCon?.children[2].classList.replace("bg-blue-200", "bg-black");
  // indexBCon?.children[currentSlide].classList.replace(
  //   "bg-black",
  //   "bg-blue-200"
  // );

  // let imgCon = document.querySelector("#img_container");
  // imgCon.className = ` translate-x-[${offSet}px] transition-all duration-[0ms]`;
  // imgCon?.addEventListener("touchstart", (e: any) => {
  //   // startPos = e.changedTouches;
  //   console.log(e.changedTouches[0].pageX);
  // });
  // }, [currentSlide]);

  // useEffect(() => {
  //   let imgCon = document.querySelector("#img_container");
  //   imgCon.className = ` translate-x-[${offSet}px] transition-all duration-[0ms]`;
  //   console.log("hi22");
  //   console.log(offSet);
  // }, [offSet]);

  return <></>;
}
