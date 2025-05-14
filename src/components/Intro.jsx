import React, { forwardRef } from 'react';



const Intro = forwardRef((props, ref) => {
  return (
      <section className='intro_content' ref={ref} id='intro'>
        <h1>안녕하세요.</h1>
        <h1>모르는 것을 두려워하지 않고, <br/> 직접 만들며 배우는 프론트엔드 개발자 정은성입니다.</h1>
        <div className='intro_text'>
          <p>작은 도전이 모여</p>
          <p>저를 성장시킨다는 믿음으로</p>
          <p>매일 한 걸음씩 나아가고 있습니다.</p>
        </div>
      </section>
  );
});

export default Intro;