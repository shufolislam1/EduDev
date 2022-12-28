
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import Register from './components/Register'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/carousel' element={<Carousel></Carousel>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
