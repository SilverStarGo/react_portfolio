import React from "react";
import Header from "../components/Header"
import Main from "../components/Main"
import Intro from "../components/Intro"
import Skill from "../components/Skill"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const HomeView = () => {
    return (
    <>
        <Header />
        <Main>
            <Intro />
            <Skill />
            <Portfolio />
            <Contact />
        </Main>
        <Footer/>
    </>
    );
};

export default HomeView;