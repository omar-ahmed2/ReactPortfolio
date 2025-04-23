import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type SkillBarProps = {
  name: string;
  percentage: number;
  color: string;
  delay?: number;
};

const SkillBar = ({ name, percentage, color, delay = 0 }: SkillBarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-gray-400 text-sm">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percentage}%` : 0 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut", 
            delay: delay / 1000 
          }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  );
};

export default SkillBar;