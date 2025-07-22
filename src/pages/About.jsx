import React from 'react'
import AboutInHome from '../components/AboutComp/AboutInHome'
import LogoSlider from '../components/HomeComp/LogoSlider'
import StatsCounter from '../components/HomeComp/StatsCounter'
import FAQAccordion from '../components/HomeComp/FAQAccordion'

const About = () => {
  return (
    <main className=" bg-white text-[#1e1e1e]">

      <AboutInHome />

      <StatsCounter />
      <LogoSlider />

      <FAQAccordion/>

    </main>)
}

export default About