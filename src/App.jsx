import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-gray-400 bg-gray-900 body-font'>
      <Navbar />
      <About />
      <Projects />
      <Skills />
    </div> 
  )
}

export default App
