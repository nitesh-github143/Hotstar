import React from 'react'
import disneylogo from '../assets/images/disney-hotstar-logo-dark.svg'
import kidslogo from '../assets/images/kids-logo.svg'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='left-container'>
                <ul>
                    <li className='dropdown pointer ham'>
                        <span className='line '></span>
                        <span className='line second'></span>
                        <span className='line'></span>
                    </li>
                    <li className='disney-logo-li'><a href=''><img className='disney-logo pointer' src={disneylogo} alt="" /></a> </li>

                    <li className='dropdown pointer tab'>TV</li>
                    <li className='dropdown pointer tab'>Movies</li>
                    <li className='dropdown pointer tab'>Sports</li>
                    <li className='dropdown pointer tab'>Disney+</li>
                    <li className='kids-logo tab'><img src={kidslogo} alt="" /></li>
                </ul>
            </div>
            <div className='right-container'>
                <ul>
                    <div className='search-div'>
                        <li className='search-bar-li'><input id='search-bar' type="text" placeholder='Search' /></li>
                        <i className='search-icon'></i>
                    </div>
                    <div className='btn-div'>
                        <li className='btn-li'><button className='btn' >SUBSCRIBE</button></li>
                        <li className='login l-tab'>LOGIN</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
