import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='header--navbar'>
            <ul className='header--navbar_list'>
                <li className='header--navbar_list-item'>
                    <div className='link'><a href='#'>HOME</a></div>

                </li>
                <li className='header--navbar_list-item has-submenu list--item'>

                    <div className='link'><a href='#'>NEW ARRIVALS</a></div>
                    <ul className='list--item--submenu'>
                        <li className='submenu--subitem'><a>Men's new Arrivals</a></li>
                        <li className='submenu--subitem'><a>Ladies new Arrivals</a></li>
                    </ul>
                </li>


                <li className='header--navbar_list-item has-submenu list--item megamenu' >
                    <div className='link'><a href='#'>MENS</a></div>

                    <div className='list--item--submenu submenu'>
                        <div className='submenu--items'>
                            <ul className='submenu-item'>
                                <li className='submenu-item--title'>SHOP BY STYLE</li>
                                <li>Jackets</li>
                                <li>Vests</li>
                                <li>Layers</li>
                                <li>                            Bottoms
                                </li>
                                <li> Accessories</li>
                            </ul>
                            <ul className='submenu-item'>
                                <li className='submenu-item--title'>SHOP BY STYLE</li>
                                <li> SHOP BY STYLE</li>
                                <li>Jackets</li>
                                <li>Vests</li>
                                <li>Layers</li>
                                <li>                            Bottoms
                                </li>
                                <li> Accessories</li>
                            </ul>
                            <ul className='submenu-item'>
                                <li className='submenu-item--title'>BEST SELLERS</li>

                            </ul>
                        </div>

                    </div>
                </li>


                <li className='header--navbar_list-item has-submenu list--item megamenu'>
                    <div className='link'><a href='#'>WOMENS</a></div>

                    <div className='list--item--submenu submenu'>
                        <div className='submenu--items'>
                            <ul className='submenu-item'>
                                <li className='submenu-item--title'>SHOP BY STYLE</li>
                                <li>Jackets</li>
                                <li>Vests</li>
                                <li>Layers</li>
                                <li>                            Bottoms
                                </li>
                                <li> Accessories</li>
                            </ul>
                            <ul className='submenu-item'>
                                <li className='submenu-item--title'>SHOP BY STYLE</li>
                                <li> SHOP BY STYLE</li>
                                <li>Jackets</li>
                                <li>Vests</li>
                                <li>Layers</li>
                                <li>                            Bottoms
                                </li>
                                <li> Accessories</li>
                            </ul>
                            <ul className='submenu-item'>
                                <li className='submenu-item--title'>BEST SELLERS</li>

                            </ul>
                        </div>

                    </div>

                </li>


                <li className='header--navbar_list-item has-submenu list--item'>
                    <div className='link'><a href='#'>FEATURED</a></div>
                    <ul className='list--item--submenu'>
                        <li className='submenu--subitem'><a>Men's 2022 U.S. Open Champinship</a></li>
                        <li className='submenu--subitem'  ><a>Women's 2022 U.S. Open Champinship</a></li>
                    </ul>
                </li>
                <li className='header--navbar_list-item has-submenu list--item'>
                    <div className='link'><a href='#'>SALE</a></div>
                    <ul className='list--item--submenu'>
                        <li className='submenu--subitem' ><a>Men's Sale</a></li>
                        <li className='submenu--subitem'><a>Women's Sale</a></li>
                    </ul>
                </li>
                <li className='header--navbar_list-item list--item'>
                    <div className='link'><a href='#'>OUR TECHNOLOGY</a></div>
                </li>
                <li className='header--navbar_list-item list--item' >
                    <div className='link'><a href='#'>ZERO+ REWARDS</a></div>
                </li>
            </ul>
        </div>
    )
}

export default Navbar