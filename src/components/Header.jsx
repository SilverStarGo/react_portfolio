import React from 'react'

const Header = ({onIntroClick, onSkillClick, 
  onPortfolioClick, onSelfstudyClick, onContactClick}) => {
  return (
    <header id='header'>
      <div className='header_inner'>
        <div className='header_logo'>
          <a href='/'>portfolio</a>
        </div>
        <nav className='header_nav' aria-label='메인 메뉴'>
          <ul>
            <li><button onClick={onIntroClick}>intro</button></li>
            <li><button onClick={onSkillClick}>skill</button></li>
            <li><button onClick={onPortfolioClick}>portfolio</button></li>
            <li><button onClick={onSelfstudyClick}>selfstudy</button></li>
            <li><button onClick={onContactClick}>contact</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;