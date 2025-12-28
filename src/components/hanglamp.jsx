import { useState } from "react";
import "./hanglamp.css"
const LampWithForm = ({ onTurnOn ,On}) => {


  return (
    <div className="lamp-layout">
      {/* LAMP */}
      <div className="lamp-area">
        <svg
          viewBox="0 0 200 320"
          className={`lamp ${On ? "lamp-aim " : "lamp-off"}`}
          onClick={onTurnOn}

        >
          {/* Wire */}
          <rect x="98" y="0" width="4" height="80" fill="#666" />

          {/* Cap */}
          <rect x="82" y="80" width="36" height="16" rx="4" fill="#555"  />

          {/* Shade */}
          <path
            d="M40 110 H160 L130 180 H70 Z"
            fill="url(#shade)"
          />

          {/* Bulb */}
          <circle
            cx="100"
            cy="155"
            r="12"
            fill={On ? "#C778DD" : "#555"}
            
          />

          {/* Light cone */}
          {On && (
            <path
              d="M70 180 H130 L200 320 H0 Z"
              fill="url(#light)"
              className=" lamp-on"
            //   className={` ${On ? 'lamp-on' : ""} `}
            />
          )}

          <defs>
            <linearGradient id="shade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2a2a2a" />
              <stop offset="100%" stopColor="#111" />
            </linearGradient>

            <radialGradient id="light">
              <stop offset="0%" stopColor="#C778DD" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
        </svg>

        {/* <p className="lamp-hint">
          {On ? "Click to turn off" : "Click the lamp"}
        </p> */}
      </div>

      
      
    </div>
  );
};

export default LampWithForm;
