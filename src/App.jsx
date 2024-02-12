import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './components/Task'
import AddTask from './components/AddTask'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Task</h1>
      <AddTask />
      <Task />
    </>
  )
}

export default App
