"use client";

import { useMobile } from "@/hooks/use-mobile";
import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isMobile = useMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    const numberOfParticles = 75;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesArray = [];
      init();
    });

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = "rgba(249, 115, 22, 0.6)";
      }
      draw() {
        if (ctx) {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        }
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas!.width) {
          this.speedX = -this.speedX;
        }
        if (this.y < 0 || this.y > canvas!.height) {
          this.speedY = -this.speedY;
        }
        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas!.width;
        const y = Math.random() * canvas!.height;
        particlesArray.push(new Particle(x, y));
      }
    }

    function animate() {
      if (ctx) {
        ctx.clearRect(0, 0, canvas!.width, canvas!.height);
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i]?.update?.();
        }
        requestAnimationFrame(animate);
      }
    }

    init();
    animate();
  }, []);

  return (
    <>
      {!isMobile && (
        <canvas
          ref={canvasRef}
          style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
        />
      )}
    </>
  );
};

export default ParticleBackground;
