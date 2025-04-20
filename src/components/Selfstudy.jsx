import React, { useState , forwardRef } from 'react';
import testjs from '../assets/img/testjs.png';

const skillIconMap = {
  skill1: testjs,
  skill2: testjs,
  skill3: testjs,
  skill4: testjs,
  skill5: testjs,
  skill6: testjs,
  skill7: testjs,
  skill8: testjs,
  skill9: testjs,
  skill10: testjs,
  skill11: testjs,
  skill12: testjs,
};

const studys = [
  {
    id: 1,
    title: '학습1',
    description: '간단설명1',
    skills:['skill1', 'skill2', 'skill3', 'skill4'],
    bgColor: '#1e1e2f',
  },
  {
    id: 2,
    title: '학습2',
    description: '간단설명2',
    skills:['skill5', 'skill6', 'skill7', 'skill8'],
    bgColor: '#111',
  },  {
    id: 3,
    title: '학습3',
    description: '간단설명3',
    skills:['skill9', 'skill10', 'skill11', 'skill12'],
    bgColor: '#1e1e2f',
  },
];

const Selfstudy = forwardRef((props, ref) => {
  const [modalStudy, setModalStudy] = useState(null);

  return (
    <section className='selfstudy_section' ref={ref} id='selfstudy'>
      <h2 className='selfstudy_section_title'>혼자서 공부한것들</h2>
      <p className='selfstudy_section_subtitle'>카드를 클릭하면 상세 정보를 볼 수 있어요.</p>

      <div className='selfstudy_grid'>
        {studys.map((study) => (
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
                src={skillIconMap[skill]}
                alt={skill}
                className='skill_icon' />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* modal 활용부분 */}
      {modalStudy && (
        <div className='modal_overlay' onClick={() => setModalStudy(null)}>
          <div className='modal_content' onClick={(e) => e.stopPropagation()}>
            <h3>{modalStudy.title}</h3>
            <p>{modalStudy.description}</p>
            <p><strong>사용 기술</strong>
            <div className='modal_skill_icons'>
              {modalStudy.skills.map((skill, index) => (
                <img key={index}
                src={skillIconMap[skill]} 
                alt={skill}
                className='modal_skill_icon'
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