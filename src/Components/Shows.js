// import { useState } from 'react'
// import { ReactDOM } from 'react-dom/client'
import './Shows.css'

// latest and trending

import a from '../assets/images/Latest&Trendingimages/a.webp'
import b from '../assets/images/Latest&Trendingimages/b.webp'
import c from '../assets/images/Latest&Trendingimages/c.webp'
import d from '../assets/images/Latest&Trendingimages/d.webp'
import e from '../assets/images/Latest&Trendingimages/e.webp'
import f from '../assets/images/Latest&Trendingimages/f.webp'
import g from '../assets/images/Latest&Trendingimages/g.webp'
import h from '../assets/images/Latest&Trendingimages/h.webp'
import i from '../assets/images/Latest&Trendingimages/i.webp'
import j from '../assets/images/Latest&Trendingimages/j.webp'

// Popular Shows

import a1 from '../assets/images/Channels/a1.webp'
import a2 from '../assets/images/Channels/a2.webp'
import a3 from '../assets/images/Channels/a3.webp'
import a4 from '../assets/images/Channels/a4.webp'
import a5 from '../assets/images/Channels/a5.webp'
import a6 from '../assets/images/Channels/a6.webp'
import a7 from '../assets/images/Channels/a7.webp'
import a8 from '../assets/images/Channels/a8.webp'

const Shows = () => {
    const arr = ['Latest & Trending', 'Popular Shows', 'Popular Movies', 'Popular in action'];

    return (
        <div className='show-container'>
            <div>
                <p className="heading">Latest & Trending</p>
                <div className='img-container'>
                    <img className='show-img' src={a} alt="" />
                    <img className='show-img' src={b} alt="" />
                    <img className='show-img' src={c} alt="" />
                    <img className='show-img' src={d} alt="" />
                    <img className='show-img' src={e} alt="" />
                    <img className='show-img' src={f} alt="" />
                    <img className='show-img' src={g} alt="" />
                    <img className='show-img' src={h} alt="" />
                    <img className='show-img' src={i} alt="" />
                    <img className='show-img' src={j} alt="" />
                </div>
            </div>
            <div>
                <p className="heading">Popular Channels</p>
                <div className='img-container'>
                    <img className='channels-img' src={a1} alt="" />
                    <img className='channels-img' src={a2} alt="" />
                    <img className='channels-img' src={a3} alt="" />
                    <img className='channels-img' src={a4} alt="" />
                    <img className='channels-img' src={a5} alt="" />
                    <img className='channels-img' src={a6} alt="" />
                    <img className='channels-img' src={a7} alt="" />
                    <img className='channels-img' src={a8} alt="" />
                    <img className='channels-img' src={a1} alt="" />
                    <img className='channels-img' src={a2} alt="" />
                    <img className='channels-img' src={a3} alt="" />
                    <img className='channels-img' src={a4} alt="" />
                    <img className='channels-img' src={a5} alt="" />
                    <img className='channels-img' src={a6} alt="" />
                    <img className='channels-img' src={a7} alt="" />
                    <img className='channels-img' src={a8} alt="" />
                    <img className='channels-img' src={a1} alt="" />
                    <img className='channels-img' src={a2} alt="" />
                    <img className='channels-img' src={a3} alt="" />
                    <img className='channels-img' src={a4} alt="" />
                    <img className='channels-img' src={a5} alt="" />
                    <img className='channels-img' src={a6} alt="" />
                    <img className='channels-img' src={a7} alt="" />
                    <img className='channels-img' src={a8} alt="" />
                </div>
                <div>
                    <p className="heading">Popular Channels</p>
                    <div className='img-container'>
                        <img className='channels-img' src={a1} alt="" />
                        <img className='channels-img' src={a2} alt="" />
                        <img className='channels-img' src={a3} alt="" />
                        <img className='channels-img' src={a4} alt="" />
                        <img className='channels-img' src={a5} alt="" />
                        <img className='channels-img' src={a6} alt="" />
                        <img className='channels-img' src={a7} alt="" />
                        <img className='channels-img' src={a8} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Shows
