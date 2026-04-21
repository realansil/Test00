import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px'}}>
      <h1>My First App!😎</h1>
      <h2>count: {count}</h2>
      <button onClick={() => setCount(count + 1)} style={{fontSize: '20px', margin: '5px'}}>
        ➕ Increment
        </button>
      <button onClick={() => setCount(count - 1)} style={{fontSize: '20px', margin: '5px'}}>
        ➖ Decrement
        </button>
       <button onClick={() => setCount(0)} style={{fontSize: '20px', margin: '5px'}}>
        🔁 Reset
        </button>
    </div>
  )
}

export default App;
