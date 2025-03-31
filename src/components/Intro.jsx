import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import about from "../assets/img/computer.jpg";

const Intro = ({ onIntroEnd }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = window.innerHeight; // 화면 높이 기준
      const currentScroll = window.scrollY;
      const progress = Math.min(currentScroll / maxScroll, 1); // 0 ~ 1 사이 값으로 정규화

      setScrollProgress(progress);

      // 스크롤이 화면 높이 이상 내려가면 intro 닫기
      if(progress >= 1) {
        setTimeout(onIntroEnd, 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onIntroEnd]);
  
  return (
    <motion.section
      id="intro"
      className='intro-section'
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 - scrollProgress }}
      transition={{ duration: 0.5 }}
    >

      <motion.div 
        className='intro_overlay left'
        animate={{ $: `${-50 + scrollProgress * 50}%` }}
        transition={{ duration: 0.5 }}
      />
      <motion.div 
        className='intro_overlay right'
        animate={{ $: `${50 + scrollProgress * 50}%` }}
        transition={{ duration: 0.5 }}
      />

      <div className='intro_content'>
        <div className='intro_img'>
          <img src={about} alt='사진' />
        </div>
        <h1>Developer</h1>
        <div className='intro_text'>
          <p>저는 정은성입니다.</p>
          <p>자기소개하기</p>
          <p>마지막 각오까지</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Intro;