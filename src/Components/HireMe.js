import React, { useEffect } from 'react';
import HIREME from '../Assets/HIRE_ME.mp3'
const HireMeComponent = () => {
  useEffect(() => {
    const audio = new Audio(HIREME);
    const intervalId = setInterval(() => {
      audio.play();
    }, 1000); // Repeat every 1 second
    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
      audio.pause(); // Pause the audio when the component unmounts
    };
  }, []);
  return (
    null
  );
};
export default HireMeComponent;