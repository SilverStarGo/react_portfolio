import React from 'react'

const Header = ({onIntroClick, onSkillClick, 
  onPortfolioClick, onSelfstudyClick, onContactClick}) => {

  const [activeTab, setActiveTab] = React.useState('intro');

  const handleClick = (section, callback) => {
    setActiveTab(section);
    callback();
  }

  return (
    <header id='header'>
      <div className='header_inner'>
        <div className='header_logo'>
          <a href='/'>portfolio</a>
        </div>
        <nav className='header_nav' aria-label='메인 메뉴'>
          <ul>
            <li><button className={activeTab === 'intro' ? 'active' : ''}onClick={() => handleClick('intro', onIntroClick)}>intro</button></li>
            <li><button className={activeTab === 'skill' ? 'active' : ''}onClick={() => handleClick('skill', onSkillClick)}>skill</button></li>
            <li><button className={activeTab === 'portfolio' ? 'active' : ''}onClick={() => handleClick('portfolio', onPortfolioClick)}>portfolio</button></li>
            <li><button className={activeTab === 'selfstudy' ? 'active' : ''}onClick={() => handleClick('selfstudy', onSelfstudyClick)}>selfstudy</button></li>
            <li><button className={activeTab === 'contact' ? 'active' : ''}onClick={() => handleClick('contact', onContactClick)}>contact</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;