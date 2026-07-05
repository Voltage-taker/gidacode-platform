<<<<<<< HEAD
import { useState } from 'react';
import examData from './examData.json';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = examData.questions[currentIndex];

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      
      <header style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '3px solid #2c3e50', paddingBottom: '10px', marginBottom: '20px' }}>
        <div>
          <h2 style={{ margin: 0, color: '#2c3e50' }}>{examData.subject}</h2>
          <span style={{ color: '#7f8c8d' }}>Class: {examData.class}</span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <h3 style={{ margin: 0, color: '#e74c3c' }}>Time Left: 60:00</h3>
        </div>
      </header>

      <main style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
        <h4 style={{ margin: '0 0 15px 0', color: '#34495e' }}>
          Question {currentIndex + 1} of {examData.questions.length}
        </h4>
        
        <p style={{ fontSize: '18px', fontWeight: 'bold', lineHeight: '1.5' }}>
          {currentQuestion.questionText}
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
          {currentQuestion.options.map((option, index) => (
            <label key={index} style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '6px', cursor: 'pointer', backgroundColor: '#fff', display: 'flex', alignItems: 'center' }}>
              <input type="radio" name="examOption" value={index} style={{ marginRight: '15px', transform: 'scale(1.2)' }} />
              {option}
            </label>
          ))}
        </div>
      </main>

=======
import { useState, useEffect } from 'react';
import examData from './examData.json';
import { useExamState } from './hooks/useExamState';
import { useTimer } from './hooks/useTimer';
import { useAnswerTracking } from './hooks/useAnswerTracking';
import { ExamHeader } from './components/ExamHeader';
import { QuestionCard } from './components/QuestionCard';
import { OptionList } from './components/OptionList';
import { NavigationButtons } from './components/NavigationButtons';
import { ResultsScreen } from './components/ResultsScreen';
import { validateExamData } from './utils/examUtils';
import './App.css';

function App() {
  // Validate exam data on load
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const validation = validateExamData(examData);
    if (!validation.valid) {
      setError(validation.error);
      console.error('Exam data validation failed:', validation.error);
    }
  }, []);

  // Initialize hooks
  const exam = useExamState(examData);
  const timer = useTimer(examData?.durationMinutes || 60);
  useAnswerTracking(exam.answers, examData?.examId || 'default');

  // Auto-submit if time is up
  useEffect(() => {
    if (timer.isTimeUp && !exam.isSubmitted) {
      exam.submit();
    }
  }, [timer.isTimeUp]);

  // Handle submission
  const handleSubmit = () => {
    console.log('Exam submitted with answers:', exam.answers);
    exam.submit();
  };

  // Handle retry
  const handleRetry = () => {
    window.location.reload();
  };

  // Show error screen if validation failed
  if (error) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '20px'
      }}>
        <div style={{
          maxWidth: '600px',
          padding: '40px',
          backgroundColor: 'white',
          borderRadius: '8px',
          border: '2px solid #e74c3c',
          textAlign: 'center'
        }}>
          <h1 style={{ color: '#e74c3c', marginBottom: '15px' }}>⚠️ Error</h1>
          <p style={{ fontSize: '16px', color: '#2c3e50', marginBottom: '20px' }}>
            {error}
          </p>
          <p style={{ fontSize: '14px', color: '#7f8c8d' }}>
            Please contact your administrator.
          </p>
        </div>
      </div>
    );
  }

  // Show results screen after submission
  if (exam.isSubmitted) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '20px'
      }}>
        <ResultsScreen
          examData={examData}
          answers={exam.answers}
          onRetry={handleRetry}
        />
      </div>
    );
  }

  // Show exam screen
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {/* Header with timer */}
        <ExamHeader
          examData={examData}
          formattedTime={timer.formattedTime}
          isWarning={timer.isWarning}
          isTimeUp={timer.isTimeUp}
        />

        {/* Question display */}
        {exam.currentQuestion && (
          <>
            <QuestionCard
              questionNumber={exam.currentIndex + 1}
              totalQuestions={exam.totalQuestions}
              questionText={exam.currentQuestion.questionText}
              progress={exam.progress}
            />

            {/* Answer options */}
            <OptionList
              options={exam.currentQuestion.options}
              selectedAnswerIndex={exam.answers[exam.currentIndex]}
              onSelectAnswer={exam.selectAnswer}
            />

            {/* Navigation controls */}
            <NavigationButtons
              isFirstQuestion={!exam.canGoPrevious}
              isLastQuestion={!exam.canGoNext}
              onPrevious={exam.goToPrevious}
              onNext={exam.goToNext}
              onSubmit={handleSubmit}
              isAnswered={exam.isAnswered}
            />
          </>
        )}

        {/* Time warning message */}
        {timer.isTimeUp && (
          <div style={{
            marginTop: '20px',
            padding: '15px',
            backgroundColor: '#fadbd8',
            border: '2px solid #e74c3c',
            borderRadius: '6px',
            textAlign: 'center',
            color: '#c0392b',
            fontWeight: 'bold'
          }}>
            ⏰ Time is up! Your exam will be submitted automatically.
          </div>
        )}
      </div>
>>>>>>> 2b4a3ecd7bab01b51b12b14cf775f5e42a1ba851
    </div>
  );
}

export default App;
<<<<<<< HEAD

=======
>>>>>>> 2b4a3ecd7bab01b51b12b14cf775f5e42a1ba851
