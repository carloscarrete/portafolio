import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { About } from './components/About'
import { Navbar } from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-gray-400 bg-gray-900 body-font'>
      <Navbar />
      <About />
    </div> 
  )
}

export default App
