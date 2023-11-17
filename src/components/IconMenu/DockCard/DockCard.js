import React, { useState, useRef, useEffect } from 'react';
import { animated, useIsomorphicLayoutEffect, useSpringValue, interpolate } from '@react-spring/web';

import { useMousePosition } from '../hooks/useMousePosition';
import { useWindowResize } from '../hooks/useWindowResize';

import { useDock } from '../Dock/DockContext';

import './DockCard.css';

const isPhone = () => {
  // Define your threshold based on your requirements
  const phoneThreshold = 600;
  return window.innerWidth <= phoneThreshold;
};

const INITIAL_WIDTH = 120;

export const DockCard = ({ children }) => {

  const deviceX = isPhone() ? 0 : -25;
  const cardRef = useRef(null);
  const [elCenterX, setElCenterX] = useState(0);

  const size = useSpringValue(INITIAL_WIDTH, {
    config: {
      mass: 0.1,
      tension: 320,
    },
  });

  const opacity = useSpringValue(0);
  const y = useSpringValue(0, {
    config: {
      friction: 29,
      tension: 238,
    },
  });

  const dock = useDock();

  useMousePosition(
    {
      onChange: ({ value }) => {
        const mouseX = value.x;

        if (dock.width > 0) {
          const transformedValue =
            INITIAL_WIDTH +
            36 * Math.cos((((mouseX - elCenterX - deviceX) / dock.width) * Math.PI) / 2) ** 12;

          if (dock.hovered) {
            size.start(transformedValue);
          }
        }
      },
    },
    [elCenterX, dock]
  );

  useIsomorphicLayoutEffect(() => {
    if (!dock.hovered) {
      size.start(INITIAL_WIDTH);
    }
  }, [dock.hovered]);

  useWindowResize(() => {
    const { x } = cardRef.current.getBoundingClientRect();
    setElCenterX(x + INITIAL_WIDTH / 2);
  });

  const timesLooped = useRef(0);
  const timeoutRef = useRef();
  const isAnimating = useRef(false);

  const handleClick = () => {
    if (!isAnimating.current) {
      isAnimating.current = true;
      opacity.start(0.5);

      timesLooped.current = 0;

      y.start(-INITIAL_WIDTH / 4, {
        loop: () => {
          if (3 === timesLooped.current++) {
            timeoutRef.current = setTimeout(() => {
              opacity.start(0);
              y.set(0);
              isAnimating.current = false;
              timeoutRef.current = undefined;
            }, 1800);
            y.stop();
          }
          return { reverse: true };
        },
      });
    } else {
      clearTimeout(timeoutRef.current);
      opacity.start(0);
      y.start(0);
      isAnimating.current = false;
    }
  };

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <div className='dock-card-container'>
      <animated.button
        ref={cardRef}
        className='dock-card'
        onClick={handleClick}
        style={{
          width: size,
          height: interpolate([size], (s) => `${s / 2}px`),
          y,
        }}
      >
        {children}
      </animated.button>
      <animated.div className='dock-dot' style={{ opacity }} />
    </div>
  );
};
