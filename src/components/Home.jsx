import React from 'react';
import Banner from './Banner';
import Feature from './Feature';
import Section2 from './Section2';
import Section3 from './Section3';
import Section from './Section';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Feature></Feature>
         <Section3></Section3>
         <Section></Section>
         <Section2></Section2>
        </div>
    );
};

export default Home;