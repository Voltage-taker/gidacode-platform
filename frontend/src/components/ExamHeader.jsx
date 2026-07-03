/**
 * Header component - displays exam info, class, and timer
 */
export function ExamHeader({ examData, formattedTime, isWarning, isTimeUp }) {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '3px solid #2c3e50',
      paddingBottom: '15px',
      marginBottom: '25px',
      gap: '20px'
    }}>
      <div>
        <h2 style={{
          margin: '0 0 5px 0',
          color: '#2c3e50',
          fontSize: '24px'
        }}>
          {examData?.subject || 'Exam'}
        </h2>
        <span style={{
          color: '#7f8c8d',
          fontSize: '14px'
        }}>
          Class: {examData?.class || 'N/A'}
        </span>
      </div>

      <div style={{
        textAlign: 'right',
        minWidth: '150px'
      }}>
        <h3 style={{
          margin: '0 0 5px 0',
          color: isTimeUp ? '#c0392b' : isWarning ? '#e74c3c' : '#2c3e50',
          fontSize: '28px',
          fontWeight: 'bold',
          transition: 'color 0.3s'
        }}>
          {formattedTime}
        </h3>
        {isTimeUp && (
          <span style={{
            color: '#c0392b',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            Time's Up!
          </span>
        )}
        {isWarning && !isTimeUp && (
          <span style={{
            color: '#e74c3c',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            ⚠ 5 minutes left
          </span>
        )}
      </div>
    </header>
  );
}
