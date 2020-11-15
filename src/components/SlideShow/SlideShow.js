import React, {useEffect, useRef} from 'react'
import banner1 from '../../img/banner1.png'
import anh1 from '../../img/anh1.png'
import anh2 from '../../img/anh2.png'
import './SlideShow.css'
function SlideShow() {
    const slideShowRef = useRef()
    const slideItemRef = useRef()
    let countRef = useRef(0)
    useEffect(() => {
        let runSlideShow = setInterval(()=>{
            if(countRef.current>3) countRef.current = 0
            slideShowRef.current.style.transform = `translateX(-${100*countRef.current}%)`
            console.log(slideItemRef.current.clientWidth);
            countRef.current++
        },7000)
        return () => {
            clearInterval(runSlideShow)
        }
    }, [])
    return (
        <div className="slide-show">
            <ul ref={slideShowRef}   className="slide-show-container">
                <li ref={slideItemRef} className="slide-show-item">
                    <img src={banner1} />
                    <div className="slide-show-info">
                    </div>
                </li>
                <li className="slide-show-item">
                    <img src="https://dinu.ir/wp-content/uploads/2019/07/a-new-spider-man-far-from-home-trailer-reveals-where-spidey-gets-his-new-red-and-black-suit-social-1920x930.jpg" />
                    <div className="slide-show-info">
                    </div>
                </li>
                <li className="slide-show-item">
                    <img src={anh1} />
                    <div className="slide-show-info">
                    </div>
                </li>
                <li className="slide-show-item">
                    <img src={anh2} />
                    <div className="slide-show-info">
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SlideShow
