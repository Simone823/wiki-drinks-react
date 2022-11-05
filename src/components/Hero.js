import React from 'react';
import '../assets/css/components/hero.css';

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

      {/* hero text */}
      <div className={`h-full px-3 ${isOverlay ? 'hero-overlay' : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default Hero;