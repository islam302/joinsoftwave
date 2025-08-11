import React, { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star class
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.twinkleSpeed = Math.random() * 0.02 + 0.01;
        this.twinklePhase = Math.random() * Math.PI * 2;
      }

      update() {
        // Move stars slowly
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Twinkle effect
        this.twinklePhase += this.twinkleSpeed;
        this.opacity = Math.sin(this.twinklePhase) * 0.3 + 0.5;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Create star shape
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = this.size * 2;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Shooting star class
    class ShootingStar {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.speedX = (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1);
        this.speedY = Math.random() * 2 + 1;
        this.size = Math.random() * 3 + 1;
        this.opacity = 1;
        this.trail = [];
        this.maxTrailLength = 20;
      }

      update() {
        // Add current position to trail
        this.trail.push({ x: this.x, y: this.y, opacity: this.opacity });
        
        // Limit trail length
        if (this.trail.length > this.maxTrailLength) {
          this.trail.shift();
        }

        // Update position
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Fade out
        this.opacity -= 0.01;

        // Remove if off screen or faded out
        return this.x < 0 || this.x > canvas.width || this.y > canvas.height || this.opacity <= 0;
      }

      draw() {
        ctx.save();
        
        // Draw trail
        this.trail.forEach((point, index) => {
          const trailOpacity = (index / this.trail.length) * this.opacity;
          ctx.globalAlpha = trailOpacity;
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = '#ffffff';
          ctx.shadowBlur = this.size;
          
          ctx.beginPath();
          ctx.arc(point.x, point.y, this.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        });
        
        ctx.restore();
      }
    }

    // Create stars
    const stars = [];
    const numStars = 200;
    const shootingStars = [];
    let shootingStarTimer = 0;

    for (let i = 0; i < numStars; i++) {
      stars.push(new Star());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(14, 42, 71, 0.8)');
      gradient.addColorStop(0.5, 'rgba(17, 47, 84, 0.6)');
      gradient.addColorStop(1, 'rgba(11, 34, 58, 0.8)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw stars
      stars.forEach(star => {
        star.update();
        star.draw();
      });

      // Update and draw shooting stars
      shootingStars.forEach((shootingStar, index) => {
        const shouldRemove = shootingStar.update();
        if (shouldRemove) {
          shootingStars.splice(index, 1);
        } else {
          shootingStar.draw();
        }
      });

      // Add new shooting star occasionally
      shootingStarTimer++;
      if (shootingStarTimer > 200 && Math.random() < 0.02) {
        shootingStars.push(new ShootingStar());
        shootingStarTimer = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default StarryBackground;
