import { useState, useEffect, useRef } from "react";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef("");

  const TOTAL_SLIDES = 2;

  //   const slideI = () => {
  //     let pos = 0;
  //     setInterval(() => {
  //       pos = (pos + 1) % 3;
  //       let target = document.querySelector(`#img_div_${pos}`);
  //       target?.classList.add("-ml-[100%]");
  //     }, 2000);
  //   };

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    console.log(currentSlide);
    slideRef.current = `-ml-[${100 * currentSlide}%]`;
    console.log(slideRef);
    let imgCon = document.querySelector("#img_container");
    imgCon?.classList.remove("-ml-[0%]");
    imgCon?.classList.remove("-ml-[100%]");
    imgCon?.classList.remove("-ml-[200%]");
    imgCon?.classList.remove("-ml-[300%]");
    imgCon?.classList.add(slideRef.current);
  }, [currentSlide]);

  return (
    <div className=" h-[45vh] overflow-hidden w-[100vw] max-h-[250px] min-h-[213px] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div
        className=" overflow-hidden flex w-[300%] transition-all duration-1000"
        id="img_container"
      >
        <div className=" h-[250px] w-[100%] " id="img_div_1">
          <img
            src="https://picsum.photos/1422/362?random=1"
            className=" h-full w-full"
          ></img>
        </div>
        <div className=" h-[250px] w-[100%] " id="img_div_2">
          <img
            src="https://picsum.photos/1422/362?random=2"
            className=" h-full w-full"
          ></img>
        </div>
        <div className=" h-[250px] w-[100%] " id="img_div_3">
          <img
            src="https://picsum.photos/1422/362?random=3"
            className=" h-full w-full"
          ></img>
        </div>
      </div>

      <div className="flex justify-between mx-5 space-x-8 relative bottom-36 opacity-60">
        <button
          onClick={prevSlide}
          className=" bg-gray-400 border-solid px-2 py-5 hover:bg-white transition-all  rounded-xl font-bold"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className=" bg-gray-500 border-solid px-2 py-5 hover:bg-white transition-all rounded-xl font-bold"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
