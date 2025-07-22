import React from 'react'
import AboutInHome from '../components/AboutComp/AboutInHome'
import LogoSlider from '../components/HomeComp/LogoSlider'
import StatsCounter from '../components/HomeComp/StatsCounter'
import FAQAccordion from '../components/HomeComp/FAQAccordion'
import ServicesPage from '../components/ServicesComp/ServicesPage'

const Services = () => {
  return (
    <main className=" bg-white text-[#1e1e1e]">
      <ServicesPage />

      <StatsCounter />
      <LogoSlider />

      <FAQAccordion />

    </main>)
}

export default Services