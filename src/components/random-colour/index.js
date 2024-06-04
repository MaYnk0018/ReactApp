import React, { useState, useEffect } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  function handleCreateRandomHexColor() {
    let hexColor = "#";
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "F", "B", "C", "D", "E", "F"];
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * 16)];
    }
    setColor(hexColor);
  }
  function handleCreateRandomRgbColor() {
    const r= Math.floor(Math.random() * 256);
    const g= Math.floor(Math.random() * 256);
    const b= Math.floor(Math.random() * 256);
    setColor(`rgb(${r},${g},${b})`);
  }
  useEffect(()=>{
    typeOfColor=== "rgb" ? handleCreateRandomRgbColor() : handleCreateRandomHexColor()
  },[typeOfColor]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
      className="container"
    >
      <button
        onClick={() => {
          setTypeOfColor("hex");
        }}
      >
        Create HEX Color
      </button>
      <button
        onClick={() => {
          setTypeOfColor("rgb");
        }}
      >
        Create RGB Color
      </button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      
    </div>
  );
}
