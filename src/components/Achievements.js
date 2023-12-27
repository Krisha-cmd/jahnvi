// Achievements.js

import React, { useState } from 'react';
import './styles/Achievements.css'; 
import img1 from '../images/theperfectmelange.jpg'
import img2 from '../images/published works.jpg'
import img3 from '../images/dreamcatchers.webp'
import img4 from '../images/youmeandlove.jpg'
import img5 from '../images/consanos.jpg'
import img6 from '../images/loveyoutoinfinity.jpg'
import img7 from '../images/thespell.webp'
import img8 from '../images/Wizard.jpg'

const books = [
  { image: img1, title: 'The Perfect Melange', description: 'A book about...' },
  { image: img2, title: 'Hey! Dearest Stranger', description: 'Another book about...' },
  { image: img3, title: 'Dreamcatchers', description: 'Yet another book about...' },
  { image: img4, title: 'You, Me and Love', description: 'Yet another book about...' },
  { image: img5, title: 'The long for the Consanos', description: 'Yet another book about...' },
  { image: img6, title: 'Love you to Infinity', description: 'Yet another book about...' },
  { image: img7, title: 'The Spell in the Dusk', description: 'Yet another book about...' },
  { image: img8, title: 'Verse Wizard', description: 'Yet another book about...' },

];

const Achievements = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="color-gallery-container">
        <div className='publications'><h1>Publications</h1></div>
      <div className="grid-container-a">
        {books.map((book, index) => (
          <img
            src={book.image}
            key={index}
            className="grid-item"
            onClick={() => handleBookClick(book)}
            alt={book.title}
          />
        ))}
      </div>
      <div className="selected-color-info">
        {selectedBook && (
          <div className="info">
            <div className='selected-book'>
                <img
                className="selected-color-box"
                src={selectedBook.image}
                alt={selectedBook.title}
                />
            </div>
            <div className='infomatics'>
                <span>
              <h2>{selectedBook.title}</h2>

                </span>
              <span>

              <p>{selectedBook.description}</p>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Achievements;
