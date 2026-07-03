/**
 * Navigation buttons component - Previous, Next, Submit
 */
export function NavigationButtons({
  isFirstQuestion,
  isLastQuestion,
  onPrevious,
  onNext,
  onSubmit,
  isAnswered
}) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '30px',
      gap: '12px',
      flexWrap: 'wrap'
    }}>
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={isFirstQuestion}
        style={{
          padding: '12px 24px',
          backgroundColor: isFirstQuestion ? '#bdc3c7' : '#95a5a6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: isFirstQuestion ? 'not-allowed' : 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s',
          opacity: isFirstQuestion ? 0.6 : 1
        }}
        onMouseEnter={(e) => {
          if (!isFirstQuestion) {
            e.currentTarget.style.backgroundColor = '#7f8c8d';
          }
        }}
        onMouseLeave={(e) => {
          if (!isFirstQuestion) {
            e.currentTarget.style.backgroundColor = '#95a5a6';
          }
        }}
      >
        ← Previous
      </button>

      {/* Answer Status Indicator */}
      <div style={{
        padding: '8px 16px',
        backgroundColor: isAnswered ? '#d5f4e6' : '#fef5e7',
        border: `2px solid ${isAnswered ? '#27ae60' : '#f39c12'}`,
        borderRadius: '4px',
        fontSize: '12px',
        fontWeight: 'bold',
        color: isAnswered ? '#27ae60' : '#f39c12',
        flex: '1',
        textAlign: 'center',
        minWidth: '120px'
      }}>
        {isAnswered ? '✓ Answered' : '○ Not answered'}
      </div>

      {/* Next or Submit Button */}
      {!isLastQuestion ? (
        <button
          onClick={onNext}
          style={{
            padding: '12px 24px',
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
          Next →
        </button>
      ) : (
        <button
          onClick={onSubmit}
          style={{
            padding: '12px 24px',
            backgroundColor: '#27ae60',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#229954';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#27ae60';
          }}
        >
          ✓ Submit Exam
        </button>
      )}
    </div>
  );
}
