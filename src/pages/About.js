import React from 'react';

// import hero component
import Hero from '../components/Hero';

// import about hero img
import aboutHero from '../assets/image/about-hero.jpg';

function About() {
  return (
    <section id="about">
        {/* hero */}
        <Hero img={aboutHero} isOverlay={true}>
            <div className='hero-text-about flex items-center justify-center h-full max-w-lg mx-auto text-center'>
                <h3 className='text-3xl leading-10 italic tracking-wider py-3'>"Grande è la fortuna di colui che possiede una buona bottiglia, un buon libro, un buon amico."</h3>
            </div>
        </Hero>
    </section>
  );
}

export default About;