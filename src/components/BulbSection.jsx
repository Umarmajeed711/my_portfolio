import React, { useState } from "react";

const BulbSection = () => {
  const [bulbOn, setBulbOn] = useState(false);

  return (
    <div className="my-10 px-4 md:px-8 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Bulb Icon */}
        {/* <div
          className={`h-12 w-12 md:h-16 md:w-16 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer ${
            bulbOn ? "bg-theme-primary glow-purple" : "bg-theme-background border border-theme-secondary"
          }`}
          onClick={() => setBulbOn(!bulbOn)}
          title="Click to toggle bulb"
        >
          💡
        </div> */}

        {/* Text */}
        {/* <div className="text-center md:text-left">
          <p className="text-theme-secondary text-sm md:text-base">
            {bulbOn
              ? "With great powers comes great electricity bills! ⚡"
              : "Click the bulb to see a fun fact!"}
          </p>
        </div> */}

        <div className="bg-theme-background pt-6  hidden md:block source">
          <div className="flex justify-center gap-2 items-center pb-5">
            <div
              className={` h-10 w-10 md:h-12 md:w-12 bg-theme-background  transition-all duration-300  md:mr-5 ${
                bulbOn ? "customeAnimate" : ""
              }  `}
              style={bulbOn ? { boxShadow: "0 0 10px #fff" } : null}
            ></div>
            <div
              className={`border  border-doubled  rounded   bg-theme-background -mt-5  transition-all duration-300 ${
                bulbOn
                  ? "bg-theme-background animate-bounce text-theme-primary border-theme-primary shadow-inner shadow-theme-primary border-2 border-dashed"
                  : ""
              }  `}
              style={bulbOn ? { boxShadow: "0 0 20px #fff" } : null}
            >
              <div className="p-2 rounded text-xs md:text-sm">
                {/* with Great powers comes great electricity bills!⚡ */}
                {bulbOn
              ? "With great powers comes great electricity bills! ⚡"
              : "Click the bulb to see a fun fact!"}
              </div>
            </div>
            <div
              className={`h-10 w-10 md:h-12 md:w-12 bg-theme-background transition-all duration-300 md:ml-5  ${
                bulbOn ? "customeAnimate" : ""
              }  `}
              style={bulbOn ? { boxShadow: "0 0 10px #fff" } : null}
            ></div>
          </div>

          <div className="flex justify-evenly p-5 ">
            <div>
              <div
                onClick={() => {
                  setBulbOn(!bulbOn);
                }}
                 className={`h-12 w-12 md:h-16 md:w-16 text-xl border rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer ${
            bulbOn ? "bg-theme-primary glow-purple border-theme-primary" : "bg-theme-background  border-theme-secondary"
          }`}
                // className={`px-2 py-1 text-xs md:text-sm border !border-theme-secondary rounded button hover:!border-transparent`}
              >
                {/* {bulbOn ? "Off" : "On"} */}
                💡
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulbSection;
