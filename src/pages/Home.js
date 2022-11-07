import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';

// import hero component
import Hero from '../components/Hero';

// import hero image home
import heroHome from '../assets/image/home-hero.jpg';

// animation hero home
import animationData from '../assets/animation/heroHome.json';

function Home() {
  return (
    <section id='home'>
      {/* hero */}
      <Hero img={heroHome} isOverlay={true}>
        <div className='container mx-auto h-full'>  
          <div className='wrapper h-full grid grid-cols-1 md:grid-cols-2 place-items-center md:justify-center gap-8'>
            {/* home hero text  */}
            <div className='hero-text-home'>
              <h2 className='bran-name uppercase text-pink-500 text-3xl font-bold mb-4'>Wiki Drink</h2>
              <h4 className='text-sm font-bold uppercase mb-8'>Tutti i cocktail del mondo a portata di click</h4>
              <p className='text-gray-300 text-sm max-w-lg mb-8 font-semibold'>
                Wiki Drink è un database internazionale che mette a tua disposizione, in maniera 
                <span className='text-pink-500'> Gratuita</span>, le ricette dei più importanti e diffusi cocktail al mondo.
              </p>

              {/* btn link */}
              <Link to='/about' className='uppercase block max-w-max bg-pink-500 py-3 px-6 rounded-full text-xs font-bold hover:bg-violet-500 hover:scale-105 duration-300'>
                Scopri di più
              </Link>
            </div>

            {/* home hero img */}
            <div className='hero-icon-home'>
              {/* icon lottie animation */}
              <div className='frame w-2/5 bg-violet-900 rounded-full mx-auto'>
                <Lottie animationData={animationData} loop={true} />
              </div>
            </div>
          </div>
        </div>
      </Hero>
    </section>
  )
}

export default Home;