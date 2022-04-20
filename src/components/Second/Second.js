import React from 'react'
import { FaTimes } from 'react-icons/fa'
import './Second.css'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../Context/Context'

import { AiOutlineInstagram } from 'react-icons/ai'
import { ImFacebook } from 'react-icons/im'
import { BsTwitter } from 'react-icons/bs'



const Second = () => {

    const [first, setFirst] = useState(true)
    const [second, setSecond] = useState(true)
    const [third, setThird] = useState(true)
    const [fourth, setFourth] = useState(true)
    const [five, setFive] = useState(true)


    // subbbbbbbs
    const [subOne, setSubOne] = useState(false)
    const [subTwo, setSubTwo] = useState(false)
    const [subThree, setSubThree] = useState(false)
    const [subFour, setSubFour] = useState(false)


    const { secondVisible, setVisible } = useContext(Context)
    console.log(secondVisible);

    return (
        <div className={secondVisible ? 'second--navbar active' : 'second--navbar'}>
            <div className='close--button--area'>
                <div className='close--button'>
                    <FaTimes onClick={() => { setVisible(false) }} />
                </div>
            </div>

            <div className='second--box'>
                <ul className='second--scroll'>
                    <li className='second--nav--item'>
                        <a >HOME</a>
                    </li>
                    <li className='second--nav--item dropdown'>

                        <div className='dropdown--box'>
                            <div><a>NEW ARRIVALS</a></div>  <div
                                className='icon'
                                onClick={() => { setFirst(!first) }}><MdKeyboardArrowDown className={first ? ' rotate' : ""} /></div>
                        </div>

                        <div className={!first ? 'dropdown--submenu' : 'dropdown--submenu hidden'}>
                            <li>Men's New Arrivals</li>
                            <li>Women's New Arrivals</li>
                        </div>
                    </li>


                    <li className='second--nav--item dropdown'>
                        <div className='dropdown--box'>
                            <div><a>MENS</a></div>

                            <div
                                className='icon'
                                onClick={() => setSecond(!second)}><MdKeyboardArrowDown className={second ? ' rotate' : ""} /></div>
                        </div>

                        <div className={!second ? 'dropdown--submenu' : 'dropdown--submenu hidden'}>
                            <div className='dropdown--wrap'>
                                <span>Shop by style</span>
                                <span
                                    className='sub-submenu--arrow'
                                    onClick={() => {
                                        setSubOne(!subOne)
                                    }}
                                ><MdKeyboardArrowDown className={subOne ? ' rotate' : ""} />
                                </span>


                                <div className={subOne ? 'sub active' : 'sub'}>
                                    <li>Jackets</li>
                                    <li>Vests</li>
                                    <li>Layers</li>
                                    <li>Bottoms</li>
                                    <li>Accessories</li>
                                </div>


                            </div>
                            <li>
                                <span>Shop by perfomance</span><span className='sub-submenu--arrow'
                                    onClick={() => {
                                        setSubTwo(!subTwo)
                                    }}><MdKeyboardArrowDown className={subTwo ? ' rotate' : ""} /></span>


                                <div className={subTwo ? 'sub active' : 'sub'}>
                                    <li>Cold Weather</li>
                                    <li>Tech Layers</li>
                                    <li>Windproof</li>
                                    <li>Waterproof</li>
                                    <li>Wicking</li>
                                </div>
                            </li>
                            <li>Best sellers</li>
                            <li>Big & tall</li>
                        </div>
                    </li>


                    <li className='second--nav--item dropdown'>
                        <div className='dropdown--box'>
                            <div><a>WOMENS</a></div>
                            <div
                                className='icon'
                                onClick={() => setThird(!third)}><MdKeyboardArrowDown className={third ? ' rotate' : ""} /></div>
                        </div>
                        <div className={!third ? 'dropdown--submenu' : 'dropdown--submenu hidden'}>

                            <div>
                                <span>Shop by style</span>
                                <span
                                    className='sub-submenu--arrow'
                                    onClick={() => {
                                        setSubThree(!subThree)
                                    }}
                                ><MdKeyboardArrowDown className={subThree ? ' rotate' : ""} />
                                </span>
                                <div className={subThree ? 'sub active' : 'sub'}>
                                    <li>Jackets</li>
                                    <li>Vests</li>
                                    <li>Layers</li>
                                    <li>Bottoms</li>
                                    <li>Accessories</li>
                                </div>
                            </div>
                            <li><span>Shop by perfomance</span><span
                                className='sub-submenu--arrow'
                                onClick={() => {
                                    setSubFour(!subFour)
                                }}
                            ><MdKeyboardArrowDown className={subFour ? ' rotate' : ""} /></span>


                                <div className={subFour ? 'sub active' : 'sub'}>
                                    <li>Cold Weather</li>
                                    <li>Tech Layers</li>
                                    <li>Windproof</li>
                                    <li>Waterproof</li>
                                    <li>Wicking</li>
                                </div>
                            </li>
                            <li>Best sellers</li>
                        </div>
                    </li>
                    <li className='second--nav--item dropdown'>
                        <div className='dropdown--box'>
                            <div><a>FEATURED</a></div>  <div className='icon'
                                onClick={() => setFourth(!fourth)}><MdKeyboardArrowDown className={fourth ? ' rotate' : ""} /></div>
                        </div>
                        <div className={!fourth ? 'dropdown--submenu' : 'dropdown--submenu hidden'}>
                            <li>Men's 2022 U.S. Open Championship</li>
                            <li>Women's 2022 U.S. Open Championship</li>
                        </div>
                    </li>
                    <li className='second--nav--item dropdown'>
                        <div className='dropdown--box'>
                            <div><a>FEATURED</a></div>  <div className='icon' onClick={() => setFive(!five)}><MdKeyboardArrowDown className={five ? ' rotate' : ""} /></div>
                        </div>

                        <div className={!five ? 'dropdown--submenu' : 'dropdown--submenu hidden'}>
                            <li>Men's Sale</li>
                            <li>Women's Sale</li>
                        </div>
                    </li>
                    <li className='second--nav--item '>
                        <a>OUR TECHNOLOGY</a>
                    </li>
                    <li className='second--nav--item'>
                        <a>ZERO+ REWARDS</a>
                    </li>
                    <p className='loginText'>Log in</p>
                    <div className='contacts'>
                        <div ><AiOutlineInstagram /></div>
                        <div ><ImFacebook /></div>
                        <div ><BsTwitter /></div>
                    </div>
                </ul>

            </div>

        </div>
    )
}

export default Second