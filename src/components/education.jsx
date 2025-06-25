import React from 'react'
import { educationtimeline } from '../data/educationtimeline.js';

const education = () => {
  return (
    <section className='education_section'>
        <div className='edu_section_title'>학력 및 교육</div>
        <div className='edu_list'>
            {educationtimeline.map((item) => (
                <div key={item.id} className='edu_item'>
                    <div className='edu_period'>{item.year}</div>
                    <div className='edu_info'>
                        <h3>{item.title}</h3>
                        {item.subtitle && <h4>{item.subtitle}</h4>}
                        {item.stacks && (
                            <div className='edu_tags'>
                                {item.stacks.map((tag, index) => (
                                    <span className='edu_badge' key={index}>{tag}</span>
                                ))}
                            </div>
                        )}
                        {item.details && (
                            <ul className='edu_details'>
                                {item.details.map((line, index) => (
                                    <li key={index}>{line}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default education