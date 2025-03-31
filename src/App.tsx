import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="calculator-grid">
        <input 
          type="number" 
          value={num1} 
          onChange={(e) => setNum1(Number(e.target.value))}
          placeholder="Enter first number"
        />
        <input 
          type="number" 
          value={num2} 
          onChange={(e) => setNum2(Number(e.target.value))}
          placeholder="Enter second number"
        />
        <button onClick={() => setResult(num1 + num2)}>
          Calculate
        </button>
      </div>
      <div className="result">
        <p>Result: <span>{result}</span></p>
      </div>
    </div>
  )
}

export default App
