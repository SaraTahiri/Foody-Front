import React from 'react'
import FirstPart from './Components/FirstPart'
import Vision from './Components/Vision'
import Header from '../Header/Header'
import ValuesSection from './Components/ValuesSection'
import RoleSection from './Components/RoleSection'
import WhyMoroccanSection from './Components/WhyMoroccanSection'
import ContactUs from './Components/ContactUs'

const About = () => {
  return (
    <div>
      <FirstPart />
      <Vision />
      <ValuesSection />
      <RoleSection />
      <WhyMoroccanSection />
      <ContactUs />
    </div>
  )
}

export default About
