import React from 'react'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Info from './components/Info'
import Services from './components/Services'
import Doctors from './components/Doctors'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=' w-full overflow-x-hidden'>
      <Hero />
      {/* <Logos /> */}
      <Info />
      <Services />
      <Doctors />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App