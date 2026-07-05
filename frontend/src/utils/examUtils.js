/**
 * Utility functions for exam operations
 */

/**
 * Calculate exam score
 */
export function calculateScore(answers, questions) {
  if (!answers || !questions || questions.length === 0) {
    return { correct: 0, total: 0, percentage: 0 };
  }

  let correct = 0;
  questions.forEach((question, index) => {
    if (answers[index] === question.correctAnswerIndex) {
      correct++;
    }
  });

  const total = questions.length;
  const percentage = Math.round((correct / total) * 100);

  return { correct, total, percentage };
}

/**
 * Format time remaining in MM:SS format
 */
export function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Check if exam data is valid
 */
export function validateExamData(examData) {
  if (!examData) return { valid: false, error: 'Exam data is missing' };
  if (!Array.isArray(examData.questions)) return { valid: false, error: 'Questions array is missing' };
  if (examData.questions.length === 0) return { valid: false, error: 'No questions found' };

  for (let i = 0; i < examData.questions.length; i++) {
    const q = examData.questions[i];
    if (!q.questionText) return { valid: false, error: `Question ${i + 1} is missing text` };
    if (!Array.isArray(q.options) || q.options.length === 0) {
      return { valid: false, error: `Question ${i + 1} has no options` };
    }
    if (q.correctAnswerIndex === undefined) {
      return { valid: false, error: `Question ${i + 1} has no correct answer` };
    }
  }

  return { valid: true };
}

/**
 * Get exam by ID from exam data collection
 */
export function getExamById(examsCollection, examId) {
  if (!examsCollection || !examsCollection[examId]) {
    return null;
  }
  return examsCollection[examId];
}

/**
 * Load answers from localStorage
 */
export function loadAnswersFromStorage(examId) {
  try {
    const key = `exam_answers_${examId}`;
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.error('Failed to load answers from storage:', error);
    return {};
  }
}

/**
 * Check if browser supports localStorage
 */
export function isLocalStorageAvailable() {
  try {
    const test = '__test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}
