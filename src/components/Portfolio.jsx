import React, { useState , forwardRef} from 'react';
import css from '../assets/img/css.png';

const skillIconMap = {
  skill1: css,
  skill2: css,
  skill3: css,
  skill4: css,
};

const projects = [
  {
    id: 1,
    title: '프로젝트명1',
    description: '간단설명1',
    skills:['skill1', 'skill2', 'skill3', 'skill4'],
    bgColor: '#111',
  },
  {
    id: 2,
    title: '프로젝트명2',
    description: '간단설명2',
    skills:['skill1', 'skill2', 'skill3', 'skill4'],
    bgColor: '#1e1e2f',
  },
  {
    id: 3,
    title: '프로젝트명3',
    description: '간단설명3',
    skills:['skill1', 'skill2', 'skill3', 'skill4'],
    bgColor: '#111',
  },
];

const Portfolio = forwardRef((props, ref) => {
  const [modalProject, setModalProject] = useState(null);

  return (
    <section className='portfolio_section' ref={ref} id='portfolio'>
      <h2 className='portfolio_section_title'>주요 프로젝트</h2>
      <p className='portfolio_section_subtitle'>카드를 클릭하면 상세 정보를 볼 수 있어요.</p>

      <div className='portfolio_grid'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='project_card'
            style={{ backgroundColor: project.bgColor }}
            onClick={() => setModalProject(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className='skill_icons'>
              {project.skills.map((skill, index) => (
                <img key={index}
                src={skillIconMap[skill]}
                alt={skill}
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
            <h3>{modalProject.tilte}</h3>
            <p>{modalProject.description}</p>
            <p><strong>사용 기술</strong> 
            <div className='modal_skill_icons'>
              {modalProject.skills.map((skill, index) => (
              <img key={index}
              src={skillIconMap[skill]}
              alt={skill}
              className='modal_skill_icon'
              />
            ))}
            </div>
            </p>
            <button onClick={() => setModalProject(null)}>닫기</button>
          </div>
        </div>
      )}
    </section>
  );
});

export default Portfolio;