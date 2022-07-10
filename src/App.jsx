import { useState } from 'react'
import './App.css'
import Slide from './component/Slide'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Slide/>
    </>
  )
}

export default App
