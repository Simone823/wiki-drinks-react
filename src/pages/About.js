import React from 'react';
import '../assets/css/pages/about.css';

// import hero component
import Hero from '../components/Hero';

// import about hero img
import aboutHero from '../assets/image/about-hero.jpg';

// import cards about data
import { valueCards } from '../utils/info';

function About() {
  return (
    <section id="about">

      {/* hero */}
      <Hero img={aboutHero} isOverlay={true}>
        <div className='hero-text-about flex items-center justify-center h-full max-w-lg mx-auto text-center'>
          <h3 className='text-3xl leading-10 italic tracking-wider py-3'>"Grande è la fortuna di colui che possiede una buona bottiglia, un buon libro, un buon amico."</h3>
        </div>
      </Hero>

      {/* about */}
      <div className='about bg-gray-100'>
        <div className='container mx-auto px-3 py-5'>
          {/* title */}
          <h3 className='uppercase text-violet-900 font-bold text-center text-2xl mb-8'>Il nostro progetto</h3>

          {/* cards */}
          <div className='cards-wrapper grid place-items-center grid-cols-1 md:grid-cols-3 gap-8'>
            {valueCards.map((card) => {
              return(
                // card
                <div className='card h-full rounded flex flex-col items-center text-center gap-4 py-5 px-5 max-w-max' key={card.title}>
                  <h4 className='font-bold text-xl'>{card.title}</h4>

                  {/* icon */}
                  <div className='wrapper-icon'>
                    {card.icon}
                  </div>

                  {/* card text */}
                  <p className='card-text max-w-xs text-sm'>{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;