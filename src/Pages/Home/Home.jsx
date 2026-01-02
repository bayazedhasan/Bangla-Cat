import React from 'react';
import Header from '../../Components/Shared/Header';
import Hero from './HomeComponets/Hero';
import CatCard from '../CatCard/CatCard';
import Stories from '../Stories/Stories';
import ScrollToTop from '../../Components/Shared/ScrollToTop';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <ScrollToTop></ScrollToTop>
           <CatCard></CatCard>
           <Stories></Stories>
        </div>
    );
};

export default Home;
