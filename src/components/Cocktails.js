import React from 'react';

// import cocktail component
import Cocktail from './Cocktail';

function Cocktails({data}) {
    return (
        <ul className='list-cockctails grid gap-8 gap-y-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center'>
            {/* map data */}
            {data.map((el) => {
                return(
                    <li key={el.idDrink} className='w-100 shadow-2xl shadow-black/50 rounded-sm overflow-hidden'>
                        <Cocktail name={el.strDrink} image={el.strDrinkThumb}/>
                    </li>
                );
            })}
        </ul>
    )
}

export default Cocktails;