import React, { useEffect, useState } from 'react';

const Header = ({onIntroClick, onSkillClick, 
  onPortfolioClick, onSelfstudyClick, onContactClick}) => {

  const [activeTab, setActiveTab] = useState('intro');

  const handleClick = (section, callback) => {
    setActiveTab(section);
    callback();
  };

  // useEffect로 스크롤 이벤트 감지 추가
  useEffect(() => {
    const sectionIds = ['intro', 'skill', 'portfolio', 'selfstudy', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offsets = sectionIds.map(id => {
        const el = document.getElementById(id);
        return {
          id,
          offset: el ? el.offsetTop - window.innerHeight / 3 : 0,
        };
      });

      const current = offsets
        .filter(({ offset }) => scrollY >= offset)
        .pop();

      if (current && current.id !== activeTab) {
        setActiveTab(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);
  //
  
  return (
    <header id='header'>
      <div className='header_logo_wrapper'>
        <div className='header_logo'>
          <a href='/'>JES</a>
        </div>
      </div>
      
      <nav className='header_nav' aria-label='메인 메뉴'>
        <div className='nav_wrapper'>
          <ul>
            <li><button className={activeTab === 'intro' ? 'active' : ''}onClick={() => handleClick('intro', onIntroClick)}>intro</button></li>
            <li><button className={activeTab === 'skill' ? 'active' : ''}onClick={() => handleClick('skill', onSkillClick)}>skill</button></li>
            <li><button className={activeTab === 'portfolio' ? 'active' : ''}onClick={() => handleClick('portfolio', onPortfolioClick)}>portfolio</button></li>
            <li><button className={activeTab === 'selfstudy' ? 'active' : ''}onClick={() => handleClick('selfstudy', onSelfstudyClick)}>selfstudy</button></li>
            <li><button className={activeTab === 'contact' ? 'active' : ''}onClick={() => handleClick('contact', onContactClick)}>contact</button></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;