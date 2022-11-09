import React from 'react';
import '../assets/css/pages/singleCocktail.css';
import {useParams, useNavigate} from 'react-router-dom';

// import use title custom hook
import useTitleDoc from '../customHook/useTitleDoc';

// import useFetch custom hook
import useFetch from '../customHook/useFetch';

// import arrow left icon
import { IoIosArrowBack } from "react-icons/io";

function SingleCocktail() {
  // cocktail id
  const {id} = useParams();

  // navigate
  const navigate = useNavigate();

  // use fetch custom hook get cocktail id detail
  const {isLoading, isError, data} = useFetch(`i=${id}`);

  // document title
  useTitleDoc(data && data[0] ? data[0].strDrink : 'Not Found');

  return (
    <section id='single-cocktail'>
      <div className='container mx-auto px-3 py-8'>
        {/* btn back home */}
        <div className='back-home flex items-center flex-wrap gap-4 mb-16'>
          {/* icon */}
          <div onClick={() => navigate('/')} className='icon w-7 h-7 rounded-full bg-violet-900 text-white flex items-center justify-center hover:scale-105 duration-300 cursor-pointer'>
            <IoIosArrowBack className='text-md'/>
          </div>

          {/* title */}
          <h4 className='title uppercase text-gray-500 font-bold text-sm'>Torna alla home</h4>
        </div>

        {/* cocktail detail */}
        <div className='cocktail-detail'>
          {!isLoading && isError ? (
            <div className='error-container w-2/4 bg-red-300 text-white py-4 px-3 rounded-md border-2 border-red-500'>
              <p className='error-text uppercase text-sm font-bold text-red-500'>Cocktail non disponibile!</p>
            </div>
          ) : !isLoading && !isError ? (
            <div className='wrapper grid grid-cols-1 sm:grid-cols-2 gap-11'>
              {/* img cocktail */}
              <figure className='cocktail-img rounded-md overflow-hidden shadow-2xl shadow-black/60'>
                <img className='w-full object-cover object-center' src={data[0].strDrinkThumb} alt={data[0].strDrink}/>
              </figure>

              {/* description */}
              <div className='description'>
                <h2 className='uppercase font-bold text-2xl mb-6'>{data[0].strDrink}</h2>

                {/* list tags */}
                <ul className='list-tags flex flex-wrap gap-6 mb-5'>
                  <li className='uppercase font-semibold text-gray-500 bg-gray-100 py-2 px-3 text-center rounded-lg text-xs border-2 border-gray-200'>{data[0].strAlcoholic}</li>
                  <li className='uppercase font-semibold text-gray-500 bg-gray-100 py-2 px-3 text-center rounded-lg text-xs border-2 border-gray-200'>{data[0].strCategory}</li>
                  <li className='uppercase font-semibold text-gray-500 bg-gray-100 py-2 px-3 text-center rounded-lg text-xs border-2 border-gray-200'>{data[0].strGlass}</li>
                </ul>

                {/* ingredients */}
                <div className='ingredients mb-5'>
                  <h4 className='text-gray-500 font-bold text-md mb-3'>Ingredienti:</h4>

                  {/* list ingredients */}
                  <ul className='list-ingredients list-disc ml-4'>
                    <li className={`${data[0].strIngredient1 == null ? 'hidden' : ''} mb-2 text-sm text-gray-500`}>{data[0].strMeasure1} {data[0].strIngredient1}</li>
                    <li className={`${data[0].strIngredient2 == null ? 'hidden' : ''} mb-2 text-sm text-gray-500`}>{data[0].strMeasure2} {data[0].strIngredient2}</li>
                    <li className={`${data[0].strIngredient3 == null ? 'hidden' : ''} mb-2 text-sm text-gray-500`}>{data[0].strMeasure3} {data[0].strIngredient3}</li>
                    <li className={`${data[0].strIngredient4 == null ? 'hidden' : ''} mb-2 text-sm text-gray-500`}>{data[0].strMeasure4} {data[0].strIngredient4}</li>
                    <li className={`${data[0].strIngredient5 == null ? 'hidden' : ''} mb-2 text-sm text-gray-500`}>{data[0].strMeasure5} {data[0].strIngredient5}</li>
                    <li className={`${data[0].strIngredient6 == null ? 'hidden' : ''} mb-2 text-sm text-gray-500`}>{data[0].strMeasure6} {data[0].strIngredient6}</li>
                    <li className={`${data[0].strIngredient7 == null ? 'hidden' : ''} mb-2 text-sm text-gray-500`}>{data[0].strMeasure7} {data[0].strIngredient7}</li>
                    <li className={`${data[0].strIngredient8 == null ? 'hidden' : ''} mb-2 text-sm text-gray-500`}>{data[0].strMeasure8} {data[0].strIngredient8}</li>
                    <li className={`${data[0].strIngredient9 == null ? 'hidden' : ''} mb-2 text-sm text-gray-500`}>{data[0].strMeasure9} {data[0].strIngredient9}</li>
                    <li className={`${data[0].strIngredient10 == null ? 'hidden' : ''} mb-2 text-sm text-gray-500`}>{data[0].strMeasure10} {data[0].strIngredient10}</li>
                    <li className={`${data[0].strIngredient11 == null ? 'hidden' : ''} mb-2 text-sm text-gray-500`}>{data[0].strMeasure11} {data[0].strIngredient11}</li>
                    <li className={`${data[0].strIngredient12 == null ? 'hidden' : ''} mb-2 text-sm text-gray-500`}>{data[0].strMeasure12} {data[0].strIngredient12}</li>
                    <li className={`${data[0].strIngredient13 == null ? 'hidden' : ''} mb-2 text-sm text-gray-500`}>{data[0].strMeasure13} {data[0].strIngredient13}</li>
                    <li className={`${data[0].strIngredient14 == null ? 'hidden' : ''} mb-2 text-sm text-gray-500`}>{data[0].strMeasure14} {data[0].strIngredient14}</li>
                    <li className={`${data[0].strIngredient15 == null ? 'hidden' : ''} mb-2 text-sm text-gray-500`}>{data[0].strMeasure15} {data[0].strIngredient15}</li>
                  </ul>
                </div>

                {/* instructions */}
                <div className='instructions'>
                  <h4 className='text-gray-500 font-bold text-md mb-3'>Istruzioni:</h4>
                  <p className='text-sm text-gray-500 max-w-prose'>{data[0].strInstructionsIT ? data[0].strInstructionsIT : data[0].strInstructions}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className='loading-container flex items-center justify-center'>
              <h4 className='loading-text font-bold text-violet-900'>Loading...</h4>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail;