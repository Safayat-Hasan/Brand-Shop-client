import { useState } from 'react'
import './App.css'
import Toggle from './toggle/Toggle';

function App() {
  
  const [isDark, setIsDark] = useState(true);

  return (
    <div className='App' data-theme={isDark ? "dark":"light"}>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}></Toggle>
      <h1 className='title'>Vite + React</h1>
      <div className='box'>
        <h2>this is box</h2>
      </div>
      
    </div>
  )
}

export default App
