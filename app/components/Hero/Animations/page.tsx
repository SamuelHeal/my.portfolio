import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

// 1. Typing Text Hero
const TypingHero: React.FC = () => {
  const [text, setText] = useState("");
  const phrases = [
    "Creative Developer",
    "Design Innovator",
    "Tech Storyteller",
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentPhrase = phrases[phraseIndex];
      if (text.length < currentPhrase.length) {
        setText((prev) => currentPhrase.slice(0, prev.length + 1));
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setText("");
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [phraseIndex, text]);

  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-black to-gray-800 text-white">
      <h1 className="text-4xl font-bold">
        {text}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="inline-block ml-1 w-2 h-6 bg-white"
        />
      </h1>
    </div>
  );
};

// 2. Parallax Text Hero
const ParallaxTextHero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="h-full bg-black text-white flex items-center justify-center overflow-hidden"
    >
      <motion.h1
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${
            mousePosition.y * 20
          }px)`,
        }}
        className="text-6xl font-bold"
      >
        PARALLAX
      </motion.h1>
    </div>
  );
};

// 3. Particle Text Hero
const ParticleTextHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<string[]>(["CREATIVE", "DEVELOPER"]);
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const createParticles = () => {
      const text =
        textRef.current[Math.floor(Math.random() * textRef.current.length)];
      ctx.font = "bold 120px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const particles: any[] = [];
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, "white");
      gradient.addColorStop(1, "gray");

      ctx.fillStyle = gradient;
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let y = 0; y < canvas.height; y += 5) {
        for (let x = 0; x < canvas.width; x += 5) {
          const index = (y * canvas.width + x) * 4;
          const alpha = data[index + 3];
          if (alpha > 0) {
            particles.push({
              x: x,
              y: y,
              color: `rgba(255,255,255,${alpha / 255})`,
              baseX: x,
              baseY: y,
              density: Math.random() * 30 + 1,
            });
          }
        }
      }

      return particles;
    };

    let particleArray = createParticles();
    setParticles(particleArray);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particleArray.forEach((particle, index) => {
        particle.x += (particle.baseX - particle.x) * 0.05;
        particle.y += (particle.baseY - particle.y) * 0.05;

        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      const animationId = requestAnimationFrame(animate);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="h-full bg-black relative">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

// 4. Animated Grid Hero
const AnimatedGridHero: React.FC = () => {
  const [grid, setGrid] = useState(
    Array(20)
      .fill(0)
      .map(() =>
        Array(20)
          .fill(0)
          .map(() => Math.random() > 0.7)
      )
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid((prevGrid) =>
        prevGrid.map((row) => row.map((cell) => Math.random() > 0.7))
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full bg-black flex items-center justify-center">
      <div className="grid grid-cols-20 gap-1 w-full max-w-2xl">
        {grid.flat().map((isActive, index) => (
          <div
            key={index}
            className={`w-full aspect-square ${
              isActive ? "bg-white" : "bg-gray-900"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// 5. Interactive Blob Hero
const InteractiveBlobHero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <svg
      ref={svgRef}
      onMouseMove={handleMouseMove}
      className="h-full w-full bg-black"
      viewBox="0 0 400 400"
    >
      <defs>
        <filter id="blobFilter">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>
      <motion.circle
        cx={200 + (mousePos.x - 200) / 10}
        cy={200 + (mousePos.y - 200) / 10}
        r="100"
        fill="white"
        filter="url(#blobFilter)"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </svg>
  );
};

// 6. Scroll Reveal Hero
const ScrollRevealHero: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / maxHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[200vh] bg-black">
      <div className="sticky top-0 h-screen bg-gradient-to-r from-black to-gray-900 flex items-center justify-center">
        <motion.h1
          style={{
            opacity: 1 - scrollProgress / 100,
            transform: `scale(${1 - scrollProgress / 200})`,
          }}
          className="text-6xl font-bold text-white"
        >
          SCROLL ME
        </motion.h1>
      </div>
    </div>
  );
};

// 7. Glitch Text Hero
const GlitchTextHero: React.FC = () => {
  return (
    <div className="h-full bg-black flex items-center justify-center relative overflow-hidden">
      <h1 className="text-6xl font-bold text-white relative z-10">GLITCH</h1>
      <div className="absolute inset-0 glitch-effect pointer-events-none" />
    </div>
  );
};

// 8. Geometric Shapes Hero
const GeometricShapesHero: React.FC = () => {
  const shapes = [
    { type: "circle", size: 100, x: 100, y: 100 },
    { type: "rect", size: 150, x: 250, y: 200 },
    { type: "triangle", size: 80, x: 400, y: 50 },
  ];

  return (
    <svg className="h-full w-full bg-black" viewBox="0 0 500 400">
      {shapes.map((shape, index) => {
        switch (shape.type) {
          case "circle":
            return (
              <motion.circle
                key={index}
                cx={shape.x}
                cy={shape.y}
                r={shape.size / 2}
                fill="white"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            );
          case "rect":
            return (
              <motion.rect
                key={index}
                x={shape.x - shape.size / 2}
                y={shape.y - shape.size / 2}
                width={shape.size}
                height={shape.size}
                fill="white"
                animate={{
                  rotate: [0, 180, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
            );
          case "triangle":
            return (
              <motion.polygon
                key={index}
                points={`${shape.x},${shape.y - shape.size / 2} ${
                  shape.x - shape.size / 2
                },${shape.y + shape.size / 2} ${shape.x + shape.size / 2},${
                  shape.y + shape.size / 2
                }`}
                fill="white"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -180, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            );
        }
      })}
    </svg>
  );
};

// 9. Wave Text Hero
const WaveTextHero: React.FC = () => {
  const text = "CREATIVE DEVELOPER".split("");

  return (
    <div className="h-full bg-black flex items-center justify-center">
      <div className="text-6xl font-bold">
        {text.map((char, index) => (
          <motion.span
            key={index}
            className="inline-block text-white"
            animate={{
              y: [0, -20, 0],
              transition: {
                delay: index * 0.1,
                duration: 1,
                repeat: Infinity,
              },
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

// 10. Distortion Hero
const DistortionHero: React.FC = () => {
  return (
    <svg className="h-full w-full bg-black" viewBox="0 0 500 400">
      <filter id="displacementFilter">
        <feTurbulence
          type="turbulence"
          baseFrequency="0.05"
          numOctaves="2"
          result="turbulence"
        />
        <feDisplacementMap
          in2="turbulence"
          in="SourceGraphic"
          scale="20"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        fill="white"
        fontSize="80"
        fontWeight="bold"
        filter="url(#displacementFilter)"
      >
        DISTORT
      </text>
    </svg>
  );
};

// Main Hero Animations Component
const HeroAnimations: React.FC = () => {
  const heroComponents = [
    TypingHero,
    ParallaxTextHero,
    ParticleTextHero,
    AnimatedGridHero,
    InteractiveBlobHero,
    ScrollRevealHero,
    GlitchTextHero,
    GeometricShapesHero,
    WaveTextHero,
    DistortionHero,
    // More can be added to complete the 20
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {heroComponents.map((HeroComponent, index) => (
        <div
          key={index}
          className="aspect-video border border-gray-200 rounded-lg overflow-hidden"
        >
          <HeroComponent />
        </div>
      ))}
    </div>
  );
};
