import React, { useState } from "react";
import Header from "../components/Header"
import Main from "../components/Main"
import Intro from "../components/Intro"
import Skill from "../components/Skill"
import Portfolio from "../components/Portfolio"
import Selfstudy from "../components/Selfstudy";
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const HomeView = () => {
    const [showIntro, setShowIntro] = useState(true); // 인트로 화면 상태

    const handleIntroEnd = () => {
        setShowIntro(false); // 인트로 종료 시 인트로 숨김
    };

    return (
    <>
        <Header />
        <Main>
            {showIntro ? <Intro onIntroEnd={handleIntroEnd} /> : null}
            <Skill />
            <Portfolio />
            <Selfstudy />
            <Contact />
        </Main>
        <Footer/>
    </>
    );
};

export default HomeView;