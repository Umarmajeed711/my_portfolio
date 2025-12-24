import { useState } from "react";

const LampWithWire = ({ onTurnOn }) => {
  const [on, setOn] = useState(false);

  const toggleLamp = () => {
    if (!on) {
      setOn(true);
      onTurnOn();
    }
  };

  return (
    <div className="lamp-wrapper select-none">
      {/* Wire */}
      <div className="lamp-wire" onClick={toggleLamp}>
        <span className="wire-handle" />
      </div>

      {/* Lamp */}
      <svg
        width="180"
        height="220"
        viewBox="0 0 180 220"
        className={`lamp ${on ? "lamp-on" : "lamp-off"}`}
        onClick={toggleLamp}
      >
        {/* Top holder */}
        <rect x="70" y="10" width="40" height="20" rx="5" fill="#555" />

        {/* Shade */}
        <path
          d="M30 60 H150 L120 140 H60 Z"
          fill="#1f1f1f"
        />

        {/* Bulb */}
        <circle
          cx="90"
          cy="120"
          r="14"
          fill={on ? "#C778DD" : "#555"}
        />
      </svg>

      <p className="lamp-text">
        {on ? "Light is on ⚡" : "Pull the cord to contact me"}
      </p>
    </div>
  );
};

export default LampWithWire;
