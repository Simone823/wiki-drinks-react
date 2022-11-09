import React from 'react';
import {Link} from 'react-router-dom';
import Lottie from "lottie-react";
import animationData from '../assets/animation/notFound.json';

// import use title custom hook
import useTitleDoc from '../customHook/useTitleDoc';

function NotFound() {
  // document title
  useTitleDoc('404');

  return (
    <section id="not-found">
        <div className='container mx-auto py-5 px-3 flex flex-col items-center gap-y-5'>
            {/* title */}
            <h3 className='uppercase text-center font-bold text-xl mt-4'>Pagina non trovata</h3>

            {/* icon lottie animation */}
            <Lottie className="max-w-sm" animationData={animationData} loop={true}/>

            {/* link back */}
            <Link to="/" className='text-xs font-bold uppercase rounded-xl text-white bg-pink-500 py-3 px-3 block max-w-max hover:scale-105 hover:bg-pink-700 duration-300'>Torna alla Home</Link>
        </div>
    </section>
  )
}

export default NotFound;