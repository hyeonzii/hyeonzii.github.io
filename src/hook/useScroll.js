import { useState, useEffect } from "react";

export default function useScroll() {
  const [state, setState] = useState({
    y: 0,
  });

  const onScroll = (event) => {
    setState({ y: window.scrollY });
  };

  console.log(state); //check point!!!

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { state };
}
