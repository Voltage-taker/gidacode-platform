import { useState, useEffect } from 'react';

/**
 * Custom hook for countdown timer
 * Handles: time countdown, formatting, alerts
 */
export function useTimer(durationMinutes) {
  const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);
  const [isWarning, setIsWarning] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    if (isTimeUp) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev - 1;
        
        // Check if time is up
        if (newTime <= 0) {
          setIsTimeUp(true);
          return 0;
        }

        // Check if warning time (5 minutes or less)
        if (newTime <= 300) {
          setIsWarning(true);
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimeUp]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return {
    timeLeft,
    formattedTime: formatTime(timeLeft),
    isWarning,
    isTimeUp,
    resetTimer: () => {
      setTimeLeft(durationMinutes * 60);
      setIsWarning(false);
      setIsTimeUp(false);
    }
  };
}
