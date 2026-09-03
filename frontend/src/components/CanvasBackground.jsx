import React, { useRef, useEffect } from 'react';

const PALETTE_COLORS = [
    'rgba(172, 210, 237, ',  // Sky Frost Blue #ACD2ED
    'rgba(225, 226, 137, ',  // Pale Lime Cream #E1E289
    'rgba(153, 170, 56, ',   // Moss Green #99AA38
    'rgba(20, 89, 29, ',     // Forest Green #14591D
    'rgba(100, 180, 240, ',  // Luminous Cyan
];

const CanvasBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        // Mouse tracking
        const mouse = { x: -1000, y: -1000, radius: 140 };
        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Particles with exact palette colors
        const count = Math.min(Math.floor((width * height) / 12000), 85);
        const particles = [];

        for (let i = 0; i < count; i++) {
            const colorBase = PALETTE_COLORS[Math.floor(Math.random() * PALETTE_COLORS.length)];
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.45,
                vy: (Math.random() - 0.5) * 0.45,
                radius: Math.random() * 1.8 + 0.9,
                baseAlpha: Math.random() * 0.55 + 0.35,
                colorBase: colorBase,
            });
        }

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Update and draw particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Base motion
                p.x += p.vx;
                p.y += p.vy;

                // Screen bounce/wrap
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                // Mouse interaction
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    p.x -= Math.cos(angle) * force * 2.2;
                    p.y -= Math.sin(angle) * force * 2.2;
                }

                // Draw Particle with Glow
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `${p.colorBase}${p.baseAlpha})`;
                ctx.shadowColor = `${p.colorBase}0.8)`;
                ctx.shadowBlur = 6;
                ctx.fill();
                ctx.shadowBlur = 0;

                // Draw constellation lines with pale lime & sky tones
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const distX = p.x - p2.x;
                    const distY = p.y - p2.y;
                    const d = Math.sqrt(distX * distX + distY * distY);

                    if (d < 115) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(225, 226, 137, ${0.18 * (1 - d / 115)})`;
                        ctx.lineWidth = 0.65;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none w-full h-full"
        />
    );
};

export default CanvasBackground;
