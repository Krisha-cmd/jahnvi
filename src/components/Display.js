// src/components/Main.js
import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import './styles/Display.css';

const Display = () => {
  const styles = useSpring({
    loop: { reverse: true },
    from: { y: 0 },
    to: { y: 50 },
    config: config.molasses,
  });

  const styles1 = useSpring({
    loop: { reverse: true },
    from: { y: 0 },
    to: { y: 30 },
    config: config.molasses,
  });

  return (
    <div className='bubble-container'>
      <animated.div
      className='main-container' style={{ ...styles }}/>
      <animated.div
      className='main2-container' style={{ ...styles1 }}/>
    </div>

  );
};

export default Display;
