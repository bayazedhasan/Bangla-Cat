import React from 'react';
import Header from '../../Components/Shared/Header';
import Hero from './HomeComponets/Hero';
import CatCard from '../CatCard/CatCard';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <CatCard></CatCard>
        </div>
    );
};

export default Home;
