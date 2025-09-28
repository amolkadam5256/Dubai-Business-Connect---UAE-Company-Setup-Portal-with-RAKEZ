import React from 'react'
import LogoSlider from '../components/HomeComp/LogoSlider'
import StatsCounter from '../components/HomeComp/StatsCounter'
import Form from '../components/ContactComp/Form'
import ContactBanner from '../components/ContactComp/ContactBanner'

const ContactUs = () => {
  return (
    <main className=" bg-white text-[#1e1e1e]">

      <Form />
      <ContactBanner />
      <StatsCounter />
      <LogoSlider />



    </main>)
}

export default ContactUs