import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <div>
      <h1>Simple Redux Toolkit</h1>
      <AddTodo />
      <Todos />
      <h1> Made By Nexenstial 2025</h1>
    </div>
  )
}

export default App
