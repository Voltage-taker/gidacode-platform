import { useState, useEffect } from 'react';

/**
 * Custom hook to manage exam state
 * Handles: current question, answers, navigation
 */
export function useExamState(examData) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = examData?.questions?.[currentIndex];
  const totalQuestions = examData?.questions?.length || 0;
  const progress = totalQuestions > 0 ? ((currentIndex + 1) / totalQuestions) * 100 : 0;

  const goToNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const selectAnswer = (optionIndex) => {
    setAnswers(prev => ({
      ...prev,
      [currentIndex]: optionIndex
    }));
  };

  const submit = () => {
    setIsSubmitted(true);
  };

  const canGoNext = currentIndex < totalQuestions - 1;
  const canGoPrevious = currentIndex > 0;
  const isAnswered = answers[currentIndex] !== undefined;

  return {
    // State
    currentIndex,
    currentQuestion,
    answers,
    isSubmitted,
    progress,
    
    // Metadata
    totalQuestions,
    isAnswered,
    canGoNext,
    canGoPrevious,
    
    // Actions
    goToNext,
    goToPrevious,
    selectAnswer,
    submit,
    setCurrentIndex // for jumping to specific question
  };
}
