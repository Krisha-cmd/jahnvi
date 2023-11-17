import React from 'react';

import './Card.css';


export const Card = ({ src, title }) => (
  <span className='card'>
    <img className='card__blur' src={src} alt="" />
    <img className='card__img' src={src} alt="" />
    <div className='title-overlay'>{title}</div>
  </span>
);



