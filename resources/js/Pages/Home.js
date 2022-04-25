import React from "react";
import Nav from "../components/Navbar/Nav";
import Cover from "../components/cover/Cover";
import Cards_Cover from "../components/cards_cover/Cards_Cover";
import About_me from "../components/about_me/About_me";
import Gallery from "../components/gallery/Gallery";
import Services from "../components/Services/Services";
import Outer_Activity from '../components/outer_activity/Outer_Activity'
import Price from "../components/price/Price";
import Location from '../components/Location/Location'
import Footer from "../components/footer/Footer";

function Home() {
    return (
        <>
            <Nav />
            <Cover />
            <Cards_Cover />
            <About_me />
            <Gallery />
            <Services />
            <Outer_Activity />
            <Price />
            <Location />
            <Footer />
        </>
    )
}

export default Home;