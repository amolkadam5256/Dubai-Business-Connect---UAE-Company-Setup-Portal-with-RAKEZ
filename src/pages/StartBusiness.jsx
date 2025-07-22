import React from 'react'
import LogoSlider from '../components/HomeComp/LogoSlider'
import StatsCounter from '../components/HomeComp/StatsCounter'
import FAQAccordion from '../components/HomeComp/FAQAccordion'
import HomeBannerInBuss from '../components/StartBusiness/HomeBannerInBuss'

const StartBusiness = () => {
  return (
    <main className=" bg-white text-[#1e1e1e]">

      <HomeBannerInBuss />

      <StatsCounter />
      <LogoSlider />

      <FAQAccordion />

    </main>)
}

export default StartBusiness