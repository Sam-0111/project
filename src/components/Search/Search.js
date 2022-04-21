import React from 'react'
import './Search.css'
import { GoSearch } from 'react-icons/go';
import { FaTimes } from 'react-icons/fa'
// import { useState } from 'react';
import { Context } from '../Context/Context';
import { useContext } from 'react';

const Search = () => {
  const { searchVisible, setSearchVisible } = useContext(Context)


  return (

    <div className={searchVisible ? 'header__serch--main active' : 'header__serch--main'}>
      <div className="header__search--wrapper">

        <form action="" className="site-header__search-form" autoComplete="off">

          <button type="submit" className="site-header__search-btn">
            <GoSearch />
          </button>

          <input type="text" placeholder="Search our store" className="site-header__search-input" />
        </form>

        <button
          type="button"
          className="search-header-close text-link site-header__search-btn"
          onClick={() => {
            setSearchVisible(false)
          }}
        >

          <FaTimes />
        </button>

      </div>
    </div>

  )
}

export default Search