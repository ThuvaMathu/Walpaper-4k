import * as React from "react";

const CircleLoader = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      margin: "auto",
      display: "block",
      shapeRendering: "auto",
    }}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <circle
      cx={50}
      cy={50}
      r={43}
      strokeWidth={8}
      stroke="#0582ca"
      strokeDasharray="67.54424205218055 67.54424205218055"
      fill="none"
      strokeLinecap="round"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        keyTimes="0;1"
        values="0 50 50;360 50 50"
      />
    </circle>
  </svg>
);

export default CircleLoader;
