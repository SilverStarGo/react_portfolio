import React, { forwardRef } from 'react';
import about from "../assets/img/computer.jpg";



const Intro = forwardRef((props, ref) => {
  return (
      <section className='intro_content' ref={ref} id='intro'>
        <div className='intro_img'>
          <img src={about} alt='사진' />
        </div>
        <h1>Developer</h1>
        <div className='intro_text'>
          <p>저는 정은성입니다.</p>
          <p>자기소개하기</p>
          <p>마지막 각오까지</p>
        </div>
      </section>
  );
});

export default Intro;