import React, { forwardRef } from 'react'

const Selfstudy = forwardRef((props, ref) => {
  return (
    <section className='selfstudy_section' ref={ref} id='selfstudy'>
      <h2>혼자서 공부한것들</h2>
      <div>Selfstudy</div>
    </section>
  );
});

export default Selfstudy