import React, { forwardRef }from 'react'

const Contact = forwardRef((props, ref) => {
  return (
    <section className='contact_section' ref={ref} id='contact'>
      <h2>저의 연락처입니다</h2>
      <div>Contact</div>
    </section>

  );
});

export default Contact;