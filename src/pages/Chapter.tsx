import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Fireflies from '../components/Fireflies';

const Chapter = () => {
  const { id } = useParams();
  const pages = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-cover bg-center p-8 relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <Fireflies />
      
      <Link
        to="/"
        className="fixed top-4 left-4 z-20 bg-white/90 p-2 rounded-full hover:scale-110 transition-transform"
      >
        <Home className="w-6 h-6 text-purple-800" />
      </Link>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl text-white text-center mb-12 font-serif">
          Chapter {id}
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {pages.map((page) => (
            <Link
              key={page}
              to={`/chapter/${id}/page/${page}`}
              className="block"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/90 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h2 className="text-xl text-purple-900 font-serif text-center">
                  Page {page}
                </h2>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Chapter;