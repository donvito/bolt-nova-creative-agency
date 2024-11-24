import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.215, 0.610, 0.355, 1.000], // Valid easing curve
    },
  }),
};

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-black"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-black/80" />
        <motion.div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1664575198308-3959904fa430?auto=format&fit=crop&q=80')] bg-cover bg-center"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="overflow-hidden"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              We Create
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Digital Experiences
              </span>
              That Matter
            </h1>
          </motion.div>
          
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl"
          >
            Transforming brands through innovative design, cutting-edge technology, 
            and strategic thinking that drives real results.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-[2px] rounded-full"
            >
              <div className="bg-black rounded-full px-8 py-4 transition group-hover:bg-transparent">
                <span className="flex items-center space-x-2 text-white">
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-2 h-2 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}