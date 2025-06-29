import React, { useEffect } from 'react';
import Banner from './Banner';
import Feature from './Feature';
import Section2 from './Section2';
import Section3 from './Section3';
import Section from './Section';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopDestinations from './section/TopDestinations';
import WhyChooseUs from './section/WhyChooseUs';
import HowItWorks from './section/HowItWorks';
import Testimonials from './section/Testimonials';
import PhotoGallery from './section/PhotoGallery';


const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

    return (
        <div>
         <Banner></Banner>
         <Feature></Feature>
         <TopDestinations></TopDestinations>
         <WhyChooseUs></WhyChooseUs>
         <HowItWorks></HowItWorks>
         <Testimonials></Testimonials>
         <PhotoGallery></PhotoGallery>
         <Section2></Section2>
        </div>
    );
};

export default Home;