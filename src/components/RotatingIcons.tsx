import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Book, Home, BookOpen, Scroll } from 'lucide-react';

const RotatingIcons = () => {
  const icons = [
    { Icon: Home, path: '/', label: 'Home' },
    { Icon: Book, path: '/about', label: 'Story' },
    { Icon: BookOpen, path: '/chapter/1', label: 'Chapter 1' },
    { Icon: BookOpen, path: '/chapter/2', label: 'Chapter 2' },
    { Icon: BookOpen, path: '/chapter/3', label: 'Chapter 3' },
    { Icon: Scroll, path: '/chapter/4', label: 'Chapter 4' },
  ];

  return (
    <div className="relative w-80 h-80">
      {icons.map((icon, index) => {
        const angle = (index * 360) / icons.length;
        const radius = 120;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{
              x,
              y,
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Link
              to={icon.path}
              className="flex flex-col items-center justify-center w-16 h-16 bg-white/90 rounded-full shadow-lg hover:scale-110 transition-transform"
            >
              <icon.Icon className="w-8 h-8 text-purple-800" />
              <span className="text-xs mt-1 text-purple-900">{icon.label}</span>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default RotatingIcons;