import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import StatsCounter from '../components/HomeComp/StatsCounter';
import HomeBannerSection from '../components/HomeComp/HomeBannerSection';
import AboutInHome from '../components/HomeComp/AboutInHome';
import IndustriesInHome from '../components/HomeComp/industriesInHome';
import LogoSlider from '../components/HomeComp/LogoSlider';
const Home = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <main className=" bg-white text-[#1e1e1e]">
      <HomeBannerSection />

      <IndustriesInHome />
      <StatsCounter />

      <AboutInHome />

      <LogoSlider />
    </main>
  );
};

export default Home;
