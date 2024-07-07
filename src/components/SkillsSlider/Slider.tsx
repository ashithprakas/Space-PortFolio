import React, { useEffect, useState } from "react";

const Slider: React.FC<{ percentage: number }> = ({ percentage }) => {
  const circleId: string = `progressCircle${percentage}_${Math.random()}`;
  const [offset, setOffset] = useState(600);
  const [circleLength] = useState(600);
  useEffect(() => {
    console.log("use effect called for ", percentage);
    const progressCircle = document.getElementById(circleId) as HTMLElement;
    const offsetValue = circleLength - (circleLength * percentage) / 100;
    setOffset(offsetValue);
    progressCircle.style.transition = "stroke-dashoffset 2s ease-in-out";
  }, [percentage]);

  return (
    <div className="skill-meter-container">
      <div className="skill">
        <div className="outer">
          <div className="inner">
            <div className="number" id="number">
              {percentage}%
            </div>
          </div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="200px"
        height="200px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#Da22ff" />
            <stop offset="110%" stopColor="#9733ee" />
          </linearGradient>
        </defs>
        <circle
          id={circleId}
          cx="100"
          cy="100"
          r="90"
          strokeLinecap="round"
          style={{
            strokeDasharray: circleLength,
            strokeDashoffset: offset,
          }}
        ></circle>
      </svg>
    </div>
  );
};

export default Slider;
