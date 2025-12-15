import { motion } from "framer-motion";
import logo from '../assets/images/dealo-logo.png';
import { useState, useEffect } from "react";

const Preloader = ({ onComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Progressive loading simulation
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setLoadingComplete(true);
          
          // Call onComplete callback after animation finishes
          setTimeout(() => {
            onComplete && onComplete();
          }, 800); // Delay to let the final transition complete
          
          return 100;
        }
        
        // Simulate realistic loading with varying speeds
        const increment = Math.random() * 15 + 2; // Random increment between 2-17
        return Math.min(prev + increment, 100);
      });
    }, 150); // Update every 150ms for smooth progression

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  // Calculate grayscale percentage (100% grayscale at start, 0% when complete)
  const grayscaleValue = Math.max(0, 100 - loadingProgress);
  
  // Calculate brightness for color intensity (starts dim, gets brighter)
  const brightnessValue = 0.5 + (loadingProgress / 100) * 0.5; // 50% to 100% brightness

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: loadingComplete ? 0 : 1 }}
      transition={{ 
        duration: 0.3, 
        ease: "easeOut",
        delay: loadingComplete ? 0.5 : 0 
      }}
      className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center"
    >
      {/* Logo with dynamic grayscale transition */}
      <motion.img
        src={logo}
        alt="Logo"
        className="w-32 h-32 mb-6 object-contain"
        style={{
          filter: `grayscale(${grayscaleValue}%) brightness(${brightnessValue})`,
          transition: 'filter 0.1s ease-out'
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut"
        }}
      />
    </motion.div>
  );
};

export default Preloader;