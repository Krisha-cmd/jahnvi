// Hobbies.js
import React from 'react';
import './styles/Hobbies.css'; 

const Hobbies = () => {
  const buttonData = [
    { id: 1, color: '#c8aed5', label: 'Writing', imageUrl: '/public/images/Asset1.svg' },
    { id: 2, color: '#eec2cb', label: 'Logo Design', imageUrl: '/images/Asset1.svg' },
    { id: 3, color: '#9b97ce', label: 'Interior', imageUrl: '/images/Asset 4.svg' },
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
            id={"i"+button.id}
          >
            <span>
          {button.label}

            </span>
          </div>
          {/* {button.label} */}
        </button>
      ))}
    </div>
  );
};

export default Hobbies;
