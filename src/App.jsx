import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ServicesCard from './components/ServicesCard'
import Testimonials from './components/Testimonials'

import {BrowserRouter as Router , Routes ,Route}from "react-router-dom";

import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import Contact from'./pages/Contact'
import ConsultationForm from './pages/ConsultationForm'

function App() {
 
  return (
   <Router>

    <div>
        <Navbar/>
        
        <Routes>
            <Route path='/'>
              <Route path='/' element={
                  <>     
                      <Hero/>
                      <ServicesCard/>
                      <About/>
                      <Testimonials/>
                  </>   } exact />

            </Route>
            <Route path='/services' element={<Services />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/consultation' element={<ConsultationForm />} />
            </Routes>

        
        <Footer/>
      
      </div>




   </Router>
  )
}

export default App
