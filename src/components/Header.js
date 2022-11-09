import React, {useState, createContext} from 'react';
import '../assets/css/components/header.css';

import {Link} from 'react-router-dom';

// import sidebar
import Sidebar from './Sidebar';

// header context
export const HeaderContext = createContext();

function Header() {
    // isOpen menu
    const [isOPenMenu, setIsOpenMenu] = useState(false);  

    // open menu
    const openMenu = () => (e) => {
        // set isOPenMenu true
        setIsOpenMenu(true);
    }

    // close menu
    const closeMenu = () => (e) => {
        // set isOPenMenu false
        setIsOpenMenu(false);
    }

    return (
        // header
        <HeaderContext.Provider value={{isOPenMenu, closeMenu}}>
            <header className='h-20 flex items-center shadow-md'>
                <div className='container mx-auto px-3'>
                    <div className='wrapper flex justify-between items-center'>

                        {/* brand */}
                        <a href='/' className='uppercase text-violet-900 font-bold text-xl'>Wiki Drink</a>

                        {/* links */}
                        <ul className='list-links-menu flex md:gap-x-10 lg:gap-x-20'>
                            <li>
                                <Link to="/" className='nav-link font-bold uppercase text-sm flex items-center gap-x-4'>
                                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" className="nav-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path>
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className='nav-link font-bold uppercase text-sm flex items-center gap-x-4'>
                                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" className="nav-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path fill="none" d="M0 0h24v24H0z"></path><path d="M12 11a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5zm-6.712 3.006a6.983 6.983 0 0 0-.28 1.65L5 16v6H2v-4.5a3.5 3.5 0 0 1 3.119-3.48l.17-.014zm13.424 0A3.501 3.501 0 0 1 22 17.5V22h-3v-6c0-.693-.1-1.362-.288-1.994zM5.5 8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z">
                                            </path>
                                        </g>
                                    </svg>
                                    Chi Siamo
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className='nav-link font-bold uppercase text-sm flex items-center gap-x-4'>
                                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" className="nav-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M924.3 338.4a447.57 447.57 0 0 0-96.1-143.3 443.09 443.09 0 0 0-143-96.3A443.91 443.91 0 0 0 512 64h-2c-60.5.3-119 12.3-174.1 35.9a444.08 444.08 0 0 0-141.7 96.5 445 445 0 0 0-95 142.8A449.89 449.89 0 0 0 65 514.1c.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8a447.72 447.72 0 0 0 199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3A443.2 443.2 0 0 0 827 830.5c41.2-40.9 73.6-88.7 96.3-142 23.5-55.2 35.5-113.9 35.8-174.5.2-60.9-11.6-120-34.8-175.6zM312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.4 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48z">
                                        </path>
                                    </svg>
                                    Contattaci
                                </Link>
                            </li>
                        </ul>

                        {/* social list */}
                        <ul className='social-list flex items-center gap-x-8'>
                            <li>
                                <a href='/' className='nav-social-icon'>
                                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" className="nav-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z">
                                        </path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href='/' className='nav-social-icon'>
                                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" className="nav-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z">
                                        </path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href='/' className='nav-social-icon'>
                                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" className="nav-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z">
                                        </path>
                                    </svg>
                                </a>
                            </li>
                        </ul>

                        {/* btn hamburger menu */}
                        <button onClick={openMenu()} type='button' className='btn-menu hover:rotate-90 duration-300'>
                            <i className="fas fa-bars text-violet-900 text-xl"></i>
                        </button>

                        {/* sidebar */}
                        <Sidebar/>

                    </div>
                </div>
            </header>
        </HeaderContext.Provider>
    )
}

export default Header;