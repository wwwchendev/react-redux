import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './components/Task'
import store from '@/store/configureStore'
import StoreContext from './contexts/storeContext'

function App() {
  const [count, setCount] = useState(0)
  return (
    <StoreContext.Provider value={store}>
      <Task />
    </StoreContext.Provider>
  )
}

export default App
