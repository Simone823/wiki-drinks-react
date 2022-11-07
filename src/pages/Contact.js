import React from 'react';
import '../assets/css/pages/contact.css';

// import hero component
import Hero from '../components/Hero';

// import img contact hero
import contactHero from '../assets/image/Contact-hero.png';

function Contact() {
  return (
    <section id='contact'>
        {/* hero */}
        <Hero img={contactHero} isOverlay={false}>
            <div className='container mx-auto pt-4 pb-16 px-3'>
                {/* title */}
                <h2 className='font-bold text-center text-3xl mt-10 mb-4'>Vorresti aggiungere un cocktail?</h2>
                <h6 className='text-center max-w-sm mx-auto text-gray-500 mb-8'>Il nostro team è sempre disponibile per valutare possibili nuove ricette ed ad aggiungerle al nostro database</h6>

                {/* form */}
                  <form action="https://formspree.io/f/mkneknyn" method="POST" className='card bg-white py-8 px-6 md:px-16 rounded-md shadow-2xl shadow-black/50 max-w-5xl mx-auto'>
                    {/* name */}
                    <div className='form-group flex flex-col gap-y-1 mb-6'>
                        <label htmlFor='name' className='text-violet-900 uppercase font-bold text-sm'>Nome</label>
                        <input className='text-xs py-2 text-gray-500' type='text' name='name' id='name' placeholder='Inserisci il tuo nome' />
                    </div>
                    
                    {/* surname */}
                    <div className='form-group flex flex-col gap-y-1 mb-6'>
                        <label htmlFor='surname' className='text-violet-900 uppercase font-bold text-sm'>Cognome</label>
                        <input className='text-xs py-2 text-gray-500' type='text' name='surname' id='surname' placeholder='Inserisci il tuo cognome' />
                    </div>

                    {/* email */}
                    <div className='form-group flex flex-col gap-y-1 mb-6'>
                        <label htmlFor='email' className='text-violet-900 uppercase font-bold text-sm'>Email</label>
                        <input className='text-xs py-2 text-gray-500' type='email' name='email' id='email' placeholder='Inserisci la tua email' />
                    </div>

                    {/* phone */}
                    <div className='form-group flex flex-col gap-y-1 mb-6'>
                        <label htmlFor='phone' className='text-violet-900 uppercase font-bold text-sm'>Telefono</label>
                        <input className='text-xs py-2 text-gray-500' type='tel' name='phone' id='phone' placeholder='Inserisci il tuo n° di telefono' />
                    </div>

                    {/* text */}
                    <div className='form-group flex flex-col gap-y-1 mb-8'>
                        <label htmlFor='text' className='text-violet-900 uppercase font-bold text-sm'>La tua ricetta</label>
                        <textarea className='text-xs py-2 text-gray-500 max-h-16 resize-none' id='text' name='text' placeholder='Descrivi la tua ricetta'></textarea>
                    </div>

                    {/* btn submit */}
                    <div className='submit'>
                        <button type='submit' className='text-white mx-auto uppercase block max-w-max bg-pink-500 py-3 px-6 rounded-full text-xs font-bold hover:bg-violet-500 hover:scale-105 duration-300'>
                            Invia ricetta
                        </button>
                    </div>
                </form>
            </div>
        </Hero>
    </section>
  )
}

export default Contact;