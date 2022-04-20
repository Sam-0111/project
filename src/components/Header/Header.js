import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import img from './logo.webp'
import { FaRegUser } from "react-icons/fa"
import { BsCart } from "react-icons/bs"
import './Header.css'
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';

const Header = () => {

    const [mobileWindow, setMobileWindow] = useState(false);
    useEffect(() => {
        function resize(params) {
            let windowWidth = window.innerWidth;
            if (windowWidth <= 767) {
                setMobileWindow(true)
            } else {
                setMobileWindow(false)
            }
        }
        window.addEventListener('resize', resize)
        
    })
    return (
        <div className='header--main'>
            <div className='header--main--wrapper'>
                <div className='header--main--search'>
                    <RiSearchLine />
                </div>
                <div className='header--main--logo'>
                    <img src={img} alt="logo" />
                </div>
                <div className='header--main--user__buttons'>
                    <span>
                        <FaRegUser />
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


        </div>
    )
}

export default Header