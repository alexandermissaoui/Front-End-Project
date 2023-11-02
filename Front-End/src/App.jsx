import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'
import Support from './Pages/Support/Support'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Detail from './Pages/Detail/Detail.jsx'
import Reservations from './Pages/Reservations/Reservations'
import AccommodationProvider from './Context/AccommodationContext'



function App() {
  return (
    <BrowserRouter>
        <AccommodationProvider>

      <Navbar />
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='support' element={<Support />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path="/Detail/:id" element={<Detail />} />
          <Route path='reservations/:id' element={<Reservations />} />

          
        </Routes>
      </div>
      <Footer />
      </AccommodationProvider>

    </BrowserRouter>
  )
}

export default App