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
            <p>{study.shortDesc}</p>
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
            <p><strong>기술스택</strong></p>

            <div className='smodal_skill_icons'>
              {modalStudy.skills.map((skill, index) => (
                <img key={index}
                src={skill} 
                alt={`skill-${index}`}
                className='smodal_skill_icon'
                />
              ))}
            </div>
            <div className='linkButtons'>
              {/* 모달안에 링크 달기 */}
              {modalStudy.link && (
                <a
                  href={modalStudy.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='linkButton'
                >
                   🔗 사이트 바로가기
                </a>
              )}
              {/* 모달안에 깃허브 주소 달기 */}
              {modalStudy.github && (
                <a
                  href={modalStudy.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='linkButton'
                >
                   💻 GitHub 저장소
                </a>
              )}
            </div>

            <hr className='section_divider' />


              {modalStudy.exImages && modalStudy.exImages.length > 0 && (
                <div className='modal_exImages'>
                  <h3>VIEW</h3>
                  {/* 이미지 부분 */}
                    {modalStudy.exImages.map((image, index) => (
                      <img 
                        key={index}
                        src={image}
                        alt={`exImage-${index}`}
                        className='modal_exImage'
                      />
                    ))}
                </div>
              )}


            <h3>상세내용</h3>
            <ol className="modal_details">
              {modalStudy.details.map((detail, index) => (
                <li key={index}>
                  <div className='dtitles'>
                    <strong>{detail.dtitle}</strong>
                  </div>
                  {detail.desc && (
                    <ul className='modal_descs'>
                      {(Array.isArray(detail.desc) ? detail.desc : [detail.desc]).map((d, index) => (
                        <li key={index}>{d}</li>
                      ))}
                    </ul>
                  )} 

                  {/* 이미지가 첨부되었을때만 출력 */}
                  {detail.dimage && (
                    <img 
                      src={detail.dimage}
                      alt={`detail-${index}`}
                      className='dimages'
                    />
                  )}
                </li>
              ))}
            </ol>

            <button onClick={() => setModalStudy(null)}>닫기</button>
          </div>
        </div>
      )}
    </section>
  );
});

export default Selfstudy