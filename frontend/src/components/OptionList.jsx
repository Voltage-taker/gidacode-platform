/**
 * Options list component - displays answer choices
 */
export function OptionList({ options, selectedAnswerIndex, onSelectAnswer }) {
  return (
    <fieldset style={{
      border: 'none',
      padding: 0,
      margin: '20px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      <legend style={{ display: 'none' }}>Answer options</legend>
      
      {options.map((option, index) => (
        <label
          key={index}
          style={{
            padding: '14px 16px',
            border: selectedAnswerIndex === index ? '2px solid #3498db' : '1px solid #ccc',
            borderRadius: '6px',
            cursor: 'pointer',
            backgroundColor: selectedAnswerIndex === index ? '#ecf0f1' : '#fff',
            display: 'flex',
            alignItems: 'center',
            transition: 'all 0.2s ease',
            fontSize: '16px',
            color: '#2c3e50',
            userSelect: 'none',
            ':hover': {
              borderColor: '#3498db',
              backgroundColor: '#f5f5f5'
            }
          }}
          onMouseEnter={(e) => {
            if (selectedAnswerIndex !== index) {
              e.currentTarget.style.borderColor = '#3498db';
              e.currentTarget.style.backgroundColor = '#f5f5f5';
            }
          }}
          onMouseLeave={(e) => {
            if (selectedAnswerIndex !== index) {
              e.currentTarget.style.borderColor = '#ccc';
              e.currentTarget.style.backgroundColor = '#fff';
            }
          }}
        >
          <input
            type="radio"
            name="exam-option"
            value={index}
            checked={selectedAnswerIndex === index}
            onChange={() => onSelectAnswer(index)}
            style={{
              marginRight: '15px',
              transform: 'scale(1.2)',
              cursor: 'pointer',
              accentColor: '#3498db'
            }}
          />
          <span>{option}</span>
        </label>
      ))}
    </fieldset>
  );
}
