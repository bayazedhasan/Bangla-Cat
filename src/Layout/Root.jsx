import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Shared/Header';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;