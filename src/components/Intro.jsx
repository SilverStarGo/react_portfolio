import React, { forwardRef, useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import Typical from 'react-typical';


const Intro = forwardRef((props, ref) => {

  const [scrollY, setScrollY] = useState(0);

  const [done, setDone] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  // ▼가 사라지는 투명도 설정
  const arrowOpacity = scrollY < 100 ? 1 - scrollY / 100 : 0;

  return (
      <section className='intro_content' ref={ref} id='intro'>
        <motion.h1
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          안녕하세요.
        </motion.h1>

        <h1>
          {done ? (
            '직접 만들며 배우는 프론트엔드 개발자 정은성입니다'
          ) : (
            <Typical 
              steps={[
                ' ', 3000,
                '모르는 것을 두려워하지 않고', 2000,
                '직접 만들며 배우는 프론트엔드 개발자 정은성입니다', 2000,
                () => setDone(true) // 애니메이션 끝나면 텍스트로 고정
              ]}
              loop={1}
              wrapper='span'
            />
          )}
        </h1>

        <div className='intro_text'>
          <p>작은 도전이 모여</p>
          <p>저를 성장시킨다는 믿음으로</p>
          <p>매일 한 걸음씩 나아가고 있습니다.</p>
        </div>

        <motion.div
          style={{ opacity: arrowOpacity }}
          transition={{ duration: 0.5 }}
        >
          <span className='arrow'>▼</span>
        </motion.div>

      </section>
  );
});

export default Intro;