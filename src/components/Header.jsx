import React from 'react'

const Header = () => {
  return (
    <header id='header'>
      <div className='header_inner'>
        <div className='header_logo'>
          <a href='/'>portfolio</a>
        </div>
        <nav className='header_nav' aria-label='메인 메뉴'>
          <ul>
            <li><a href='#intro'>intro</a></li>
            <li><a href='#skill'>skill</a></li>
            <li><a href='#portfolio'>portfolio</a></li>
            <li><a href='#selfstudy'>selfstudy</a></li>
            <li><a href='#contact'>contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;