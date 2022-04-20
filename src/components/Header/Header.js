import React from 'react';
import { GoSearch } from 'react-icons/go';
import img from './logo.webp'
import { FaRegUser } from "react-icons/fa"
import { BsCart } from "react-icons/bs"
import './Header.css'
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import { Context } from '../Context/Context';
import { RiMenu2Line } from 'react-icons/ri'
import Second from '../Second/Second';

const Header = () => {

    const [mobileWindow, setMobileWindow] = useState(false);
    const [fixedNavbarStatus, setNavbarStatus] = useState((false))
    const [secondVisible, setVisible] = useState(false)

    useEffect(() => {
        function resize() {
            let windowWidth = window.innerWidth;
            if (windowWidth <= 767) {
                setMobileWindow(true)
            } else {
                setMobileWindow(false)
            }
        }
        resize()
        window.addEventListener('resize', resize)

    })
    return (

        <Context.Provider value={{
            fixedNavbarStatus, secondVisible, setVisible
        }}>
            <div className='header--main'>
                <div className='header--main--wrapper'>
                    <div className='header--main--search'>

                        {
                            mobileWindow ?
                                <RiMenu2Line
                                    onClick={()=>{setVisible(true)}}
                                />
                                : null
                        }
                        {
                            !mobileWindow ?
                                <GoSearch />
                                : null
                        }

                    </div>
                    <div className='header--main--logo'>
                        <img src={img} alt="logo" />
                    </div>
                    <div className='header--main--user__buttons'>
                        <span>
                            {
                                !mobileWindow ?
                                    <FaRegUser />
                                    : null
                            }
                            {
                                mobileWindow ?
                                    <GoSearch />
                                    : null
                            }
                        </span>
                        <span>
                            <BsCart />
                        </span>
                    </div>
                </div>
                {
                    !mobileWindow ?
                        <Navbar />
                        : null
                }
                {mobileWindow ?
                    
                    <Second /> :
                    null
                }

            </div>
        </Context.Provider>
    )
}

export default Header