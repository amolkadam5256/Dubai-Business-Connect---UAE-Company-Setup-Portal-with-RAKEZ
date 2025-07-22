import React from 'react'
import LogoSlider from '../components/HomeComp/LogoSlider'
import StatsCounter from '../components/HomeComp/StatsCounter'
import FAQAccordion from '../components/HomeComp/FAQAccordion'
import HomeBannerInBuss from '../components/StartBusiness/HomeBannerInBuss'
import Form from '../components/ContactComp/Form'

const ContactUs = () => {
  return (
    <main className=" bg-white text-[#1e1e1e]">

      <Form />

      <StatsCounter />
      <LogoSlider />


    </main>)
}

export default ContactUs