import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900 text-white flex flex-col items-center justify-center">
      {/* Interactive background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,128,255,0.3) 0%, rgba(0,0,0,0) 50%)`,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Building Block AI
        </h1>
        <h2 className="text-xl md:text-3xl max-w-3xl mx-auto leading-relaxed">
          Make AI the Building Block of Future Humanity
        </h2>
      </div>
    </div>
  );
};

export default LandingPage;
