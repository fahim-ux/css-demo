import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaShoppingCart, FaGithub, FaFacebookF, FaInstagramSquare } from 'react-icons/fa';



const CSSNAV = () => {
    return (
        <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-teal-200 py-4 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-5 ">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <button
                    className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                    type="button"
                    data-twe-collapse-init
                    data-twe-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent1"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className='text-rose-600'>
                        <FaBars className='w-12 h-11' />
                    </span>
                </button>

                <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContent1" data-twe-collapse-item>
                    <NavLink
                        to="/dashboard"
                        className="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                    >
                        <img
                            src='../src/assets/Images/logo.png'
                            className='h-10 w-auto border-4 border-rose-600 rounded-full'
                            alt="TE Logo"
                            loading="lazy"
                        />
                    </NavLink>

                    <ul className="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
                        data-twe-navbar-nav-ref>
                        <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                            <NavLink
                                to="/dashboard"
                                className="text-white bg-black hover:bg-rose-900 hover:text-white rounded-md px-4 py-3"
                            >
                                Team
                            </NavLink>
                        </li>
                        <li className="mb-4 lg:mb-0 lg:pe-2 " data-twe-nav-item-ref>
                            <NavLink
                                to="/dashboard"
                                className="text-white bg-black hover:bg-rose-900 hover:text-white rounded-md px-4 py-3"
                            >
                                Events
                            </NavLink>
                        </li>
                        <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                            <NavLink
                                to="/dashboard"
                                className="text-white bg-black hover:bg-rose-900 hover:text-white rounded-md px-4 py-3"
                            >
                                AboutUs
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="relative flex items-center">
                    <NavLink className="me-4 text-neutral-600 dark:text-white" to="#">
                        <FaGithub className="w-auto h-10 text-black" />
                    </NavLink>
                    <NavLink className="me-4 text-neutral-600 dark:text-white" to="#">
                        <FaFacebookF className="w-auto h-10 text-facebookBlue" />
                    </NavLink>
                    <NavLink className="me-4 text-neutral-600 dark:text-white" to="#">
                        <FaInstagramSquare className="w-auto h-10 text-instagram" />
                    </NavLink>

                </div>
            </div>
        </nav>
    );
};

export default CSSNAV;
