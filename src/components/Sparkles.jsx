"use client";

import { useAnimate } from "framer-motion";
import React, { useEffect } from "react";

const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Sparkles = ({ delay }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const sparkles = Array.from({ length: 5 });

    const sparklesAnimation = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        scale: randomNumberBetween(1.5, 4.5),
        rotate: randomNumberBetween(0, 100),
        opacity: 1,
      },
      {
        delay: delay,
        duration: 1,
        ease: "easeInOut",
        at: "<",
      },
    ]);

    const sparklesFadeOut = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        opacity: 0,
      },
      {
        duration: 0.2,
        at: ">",
      },
    ]);

    const sparklesReset = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        opacity: 0,
      },
      {
        duration: 0.3,
      },
    ]);

    animate([...sparklesReset, ...sparklesAnimation, ...sparklesFadeOut]);
  }, [animate]);

  return (
    <div ref={scope} className="relative w-full h-[300px]">
      {Array.from({ length: 5 }).map((_, index) => {
        const left = randomNumberBetween(20, 70);
        const top = randomNumberBetween(0, 100);

        return (
          <svg
            key={index}
            className={`absolute opacity-0 sparkle-${index}`}
            style={{ left: `${left}%`, top: `${top}%` }} // Apply random positions
            viewBox="0 0 100 100"
            width="10"
            height="10"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1">
            <defs>
              <radialGradient
                id={`gradient-${index}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#fffcb6", stopOpacity: 1 }}
                />
                <stop
                  offset="30%"
                  style={{ stopColor: "#d6c50b", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#a88e02", stopOpacity: 1 }}
                />
              </radialGradient>
            </defs>
            <path
              d="m4.67 50c44.62 0 45.33-45.81 45.33-45.81s.71 45.81 45.33 45.81c-44.62 0-45.33 45.81-45.33 45.81s-.71-45.81-45.33-45.81z"
              fill={`url(#gradient-${index})`}></path>
          </svg>
        );
      })}
    </div>
  );
};

export default Sparkles;
