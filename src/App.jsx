import { useState } from 'react'
import Card from './components/card/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 
 const style ={
  "display":"flex",
  "backgroundColor":"rgb(197, 153, 153)"
 }

  return (
     <div className={style}>
      <Card/>
     </div>
  )
}

export default App
