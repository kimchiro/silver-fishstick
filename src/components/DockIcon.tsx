"use client"

import { useState } from "react";
import { motion } from "framer-motion";

interface DockIconProps {
  icon: string;
  label: string;
  onClick: () => void;
  gradient?: string;
}

export function DockIcon({ icon, label, onClick, gradient }: DockIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.5, y: -8 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm whitespace-nowrap z-50"
        >
          {label}
        </motion.div>
      )}
      <motion.button
        onClick={onClick}
        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
        style={{
          background: gradient || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-2xl">{icon}</span>
      </motion.button>
    </motion.div>
  );
}