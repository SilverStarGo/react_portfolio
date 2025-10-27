import React, { useState, forwardRef } from 'react';
import { projectData } from '../data/projectdata.js';


const Portfolio = forwardRef((props, ref) => {
  const [modalProject, setModalProject] = useState(null);
  
  return (
    <section className='portfolio_section' ref={ref} id='portfolio'>
      <h2 className='portfolio_section_title'>프로젝트 상세보기</h2>
      <p className='portfolio_section_subtitle'>팀 프로젝트의 세부 내용을 확인할 수 있어요.</p>

      <div className='portfolio_grid'>
        {projectData.map((project) => (
          <div
            key={project.id}
            className='project_card'
            style={{ backgroundColor: project.bgColor }}
            onClick={() => setModalProject(project)}
          >
            <img src={project.thumbnail} alt={project.title} className='projectThumb' />
            <h4>{project.title}</h4>
            <p>{project.shortDesc}</p>
            <div className='skill_icons'>
              {project.skills.map((skill, index) => (
                <img key={index}
                src={skill}
                alt={`skill-${index}`}
                className="skill_icon" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* modal 활용 */}
      {modalProject && (
        <div className='modal_overlay' onClick={() => setModalProject(null)}>
          <div className='modal_content' onClick={(e) => e.stopPropagation()}>
            <h2>{modalProject.title}</h2>
            <h4>프로젝트 설명</h4>
            <p>{modalProject.description}</p>
            <p><strong>기술스택</strong></p>

            <div className='modal_skill_icons'>
              {modalProject.skills.map((skill, index) => (
                <img key={index}
                src={skill}
                alt={`skill-${index}`}
                className='modal_skill_icon'
                />
              ))}
            </div>
            <div className='modalMeta'>
              <p><strong>👭 참여인원:</strong> {modalProject.members}</p>
              <p><strong>📆 기간:</strong> {modalProject.period}</p>
              <h3><strong>🙌 나의역할</strong></h3> 
              <ul className='roles'>
                {modalProject.role.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className='linkButtons'>
              {/* 모달안에 링크 달기 */}
              {modalProject.link && (
                <a
                  href={modalProject.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='linkButton'
                >
                   🔗 사이트 바로가기
                </a>
              )}
              {/* 모달안에 깃허브 주소 달기 */}
              {modalProject.github && (
                <a
                  href={modalProject.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='linkButton'
                >
                   💻 GitHub 저장소
                </a>
              )}
            </div>

            <hr className='section_divider' />
            <h3>VIEW</h3>
            <div className='modal_exImages'>
              {/* 이미지 부분 */}
              {modalProject.exImages.map((image, index) => (
                <img key={index}
                src={image}
                alt={`exImage-${index}`}
                className='modal_exImage'
                />
              ))}
            </div>
            <h3>상세내용</h3>
            <ol className="modal_details">
              {modalProject.details.map((detail, index) => (
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
            <button onClick={() => setModalProject(null)}>닫기</button>
          </div>
        </div>
      )}
    </section>
  );
});

export default Portfolio;