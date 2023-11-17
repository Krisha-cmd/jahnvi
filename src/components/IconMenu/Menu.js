
import React from 'react';
import { Card } from './Card/Card';
import { Dock } from './Dock/Dock';
import { DockCard } from './DockCard/DockCard';
import { DockDivider } from './DockDivider/DockDivider';

import './Menu.css';

const GRADIENTS = [
  { src: 'https://products.ls.graphics/mesh-gradients/images/03.-Snowy-Mint_1-p-130x130q80.jpeg', title: 'Hobbies' },
  { src: 'https://products.ls.graphics/mesh-gradients/images/04.-Hopbush_1-p-130x130q80.jpeg', title: 'Achievements' },
  { src: 'https://products.ls.graphics/mesh-gradients/images/06.-Wisteria-p-130x130q80.jpeg', title: 'Works' },
  { src: 'https://products.ls.graphics/mesh-gradients/images/09.-Light-Sky-Blue-p-130x130q80.jpeg', title: 'Contact' },
  // Add more gradients with titles as needed
];

export default function Menu() {
  return (
    <div className='body'>
      <div className='menu'></div>
      <Dock>
        {GRADIENTS.map(({ src, title }, index) =>
          src ? (
            <DockCard key={src}>
              <Card src={src} title={title} />
            </DockCard>
          ) : (
            <DockDivider key={index} />
          )
        )}
      </Dock>
    </div>
  );
}
