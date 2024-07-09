import React, { useEffect, useState } from "react";

const Slider: React.FC<{ percentage: number }> = ({ percentage }) => {
  const circleId: string = `progressCircle${percentage}_${Math.random()}`;
  const [offset, setOffset] = useState(430);
  const [circleLength] = useState(430);

  useEffect(() => {
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
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#Da22ff" />
            <stop offset="110%" stopColor="#9733ee" />
          </linearGradient>
        </defs>
        <circle
          id={circleId}
          cx="80"
          cy="80"
          r="70"
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
