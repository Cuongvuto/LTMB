import React, { useState } from "react";

const ColorButton = ({ color, title, onClick }) => {
  return (
    <button
      style={{
        backgroundColor: color,
        color: color === "yellow" ? "black" : "white", // Đổi màu chữ nếu nền là vàng
        padding: "15px",
        margin: "10px",
        width: "200px",
        border: "none",
        fontSize: "16px",
        cursor: "pointer",
      }}
      onClick={() => onClick(color)}
    >
      {title}
    </button>
  );
};

const App = () => {
  const [bgColor, setBgColor] = useState("white");

  const handleButtonClick = (color) => {
    setBgColor(color);
  };

  const buttons = [
    { color: "green", title: "GREEN" },
    { color: "blue", title: "BLUE" },
    { color: "brown", title: "BROWN" },
    { color: "yellow", title: "YELLOW" },
    { color: "red", title: "RED" },
    { color: "black", title: "BLACK" },
  ];

  return (
    <div style={{ backgroundColor: bgColor, height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      {buttons.map((btn, index) => (
        <ColorButton key={index} color={btn.color} title={btn.title} onClick={handleButtonClick} />
      ))}
    </div>
  );
};

export default App;
