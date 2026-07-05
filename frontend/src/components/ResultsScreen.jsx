import { calculateScore } from '../utils/examUtils';

/**
 * Results screen shown after exam submission
 */
export function ResultsScreen({ examData, answers, onRetry }) {
  const { correct, total, percentage } = calculateScore(answers, examData?.questions);

  const getPerformanceMessage = () => {
    if (percentage === 100) return '🌟 Perfect Score!';
    if (percentage >= 80) return '🎉 Excellent!';
    if (percentage >= 60) return '👍 Good!';
    if (percentage >= 40) return '📚 Fair';
    return '💪 Keep practicing!';
  };

  const getPerformanceColor = () => {
    if (percentage >= 80) return '#27ae60';
    if (percentage >= 60) return '#3498db';
    if (percentage >= 40) return '#f39c12';
    return '#e74c3c';
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '60px auto',
      padding: '40px',
      backgroundColor: '#f9f9f9',
      borderRadius: '12px',
      border: '2px solid #ecf0f1',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '32px',
        color: '#2c3e50',
        marginBottom: '10px'
      }}>
        Exam Completed!
      </h1>

      <p style={{
        fontSize: '18px',
        color: '#7f8c8d',
        marginBottom: '30px'
      }}>
        {examData?.subject || 'Exam'} - {examData?.class || 'Class'}
      </p>

      {/* Score Circle */}
      <div style={{
        width: '180px',
        height: '180px',
        borderRadius: '50%',
        backgroundColor: getPerformanceColor(),
        margin: '0 auto 30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: `0 4px 15px rgba(0,0,0,0.1)`
      }}>
        <div style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '5px'
        }}>
          {percentage}%
        </div>
        <div style={{
          fontSize: '14px',
          color: 'rgba(255,255,255,0.9)'
        }}>
          {correct} of {total} correct
        </div>
      </div>

      <h2 style={{
        fontSize: '24px',
        color: getPerformanceColor(),
        marginBottom: '30px',
        fontWeight: 'bold'
      }}>
        {getPerformanceMessage()}
      </h2>

      {/* Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <div style={{
          padding: '15px',
          backgroundColor: 'white',
          borderRadius: '8px',
          border: '1px solid #ecf0f1'
        }}>
          <div style={{ fontSize: '12px', color: '#7f8c8d', marginBottom: '5px' }}>Correct</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#27ae60' }}>{correct}</div>
        </div>
        <div style={{
          padding: '15px',
          backgroundColor: 'white',
          borderRadius: '8px',
          border: '1px solid #ecf0f1'
        }}>
          <div style={{ fontSize: '12px', color: '#7f8c8d', marginBottom: '5px' }}>Wrong</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#e74c3c' }}>{total - correct}</div>
        </div>
        <div style={{
          padding: '15px',
          backgroundColor: 'white',
          borderRadius: '8px',
          border: '1px solid #ecf0f1'
        }}>
          <div style={{ fontSize: '12px', color: '#7f8c8d', marginBottom: '5px' }}>Total</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2c3e50' }}>{total}</div>
        </div>
      </div>

      {/* Retry Button */}
      <button
        onClick={onRetry}
        style={{
          padding: '12px 32px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#2980b9';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#3498db';
        }}
      >
        Try Again
      </button>
    </div>
  );
}
