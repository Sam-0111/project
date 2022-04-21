import React from 'react'
import './Cart.css'
import { FaTimes } from 'react-icons/fa'
import { useContext } from 'react'
import { Context } from '../Context/Context'


const Cart = () => {

    const { cartVisible, setCartVisible } = useContext(Context)
    return (
        <div className={cartVisible ? 'header__cart active' : 'header__cart'}>


            <div className="header__cart--main cart">
                <div className="cart__top">
                    <div className="cart__top--title">Cart</div>
                    <button
                        type="button"
                        className="cart__close--btn"
                        onClick={()=> setCartVisible(false)}
                    >
                        <FaTimes />
                    </button>
                </div>
            </div>

            <div className="header__cart--bottom">
                <div className="cart__scrollable">
                    <p className="cart__empty--msg">Your cart is currently empty.</p>
                </div>
            </div>
        </div>


    )
}

export default Cart