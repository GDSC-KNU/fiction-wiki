"use client";

import { useState, useEffect } from "react";

export default function useScrollDirection(threshold = 10) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - scrollY) > threshold) {
        setIsScrollingDown(currentScrollY > scrollY);
        setScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return isScrollingDown;
}
