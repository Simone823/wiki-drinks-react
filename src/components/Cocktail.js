import React from 'react';
import '../assets/css/components/cocktail.css';
import {IoMdPaper} from 'react-icons/io';

import { Link } from 'react-router-dom';


function Cocktail({id, name, image}) {
  return (
    <div className='wrapper-cocktail w-100 h-72'>
      {/* img */}
      <div className='img-cocktail max-w-100 h-full'>
        <img className='object-cover object-center' src={image} alt={name}/>
      </div>

      {/* hover container */}
      <div className='text text-white w-full py-4 px-3 bg-black/80 flex gap-1 justify-between items-center flex-wrap'>
        <h6 className='font-bold text-sm'>{name}</h6>
        <Link to={`/cocktail/${id}`} className='font-bold text-xs text-pink-500 flex gap-2 hover:text-violet-500 duration-300 max-w-max'>
          Ricetta
          <IoMdPaper />
        </Link>
      </div>
    </div>
  )
}

export default Cocktail;