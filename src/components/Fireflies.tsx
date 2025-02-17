import React from 'react';
import { motion } from 'framer-motion';

const Fireflies = () => {
  const fireflies = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {fireflies.map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-60"
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default Fireflies;