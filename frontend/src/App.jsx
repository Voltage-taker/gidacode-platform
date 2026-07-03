import { useState, useEffect } from 'react';
import examData from './examData.json';
import './App.css';

function App() {
  // Track which question the student is currently on
  const [currentIndex, setCurrentIndex] = useState(0);
  // Track student's selected answer for each question
  const [answers, setAnswers] = useState({});
  // Track countdown timer
  const [timeLeft, setTimeLeft] = useState(examData.durationMinutes * 60);

  const currentQuestion = examData.questions[currentIndex];

  // Timer countdown effect
  useEffect(() => {
    if (timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle answer selection
  const handleAnswerChange = (optionIndex) => {
    setAnswers({
      ...answers,
      [currentIndex]: optionIndex
    });
  };

  // Navigate to next question
  const handleNext = () => {
    if (currentIndex < examData.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Navigate to previous question
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Submit exam
  const handleSubmit = () => {
    console.log('Submitted answers:', answers);
    alert('Exam submitted! Check console for answers.');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '3px solid #2c3e50', paddingBottom: '10px', marginBottom: '20px' }}>
        <div>
          <h2 style={{ margin: 0, color: '#2c3e50' }}>{examData.subject}</h2>
          <span style={{ color: '#7f8c8d' }}>Class: {examData.class}</span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <h3 style={{ margin: 0, color: timeLeft <= 300 ? '#e74c3c' : '#2c3e50' }}>
            Time Left: {formatTime(timeLeft)}
          </h3>
        </div>
      </header>

      {/* Question Area */}
      <main style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
        <h4 style={{ margin: '0 0 15px 0', color: '#34495e' }}>
          Question {currentIndex + 1} of {examData.questions.length}
        </h4>
        
        <p style={{ fontSize: '18px', fontWeight: 'bold', lineHeight: '1.5' }}>
          {currentQuestion.questionText}
        </p>
        
        {/* Options */}
        <fieldset style={{ border: 'none', padding: 0, margin: '20px 0' }}>
          <legend style={{ display: 'none' }}>Answer options</legend>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {currentQuestion.options.map((option, index) => (
              <label 
                key={index} 
                style={{ 
                  padding: '12px', 
                  border: answers[currentIndex] === index ? '2px solid #3498db' : '1px solid #ccc', 
                  borderRadius: '6px', 
                  cursor: 'pointer', 
                  backgroundColor: answers[currentIndex] === index ? '#ecf0f1' : '#fff', 
                  display: 'flex', 
                  alignItems: 'center',
                  transition: 'all 0.2s'
                }}
              >
                <input 
                  type="radio" 
                  name={`question-${currentIndex}`}
                  value={index} 
                  checked={answers[currentIndex] === index}
                  onChange={() => handleAnswerChange(index)}
                  style={{ marginRight: '15px', transform: 'scale(1.2)', cursor: 'pointer' }} 
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>
      </main>

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px', gap: '10px' }}>
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          style={{
            padding: '10px 20px',
            backgroundColor: currentIndex === 0 ? '#bdc3c7' : '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Previous
        </button>

        <div style={{ display: 'flex', gap: '10px' }}>
          {currentIndex < examData.questions.length - 1 && (
            <button
              onClick={handleNext}
              style={{
                padding: '10px 20px',
                backgroundColor: '#27ae60',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              Next
            </button>
          )}
          
          {currentIndex === examData.questions.length - 1 && (
            <button
              onClick={handleSubmit}
              style={{
                padding: '10px 20px',
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              Submit Exam
            </button>
          )}
        </div>
      </div>

    </div>
  );
}

export default App;
