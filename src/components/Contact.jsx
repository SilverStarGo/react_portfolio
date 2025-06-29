import React from 'react'

const Contact = () => {
  return (
    <section className='contact_section'>
      <h2 className='contact_title'>감사합니다</h2>
      <p className='contact_subtitle'>
        추가적으로 궁금한 점이 있다면 <br />
        여기로 연락주세요
      </p>

      <div className='contact_box'>
        <div className='contact_item'>
          <span className='label'>연락처</span>
          <span className='value'>010-2793-4856</span>
        </div>
        <div className='contact_item'>
          <span className='label'>이메일</span>
          <span className='value'>8ohowb@gmail.com</span>
        </div>
        <div className='contact_item'>
          <span className='label'>깃허브</span>
          <span className='value'><a href='https://github.com/SilverStarGo' target='_blank' rel='noopener noreferrer'>@SilverStarGo</a></span>
          {/* target='_blank' : 링크가 새창에서 열리지만 보안에 취약 */}
          {/* rel='noopener noreferrer' : 새 탭이 원본 창의 객체 속성에 액세스하는 것을 방지 + 리퍼러 정보가 새 탭으로 전송되지 않도록 보장 */}
        </div>
      </div>
    </section>

  );
};

export default Contact;