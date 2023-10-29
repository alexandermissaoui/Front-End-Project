import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'
import Support from './Pages/Support/Support'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Detail from './Pages/Detail/Detail.jsx'



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
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