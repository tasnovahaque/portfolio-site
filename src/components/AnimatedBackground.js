// src/components/AnimatedBackground.js
import React from 'react';

const AnimatedBackground = () => {
  return (
    <svg className="absolute top-0 left-0 w-full h-full -z-10 opacity-10 pointer-events-none" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path
        fill="#6b7280"
        fillOpacity="1"
        d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,144C560,128,640,128,720,122.7C800,117,880,107,960,106.7C1040,107,1120,117,1200,117.3C1280,117,1360,107,1400,101.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
  );
};

export default AnimatedBackground;
