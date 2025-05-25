import React, { useState, forwardRef, useEffect} from 'react';
import { projectData } from '../data/projectdata.js';


const Portfolio = forwardRef((props, ref) => {
  const [modalProject, setModalProject] = useState(null);
  
  // 모달 시 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  return (
    <section className='portfolio_section' ref={ref} id='portfolio'>
      <h2 className='portfolio_section_title'>프로젝트 상세보기</h2>
      <p className='portfolio_section_subtitle'>주요 프로젝트의 세부 내용을 확인해보세요</p>

      <div className='portfolio_grid'>
        {projectData.map((project) => (
          <div
            key={project.id}
            className='project_card'
            style={{ backgroundColor: project.bgColor }}
            onClick={() => setModalProject(project)}
          >
            <img src={project.thumbnail} alt={project.title} className='projectThumb' />
            <h3>{project.title}</h3>
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
            <div className='modalMeta'>
              <p><strong>참여인원:</strong> {modalProject.members}</p>
              <p><strong>기간:</strong> {modalProject.period}</p>
            </div>
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
            <ul className="modalDetails">
              {modalProject.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <button onClick={() => setModalProject(null)}>닫기</button>
          </div>
        </div>
      )}
    </section>
  );
});

export default Portfolio;