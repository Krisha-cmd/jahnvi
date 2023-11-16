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

  return (
    <animated.div
    className='main-container' style={{ ...styles }}/>

  );
};

export default Display;
