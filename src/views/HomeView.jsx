import React, { useRef } from "react";
import Header from "../components/Header"
import Main from "../components/Main"
import Intro from "../components/Intro"
import Skill from "../components/Skill"
import Portfolio from "../components/Portfolio"
import Selfstudy from "../components/Selfstudy";
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const HomeView = () => {
    const introRef = useRef(null);
    const skillRef = useRef(null);
    const portfolioRef = useRef(null);
    const selfstudyRef = useRef(null);
    const contactRef = useRef(null);

    const handleScrollToIntro = () => {
        introRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    const handleScrollToSkill = () => {
        skillRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
    const handleScrollToPortfolio = () => {
        portfolioRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
    const handleScrollToSelfstudy = () => {
        selfstudyRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
    const handleScrollToContact = () => {
        contactRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
    <>
        <Header 
        onIntroClick={handleScrollToIntro}
        onSkillClick={handleScrollToSkill}
        onPortfolioClick={handleScrollToPortfolio}
        onSelfstudyClick={handleScrollToSelfstudy}
        onContactClick={handleScrollToContact} 
        />
        <Main>
            <Intro ref={introRef}/>
            <Skill ref={skillRef}/>
            <Portfolio ref={portfolioRef} />
            <Selfstudy ref={selfstudyRef} />
            <Contact ref={contactRef} />
        </Main>
        <Footer/>
    </>
    );
};

export default HomeView;