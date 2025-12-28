import { useState } from "react";

const LampWithWire = ({ onTurnOn ,On}) => {
  const [pulling, setPulling] = useState(false);
  const [swing, setSwing] = useState(false);

  const pullWire = () => {
    setPulling(true);
    setSwing(true);
    onTurnOn();

    setTimeout(() => setPulling(false), 400);
    setTimeout(() => setSwing(false), 1800);
  };

  return (
    <div className="lamp-wrapper select-none">
      {/* Wire */}
      {/* <div className="lamp-wire" onClick={onTurnOn}>
        <span className="wire-handle" />
      </div> */}

      <div
  className={`lamp-wire ${pulling ? "wire-pull" : ""}`}
  onClick={pullWire}
>
  <span className="wire-handle" />
</div>


      {/* Lamp */}
  <svg
  width="200"
  height="260"
  viewBox="0 0 200 260"
  className={`lamp ${On ? "lamp-on" : "lamp-off"} ${
    swing ? "lamp-swing" : ""
  }`}
  onClick={pullWire}
>
  <rect x="80" y="0" width="40" height="18" rx="4" fill="#666" />
  <rect x="96" y="18" width="8" height="18" fill="#444" />

  <path
    d="M40 60 H160 L130 150 H70 Z"
    fill="url(#shadeGradient)"
  />

  <circle
    cx="100"
    cy="135"
    r="14"
    fill={On ? "#C778DD" : "#555"}
  />

  {On && (
    <path
      d="M70 150 H130 L170 260 H30 Z"
      fill="url(#lightGradient)"
      opacity="0.25"
    />
  )}

  <defs>
    <linearGradient id="shadeGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#2a2a2a" />
      <stop offset="100%" stopColor="#111" />
    </linearGradient>

    <radialGradient id="lightGradient">
      <stop offset="0%" stopColor="#C778DD" />
      <stop offset="100%" stopColor="transparent" />
    </radialGradient>
  </defs>
</svg>



      <p className="lamp-text">
        {On ? "Light is on ⚡" : "Pull the cord to contact me"}
      </p>
    </div>
  );
};

export default LampWithWire;
