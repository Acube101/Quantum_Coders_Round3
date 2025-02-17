import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Fireflies from '../components/Fireflies';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-cover bg-center p-8 relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1512552288940-3a300922a275?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
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

      <div className="relative z-10 max-w-4xl mx-auto text-white">
        <h1 className="text-4xl md:text-6xl text-center mb-12 font-serif">
          About the Story
        </h1>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-black/40 p-8 rounded-lg"
        >
          <p className="text-lg mb-6">
            Welcome to a magical journey through the halls of Hogwarts School of
            Witchcraft and Wizardry. This interactive story follows the adventures
            of young witches and wizards as they learn to master their magical
            abilities and face their greatest fears.
          </p>
          
          <p className="text-lg mb-6">
            Through four exciting chapters, you'll experience the wonder and
            challenges of magical education, from confronting boggarts in Defense
            Against the Dark Arts to mastering new spells and making lifelong
            friendships.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 p-6 rounded-lg"
            >
              <h3 className="text-xl mb-4 font-serif">Magical Classes</h3>
              <p>
                Experience the thrill of learning magic firsthand through
                interactive lessons and challenges.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 p-6 rounded-lg"
            >
              <h3 className="text-xl mb-4 font-serif">Character Growth</h3>
              <p>
                Watch as students develop their magical abilities and overcome
                their personal fears and challenges.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;