import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)

  return (
    <>
      <h1>Calculator</h1>
      <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
      <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
      <button onClick={() => setResult(num1 * num2)}>Add</button>
      <p>Result: {result}</p>
    </>
  )
}

export default App
