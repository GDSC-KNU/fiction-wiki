import { useEffect } from "react";

function useEscapeKeyPress(handler: any) {
  useEffect(() => {
    const handleEscapePress = (event: any) => {
      if (event.key === "Escape") {
        handler();
      }
    };

    window.addEventListener("keyup", handleEscapePress);

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener("keyup", handleEscapePress);
    };
  }, [handler]); // Run this effect whenever the provided onEscape function changes.
}

export default useEscapeKeyPress;
