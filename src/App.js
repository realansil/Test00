import { useState } from 'react'; // Fixed the capital 'I'

function App() {
  const [count, setCount] = useState(0);

  return (
    // Wrapping the app in a dark, full-screen background
    <div style={containerStyle}>
      {/* A modern glassmorphism card to hold your app */}
      <div style={cardStyle}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '2.5rem' }}>My First App! 😎</h1>
        
        <h2 style={{ fontSize: '4rem', margin: '20px 0', color: '#61dafb' }}>
          {count}
        </h2>
        
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          {/* Best Practice: Using 'prev => prev - 1' guarantees accurate state updates */}
          <button onClick={() => setCount(prev => prev - 1)} style={actionButtonStyle}>
            ➖ Decrement
          </button>
          
          <button onClick={() => setCount(0)} style={resetButtonStyle}>
            🔁 Reset
          </button>
          
          <button onClick={() => setCount(prev => prev + 1)} style={actionButtonStyle}>
            ➕ Increment
          </button>
        </div>
      </div>
    </div>
  );
}

// --- Extracted Styles for cleaner JSX ---

const containerStyle = {
  minHeight: '100vh',
  backgroundColor: '#282c34', // Matches the dark theme from your CSS earlier
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontFamily: 'sans-serif'
};

const cardStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  padding: '40px',
  borderRadius: '20px',
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  textAlign: 'center'
};

const actionButtonStyle = {
  fontSize: '16px',
  padding: '12px 20px',
  borderRadius: '12px',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: '#61dafb',
  color: '#282c34',
  fontWeight: 'bold',
};

const resetButtonStyle = {
  ...actionButtonStyle, // Copies the styles from actionButtonStyle
  backgroundColor: '#ff6b6b', // Overrides the color to red
  color: 'white'
};

export default App;
