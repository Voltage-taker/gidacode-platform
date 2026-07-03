/**
 * Question card component - displays the current question
 */
export function QuestionCard({ questionNumber, totalQuestions, questionText, progress }) {
  return (
    <div style={{
      backgroundColor: '#f9f9f9',
      padding: '25px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      marginBottom: '25px'
    }}>
      {/* Progress indicator */}
      <div style={{
        marginBottom: '15px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px',
          fontSize: '14px',
          color: '#34495e'
        }}>
          <span>Question {questionNumber} of {totalQuestions}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div style={{
          width: '100%',
          height: '6px',
          backgroundColor: '#ecf0f1',
          borderRadius: '3px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: '#3498db',
            transition: 'width 0.3s ease'
          }} />
        </div>
      </div>

      {/* Question text */}
      <h3 style={{
        margin: '20px 0 0 0',
        color: '#34495e',
        fontSize: '18px',
        fontWeight: 'bold',
        lineHeight: '1.6'
      }}>
        {questionText}
      </h3>
    </div>
  );
}
