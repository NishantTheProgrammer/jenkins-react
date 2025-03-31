import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(0)

  const calculate = () => {
    setResult(Number(num1) + Number(num2))
  }

  return (
    <div className="calculator">
      <h1>Calculator - red with bug fixed</h1>
      <div className="calculator-grid">
        <input 
          type="number" 
          value={num1} 
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
        />
        <input 
          type="number" 
          value={num2} 
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
        <button onClick={calculate}>
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
