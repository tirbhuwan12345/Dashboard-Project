import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterReducer from './components/CounterReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterReducer/>

    </>
  )
}

export default App
