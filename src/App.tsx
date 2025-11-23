import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-red-100 justify-center items-center p-2' >
        Hello World
      </div>
    </>
  )
}

export default App
