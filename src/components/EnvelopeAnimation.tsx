import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import envelopeImg from '@/assets/envelope_1.png';
import logoStamp from '@/assets/logo_stamp.png';
import background1 from '@/assets/background_1.png';

interface EnvelopeAnimationProps {
  onComplete: () => void;
}

const EnvelopeAnimation = ({ onComplete }: EnvelopeAnimationProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (!isOpening) {
      setIsOpening(true);
      setTimeout(() => {
        onComplete();
      }, 2500);
    }
  };

  // Floating hearts positions
 

  return (
  <div 
  className="fixed inset-0 flex items-center justify-center cursor-pointer overflow-hidden bg-white outline-none ring-0 shadow-none focus:outline-none focus:ring-0"
  onClick={handleClick}
  style={{ outline: 'none', boxShadow: 'none' }}
>

      

      {/* Envelope Container */}
      <div className="relative w-[85vw] max-w-[450px] md:max-w-[500px] outline-none shadow-none" style={{ perspective: '1500px', outline: 'none', boxShadow: 'none' }}>
        
        {/* Envelope with Flap as single unit */}
        <motion.div
          className="relative w-full outline-none shadow-none overflow-hidden"
          animate={isOpening ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main envelope body — cropped to hide blue shadow at edges */}
          <div className="relative w-full">
            <img 
              src={envelopeImg} 
              alt="Envelope" 
              className="w-full h-auto outline-none shadow-none block"
              style={{ 
                outline: 'none', 
                boxShadow: 'none', 
                filter: 'none',
                clipPath: 'inset(3% 2% 8% 5%)',
              }}
            />
            {/* Blur overlay for top area where logo overlaps */}
            <div 
              className="absolute top-0 left-0 right-0 h-[25%] pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(255, 240, 245, 0.3) 0%, transparent 100%)',
                filter: 'blur(2px)',
              }}
            />
          </div>
          
          {/* Wax Seal - positioned on the envelope flap */}
          <motion.div
            className="absolute w-20 h-20 md:w-28 md:h-28 z-30"
            style={{
              top: '37%',
              left: '40%',
              transform: 'translateX(-50%)',
            }}
            animate={isOpening ? {
              scale: [1, 1.3, 0],
              opacity: [1, 1, 0],
              y: [0, -30, -80],
              rotate: [0, 10, -20],
            } : {
              scale: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            whileHover={!isOpening ? { 
              scale: 1.15,
            } : {}}
          >
            <motion.img 
              src={logoStamp} 
              alt="Wax Seal" 
              className="w-full h-full object-contain"
              style={{
                filter: 'drop-shadow(0 4px 12px rgba(180, 140, 60, 0.5))',
              }}
              animate={!isOpening ? {
                filter: [
                  "drop-shadow(0 4px 12px rgba(180, 140, 60, 0.4))",
                  "drop-shadow(0 4px 25px rgba(212, 168, 85, 0.7))",
                  "drop-shadow(0 4px 12px rgba(180, 140, 60, 0.4))",
                ],
              } : {}}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Click hint text */}
        <AnimatePresence>
          {!isOpening && (
            <motion.p
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-primary font-lora text-sm tracking-wide whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              Click to open
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Fade out overlay — cream/ivory to match wedding theme (no blue) */}
      <AnimatePresence>
        {isOpening && (
          <motion.div
            className="fixed inset-0 z-50"
            style={{ backgroundColor: 'hsl(40, 40%, 96%)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnvelopeAnimation;
