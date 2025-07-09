import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const GSAPDemo = () => {
  const gsapRef = useRef();
  useGSAP(() => {
    gsap.from(gsapRef.current, {
      rotate: 360,
      scale: 0,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.2,
    });
  });

  return (
    <div className="flex w-full gap-4 justify-around items-center h-screen bg-gray-100">
      <div className="flex flex-col gap-4">
        <div ref={gsapRef} className="box w-24 h-24 bg-blue-500 rounded-md"></div>
        <div className="circle bg-green-400 rounded-full h-24 w-24"></div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="box w-24 h-24 bg-green-500 rounded-md"></div>
        <div className="circle bg-blue-400 rounded-full h-24 w-24"></div>
      </div>
    </div>
  );
};

export default GSAPDemo;
