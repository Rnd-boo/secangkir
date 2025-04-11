import React from "react";

export default function ImageGrid() {
  return (
    <>
      <div className="w-full">
        <div className="flex" style={{ width: "125%" }}>
          <div className="w-1/5 border-2 overflow-hidden aspect-square">
            <img
              src="images/Cafe1.jpg"
              alt="Coffee"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="w-1/5 border-2 border-white overflow-hidden aspect-square">
            <img
              src="images/Cafe2.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="w-1/5 border-2 border-white overflow-hidden aspect-square">
            <img
              src="images/Cafe3.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="w-1/5 border-2 border-white overflow-hidden aspect-square">
            <img
              src="images/Cafe4.jpeg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="w-1/5 border-2 border-white overflow-hidden aspect-square">
            <img
              src="images/handinkeyboard.jpeg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
