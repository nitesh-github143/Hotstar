import React from 'react'
import './SlideShow.css'
import b1 from '../assets/images/Slideshowimages/b1.webp'
import b2 from '../assets/images/Slideshowimages/b2.webp'
import b3 from '../assets/images/Slideshowimages/b3.webp'
import b4 from '../assets/images/Slideshowimages/b4.webp'

const SlideShow = () => {
    return (
        <div className='slideshow-container'>
            <div className='slide-details'>
                <div className="description">
                    <div>
                        Yeh Rishta Kya Kehlata hai
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, reiciendis et. Quos dolor excepturi nam maiores iusto asperiores eum aperiam?
                    </div>
                </div>
            </div>
            <div className='slide-img-container'>
                <img className='slide-img' src={b1} alt="" />
            </div>
        </div>
    )
}

export default SlideShow
