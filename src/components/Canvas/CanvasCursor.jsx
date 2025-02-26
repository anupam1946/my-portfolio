
"use client";
import useCanvasCursor from "../../hooks/useCanvasCursor.jsx";


const CanvasCursor = () => {
  useCanvasCursor();

  return (
    <canvas
      className="pointer-events-none fixed inset-0"
      id="canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 10000, // Ensure the canvas is above other content
        pointerEvents: "none", // Allow clicks to pass through
      }}
    />
  );
};
export default CanvasCursor;
