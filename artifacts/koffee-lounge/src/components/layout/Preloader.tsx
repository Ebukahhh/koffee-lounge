import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/hero.png";
import gallery1 from "../../assets/noodles.png";
import gallery2 from "../../assets/cocktails.png";
import gallery3 from "../../assets/breakfast.png";
import gallery4 from "../../assets/rice.png";
import gallery5 from "../../assets/savory.png";
import gallery6 from "../../assets/continental.png";

import allYouCanEatImg from "../../assets/all-you-can-eat.jpg";
import happyHourImg from "../../assets/happy-hour.jpg";
import cocktailsImg from "../../assets/cocktails.jpg";

const imagesToPreload = [
  heroImg,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  allYouCanEatImg,
  happyHourImg,
  cocktailsImg
];

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const total = imagesToPreload.length;

    if (total === 0) {
      setProgress(100);
      onComplete();
      return;
    }

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        const currentProgress = Math.round((loadedCount / total) * 100);
        setProgress(currentProgress);
        if (loadedCount === total) {
          setTimeout(() => {
            onComplete();
          }, 600); // smooth exit transition
        }
      };
      img.onerror = () => {
        // Handle error and proceed
        loadedCount++;
        const currentProgress = Math.round((loadedCount / total) * 100);
        setProgress(currentProgress);
        if (loadedCount === total) {
          setTimeout(() => {
            onComplete();
          }, 600);
        }
      };
    });
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center select-none"
    >
      <div className="flex flex-col items-center gap-6 max-w-xs w-full px-6">
        {/* Animated sizzling coffee cup */}
        <div className="relative w-24 h-24 mb-2">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none">
            {/* Sizzling steam animation */}
            <motion.path
              d="M 38 42 Q 35 32 40 25 T 38 10"
              stroke="#C9820A"
              strokeWidth="3"
              strokeLinecap="round"
              animate={{
                y: [0, -5, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.path
              d="M 50 40 Q 47 30 52 23 T 50 8"
              stroke="#C9820A"
              strokeWidth="4"
              strokeLinecap="round"
              animate={{
                y: [0, -7, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
            />
            <motion.path
              d="M 62 42 Q 59 32 64 25 T 62 10"
              stroke="#C9820A"
              strokeWidth="3"
              strokeLinecap="round"
              animate={{
                y: [0, -5, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
            />
            
            {/* Coffee Cup Body */}
            <path d="M 28 45 L 72 45 C 72 65 65 75 50 75 C 35 75 28 65 28 45 Z" fill="#E5A842" />
            
            {/* Cup Handle */}
            <path d="M 72 50 C 82 50 82 65 71 65" stroke="#E5A842" strokeWidth="5" strokeLinecap="round" />
            
            {/* Saucer/Plate */}
            <path d="M 20 80 L 80 80 C 80 85 75 87 50 87 C 25 87 20 85 20 80 Z" fill="#C9820A" />
          </svg>
        </div>

        {/* Loading text / Brand name */}
        <h2 className="text-2xl font-serif font-bold text-foreground tracking-wider uppercase">
          Koffee Lounge
        </h2>

        {/* Custom Progress Bar */}
        <div className="w-full h-1 bg-muted rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <span className="text-sm text-muted-foreground font-mono">{progress}%</span>
      </div>
    </motion.div>
  );
}
