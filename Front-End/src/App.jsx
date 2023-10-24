import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Bookings from './Components/Bookings/Bookings'
import Support from './Components/Support/Support'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Detail from './Components/Detail/Detail.jsx'



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='bookings' element={<Bookings />} />
          <Route path='support' element={<Support />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='detail' element={<Detail />} />

          {/* <Route path='update/:id' element={<Update />} /> */}

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App