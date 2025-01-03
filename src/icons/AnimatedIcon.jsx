import React from "react";

const AnimatedIcon = ({ color }) => {
  return (
    <div>
      {color === "default" ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <circle
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth="2"
            r="15"
            cx="40"
            cy="100"
          >
            <animate
              attributeName="opacity"
              calcMode="spline"
              dur="2"
              values="1;0;1;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.4"
            ></animate>
          </circle>
          <circle
            fill="#040007"
            stroke="#040007"
            strokeWidth="2"
            r="15"
            cx="100"
            cy="100"
          >
            <animate
              attributeName="opacity"
              calcMode="spline"
              dur="2"
              values="1;0;1;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.2"
            ></animate>
          </circle>
          <circle
            fill="#040007"
            stroke="#040007"
            strokeWidth="2"
            r="15"
            cx="160"
            cy="100"
          >
            <animate
              attributeName="opacity"
              calcMode="spline"
              dur="2"
              values="1;0;1;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="0"
            ></animate>
          </circle>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <circle
            fill="#003509"
            stroke="#003509"
            strokeWidth="2"
            r="15"
            cx="40"
            cy="100"
          >
            <animate
              attributeName="opacity"
              calcMode="spline"
              dur="2"
              values="1;0;1;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.4"
            ></animate>
          </circle>
          <circle
            fill="#003509"
            stroke="#003509"
            strokeWidth="2"
            r="15"
            cx="100"
            cy="100"
          >
            <animate
              attributeName="opacity"
              calcMode="spline"
              dur="2"
              values="1;0;1;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.2"
            ></animate>
          </circle>
          <circle
            fill="#003509"
            stroke="#003509"
            strokeWidth="2"
            r="15"
            cx="160"
            cy="100"
          >
            <animate
              attributeName="opacity"
              calcMode="spline"
              dur="2"
              values="1;0;1;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="0"
            ></animate>
          </circle>
        </svg>
      )}
    </div>
  );
};

export default AnimatedIcon;
