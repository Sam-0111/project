import React from 'react';
import { GoSearch } from 'react-icons/go';
import img from './logo.webp'
import imgBlack from './logo-black.webp'
import { FaRegUser } from "react-icons/fa"
import { BsCart } from "react-icons/bs"
import './Header.css'
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import { Context } from '../Context/Context';
import { RiMenu2Line } from 'react-icons/ri'
import Second from '../Second/Second';
import Search from '../Search/Search';
import Cart from '../Cart/Cart';

const Header = () => {

    const [mobileWindow, setMobileWindow] = useState(false);
    // const [fixedNavbarStatus, setNavbarStatus] = useState(false)
    const [secondVisible, setVisible] = useState(false)
    const [searchVisible, setSearchVisible] = useState(false)
    const [cartVisible, setCartVisible] = useState(false)




    const [headerFixed, setHeaderFixed] = useState(false)

    useEffect(() => {
       window.addEventListener('scroll' , (e)=>{
            if(window.scrollY >= 300){
                setHeaderFixed(true)
            }else{
                setHeaderFixed(false)
            }
       })
        
    })


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
            setCartVisible, cartVisible, secondVisible, setVisible, searchVisible, setSearchVisible
        }}>
            <div className={headerFixed ? 'header--main header--fixed ' : ''}>
                <div className='header--main--wrapper'>
                    <div className='header--main--search'>

                        {
                            mobileWindow ?
                                <RiMenu2Line
                                    onClick={() => { setVisible(true) }}
                                />
                                : null
                        }
                        {
                            !mobileWindow ?
                                <GoSearch
                                    onClick={() => setSearchVisible(true)}
                                />
                                : null
                        }

                    </div>
                    <div className='header--main--logo'>
                        {
                            headerFixed?
                            <img src={imgBlack} alt="logo" />
                            :
                        <img src={img} alt="logo" />
                        }
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
                            <BsCart
                                onClick={() => {
                                    setCartVisible(true)
                                }} />
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
            <Search />
            <Cart />

        </Context.Provider>
    )
}

export default Header