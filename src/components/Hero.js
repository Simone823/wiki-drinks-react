import React from 'react';
import '../assets/css/hero.css';

function Hero({children, img, isOverlay}) {

  return (
    <div id='hero' style={
            {
                backgroundImage: `url(${img})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }
        }
    >
        <div className={`h-full ${isOverlay ? 'hero-overlay' : ''}`}>
            {children}
        </div>
    </div>
  )
}

export default Hero;