import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  function increment(){
    setCount(prev => prev + 1)
  }

  function decrement() {
    setCount(prev => {
      if (prev === 1) return prev
      return prev - 1
    })
  }

  return (
    <div>
      <button 
      onClick={decrement}>
        -
      </button>

        <span>{count}</span>

      <button 
      onClick={increment}>
        +
      </button>
    </div>
  )
}

export default App
