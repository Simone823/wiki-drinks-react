import React from 'react';

// import hero component
import Hero from '../components/Hero';

// import hero image home
import heroHome from '../assets/image/home-hero.jpg';

function Home() {
  return (
    <section id='home'>
      {/* hero */}
      <Hero img={heroHome} isOverlay={true}>
        <h1>hero text</h1>
      </Hero>
    </section>
  )
}

export default Home;