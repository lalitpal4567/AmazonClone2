import React, {useState } from 'react'
import "./HomePageDashboard.css";
import Navbar from 'src/components/navbar/Navbar'
import Footer from 'src/components/footerSection/Footer';
import Main from 'src/components/mainSection/Main';



const HomePageDashboard = () => {
    return (
        <>
            <Navbar/>
            <Main />
            <Footer />
        </>
    )
}

export default HomePageDashboard
