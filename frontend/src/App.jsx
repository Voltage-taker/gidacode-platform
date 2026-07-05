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

    </div>
  );
}

export default App;

