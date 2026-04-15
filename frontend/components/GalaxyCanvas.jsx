import React, { useEffect, useRef } from "react";

export default function GalaxyCanvas() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 200 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.fillStyle = "white";
        ctx.fillRect(star.x, star.y, star.size, star.size);
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} className="galaxy" />;
}