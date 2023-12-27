// Hobbies.js
import React from 'react';
import './styles/Hobbies.css'; 

const Hobbies = () => {
  const buttonData = [
    { id: 1, color: '#c8aed5', label: 'Writing', imageUrl: '/images/Asset1.svg' },
    { id: 2, color: '#eec2cb', label: 'Logo Designing', imageUrl: '/images/Asset\ 3.svg' },
    { id: 3, color: '#9b97ce', label: 'Interior Designing', imageUrl: '/images/Asset 4.svg' },
    { id: 4, color: '#a1cdd4', label: 'Dancing', imageUrl: '/public/images/Asset 2.svg' },
  ];

  return (
    <div className="hobbies-container">
      {buttonData.map((button) => (
        <button
          key={button.id}
          className="hobby-button"
          style={{ backgroundColor: button.color }}
        >
          <div
            className="button-image"
            style={{ backgroundImage: `url('${button.imageUrl}')` }}
          />
          {button.label}
        </button>
      ))}
    </div>
  );
};


export default Hobbies;
