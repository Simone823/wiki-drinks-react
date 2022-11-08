import React, {useState} from 'react';
import '../assets/css/pages/home.css';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import { IoIosSearch } from "react-icons/io";

// import hero component
import Hero from '../components/Hero';

// import hero image home
import heroHome from '../assets/image/home-hero.jpg';

// animation hero home
import animationData from '../assets/animation/heroHome.json';

function Home() {
  // drink input set drink input
  const [drinkInput, setDrinkInput] = useState('margarita');

  return (
    <section id='home'>
      {/* hero */}
      <Hero img={heroHome} isOverlay={true}>
        <div className='container mx-auto h-full overflow-hidden px-3'>  
          <div className='wrapper h-full grid grid-cols-1 md:grid-cols-2 place-items-center gap-8'>
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

      {/* container */}
      <div className='container mx-auto px-3 py-8'>
        {/* search bar */}
        <div className='search-bar'>
          <form className='flex items-center gap-4 flex-wrap'>
            {/* drink */}
            <label htmlFor='drink' className='font-bold text-lg'>Cerca il tuo drink</label>

            {/* input & btn submit */}
            <div className='input-search'>
              <input onChange={(e) => setDrinkInput(e.target.value)} value={drinkInput} className='rounded-full py-2 px-4 text-xs text-gray-500' type='text' name='drink' id='drink' placeholder='Inserisci il nome del drink' /> 
              
              {/* btn submit */}
              <button type='submit'>
                <IoIosSearch className='text-xl text-pink-500'/>
              </button>
            </div>
          </form>

          {/* result */}
          <h5 className='result text-xs font-bold text-gray-500'>Risultati: 0</h5>
        </div>
      </div>
    </section>
  )
}

export default Home;