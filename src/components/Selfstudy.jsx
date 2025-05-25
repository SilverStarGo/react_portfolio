import React, { useState , forwardRef } from 'react';
import { selfstudyData } from '../data/selfstudy.js';

const Selfstudy = forwardRef((props, ref) => {
  const [modalStudy, setModalStudy] = useState(null);

  return (
    <section className='selfstudy_section' ref={ref} id='selfstudy'>
      <h2 className='selfstudy_section_title'>혼자서 공부한것들</h2>
      <p className='selfstudy_section_subtitle'>카드를 클릭하면 상세 정보를 볼 수 있어요.</p>

      <div className='selfstudy_grid'>
        {selfstudyData.map((study) => (
          <div
            key={study.id}
            className='study_card'
            style={{ backgroundColor: study.bgColor }}
            onClick={() => setModalStudy(study)}
          >
            <h3>{study.title}</h3>
            <p>{study.description}</p>
            <div className='skill_icons'>
              {study.skills.map((skill, index) => (
                <img key={index}
                src={skill}
                alt={`skill-${index}`}
                className='skill_icon' />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* modal 활용부분 */}
      {modalStudy && (
        <div className='smodal_overlay' onClick={() => setModalStudy(null)}>
          <div className='smodal_content' onClick={(e) => e.stopPropagation()}>
            <h3>{modalStudy.title}</h3>
            <p>{modalStudy.description}</p>
            <p><strong>사용 기술</strong>
            <div className='smodal_skill_icons'>
              {modalStudy.skills.map((skill, index) => (
                <img key={index}
                src={skill} 
                alt={`skill-${index}`}
                className='smodal_skill_icon'
                />
              ))}
            </div>
            </p>
            <button onClick={() => setModalStudy(null)}>닫기</button>
          </div>
        </div>
      )}
    </section>
  );
});

export default Selfstudy