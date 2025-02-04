import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button } from "@mui/material";

const colors = [
  "rgb(241, 80, 80)", // Bright Red
  "#FF1493", // Deep Pink
  "#9400D3", // Dark Violet
  "#00FFFF", // Neon Cyan
  "#32CD32", // Lime Green
  "#FFA500", // Bright Orange
  "#FF4500", // Red-Orange
  "#FFFF00", // Bright Yellow
  "#8A2BE2", // Blue Violet
  "#FF00FF", // Magenta
];

const Counter = () => {
  const [count, setCount] = useState(0);

  // Animated background transition
  const bgStyles = useSpring({
    height: count * 40 + 100,
    backgroundColor: colors[count % colors.length],
    config: { tension: 200, friction: 30 },
  });

  return (
    <animated.div
      style={{
        ...bgStyles,
        maxWidth: "98vw",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px",
        color: "#fff",
        transition: "all 0.3s ease-in-out",
        boxSizing: "border-box",
      }}
      className="parent"
    >
      <h2
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          textShadow: "2px 2px 10px rgba(0,0,0,0.3)",
        }}
      >
        Counter: {count}
      </h2>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            if (count > 0) {
              setCount((prev) => prev - 1);
            }
          }}
        >
          -
        </Button>
        <Button variant="contained" color="error" onClick={() => setCount(0)}>
          Reset
        </Button>
      </div>
    </animated.div>
  );
};

export default Counter;
