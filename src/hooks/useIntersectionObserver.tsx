import { useState, useEffect, useRef, useCallback } from "react";
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};
const useIntersectionObserver = () => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setIntersecting(true);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options, callback]);

  return { ref, isIntersecting };
};

export default useIntersectionObserver;
