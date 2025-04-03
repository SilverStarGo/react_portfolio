import React, { useState } from 'react';
import testjs from '../assets/img/testjs.png';

// 카테고리별 기술 스택 데이터
const skillCategories = [
  {id: "program1", name: "프로그램1"},
  {id: "program2", name: "프로그램2"},
  {id: "program3", name: "프로그램3"},
];

// 기술 아이콘 데이터
const skillIcons = {
  program1: [
    {id: "skill1", src: testjs, alt: "SKILL1"},
    {id: "skill2", src: testjs, alt: "SKILL2"},
    {id: "skill3", src: testjs, alt: "SKILL3"},
    {id: "skill4", src: testjs, alt: "SKILL4"},
  ],
  program2: [
    {id: "skill5", src: testjs, alt: "SKILL5"},
    {id: "skill6", src: testjs, alt: "SKILL6"},
    {id: "skill7", src: testjs, alt: "SKILL7"},
  ],
  program3: [
    {id: "skill8", src: testjs, alt: "SKILL8"},
    {id: "skill9", src: testjs, alt: "SKILL9"},
    {id: "skill10", src: testjs, alt: "SKILL10"},
  ],
};

const allSkills = Object.values(skillIcons).flat();

const skill = () => {
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
    <section className='skill_section'>
      <h2 className='section_title'>기술스킬</h2>
      <p className='section_subtitle'>사용할 수 있어요.</p>

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
};

export default skill;