import React from 'react'
import { FaTimes } from 'react-icons/fa'
import './Second.css'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../Context/Context'


const Second = () => {

    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const [fourth, setFourth] = useState(false)
    const [five, setFive] = useState(false)


    const {  secondVisible  , setVisible} = useContext(Context)
    console.log(secondVisible);

    return (
        <div className={secondVisible?'second--navbar active' : 'second--navbar'}>
            <div className='close--button--area'>
                <div className='close--button'>
                    <FaTimes onClick={()=>{setVisible(false)}}/>
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
                            <ul>Shop by style</ul>
                            <li>Shop by perfomance</li>
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
                            <ul>Shop by style</ul>
                            <li>Shop by perfomance</li>
                            <li>Best sellers</li>
                        </div>
                    </li>
                    <li className='second--nav--item dropdown'>
                        <div className='dropdown--box'>
                            <div><a>FEATURED</a></div>  <div className='icon'
                            onClick={() => setFourth(!fourth)}><MdKeyboardArrowDown className={fourth ? ' rotate' : ""}/></div>
                        </div>
                        <div className={!fourth ? 'dropdown--submenu' : 'dropdown--submenu hidden'}>
                            <li>Men's 2022 U.S. Open Championship</li>
                            <li>Women's 2022 U.S. Open Championship</li>
                        </div>
                    </li>
                    <li className='second--nav--item dropdown'>
                        <div className='dropdown--box'>
                            <div><a>FEATURED</a></div>  <div className='icon'  onClick={() => setFive(!five)}><MdKeyboardArrowDown className={five ? ' rotate' : ""} /></div>
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

                </ul>
            </div>

        </div>
    )
}

export default Second