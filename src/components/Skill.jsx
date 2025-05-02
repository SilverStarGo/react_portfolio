import React, { forwardRef, useState } from 'react';
import { skillCategories, skillIcons } from '../data/skilldata.js';

const allSkills = Object.values(skillIcons).flat();

const skill = forwardRef((props, ref) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedCategory, setSelectedCategory] = useState("all");

  // 버튼 클릭 시 카테고리 토글
  const toggleCategory = (categoryId) => {
    setSelectedCategory(selectedCategory === categoryId ? "all" : categoryId);
  };

  // 선택된 카테고리에 따라 보여줄 기술 리스트 결정
  const displayedSkills = selectedCategory === "all" 
  ? allSkills : skillIcons[selectedCategory];

  return (
    <section className='skill_section' ref={ref} id='skill'>
      <h2 className='section_title'>기술스킬</h2>
      <p className='section_subtitle'>사용할 수 있는 기술목록입니다.</p>

      <div className='category_tabs'>
        {skillCategories.map((category) => (
          <button
            key={category.id}
            className={`tab ${selectedCategory === category.id ? "active" : ""}`}
            onClick={() => toggleCategory(category.id)}
            >
              {category.name}
          </button>
        ))}
      </div>

      <div className='skill_grid'>
        {displayedSkills && displayedSkills.map((skill) => (
          <div key={skill.id} className='skill_card'> 
            <img src={skill.src} alt={skill.alt} />
          </div>
        ))}
      </div>
    </section>
  );
});

export default skill;