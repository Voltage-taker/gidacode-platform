import { useState, useEffect } from 'react';

/**
 * Custom hook for localStorage persistence
 * Auto-saves answers to localStorage
 */
export function useAnswerTracking(answers, examId) {
  const STORAGE_KEY = `exam_answers_${examId}`;

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        // Initialize answers from localStorage if needed
        console.log('Loaded saved answers:', saved);
      }
    } catch (error) {
      console.error('Failed to load from localStorage:', error);
    }
  }, [STORAGE_KEY]);

  // Save to localStorage whenever answers change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
      console.log('Auto-saved answers to localStorage');
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  }, [answers, STORAGE_KEY]);

  const clearSavedAnswers = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear localStorage:', error);
    }
  };

  return {
    clearSavedAnswers
  };
}
