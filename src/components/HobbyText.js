import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './styles/AnimatedText.css'

const HobbyText = () => {
  return (
    <TypeAnimation
        sequence={[
            'I am an ambivert writer and designer, with a plethora of hobbies and skills, residing deep within me.',
          1000,
          'While I be fond of strolls over a mountain or a glance at an ocean',
          1000,
          'As I adapt to these every changing breeze and tressure the exchange of words with everyone or anyone I can.',
          1000
        ]}
        speed={40}
        style={{ whiteSpace: 'pre-line', fontSize: '2em' }}
        repeat={Infinity}
      />
  );
};


export default HobbyText;
