import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './styles/AnimatedText.css'

const AnimatedText = () => {
  return (
    <TypeAnimation
        sequence={[
          `Jai Jinendra`,
          1000,
          'Hello! "Dhi" Amantes',
          1000,
          'Witness the site of, fictional reality and colourful visuals',
          1000,
          'where words come to life and design breathes the inspiration',
          1000
        ]}
        speed={50}
        style={{ whiteSpace: 'pre-line', fontSize: '2em' }}
        repeat={Infinity}
      />
  );
};

export default AnimatedText;
