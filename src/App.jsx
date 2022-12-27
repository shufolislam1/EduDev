import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  )
}

export default App
