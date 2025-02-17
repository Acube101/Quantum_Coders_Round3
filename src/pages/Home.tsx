import React from 'react';
import { motion } from 'framer-motion';
import RotatingIcons from '../components/RotatingIcons';
import Fireflies from '../components/Fireflies';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <Fireflies />
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl text-white text-center mb-12 font-serif">
          The Magical Journey Begins
        </h1>
        <RotatingIcons />
      </div>
    </motion.div>
  );
};

export default Home;