import { useEffect, useRef } from "react"
import "./Slide.css"

function Slide() {

    const ulRef = useRef()
    const liRef = useRef([])
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    let currentInx = 0
    // 직접 카운트 살렸지만, 향후 이미지 받아서 map 메서드로 갯수 파악해야 할 것
    const slideCount = 8
    const slideWidth = 300
    const slideMargin = 30

    console.log((slideWidth + slideMargin) * slideCount - slideMargin)

    // useEffect(() => {
    //     console.log(ulRef.current.style)
    // }, [])

    function moveSlide(num) {
   
            ulRef.current.style.left = -num * 330 + "px";
            currentInx = num
        
    }

    

    return(
        <>
            <div className="Slides_wrapper">
            <ul ref={ulRef} className="Slides" style={{width: `${ (slideWidth + slideMargin) * slideCount - slideMargin}` + "px"}}>
                <li ref={liRef}>
                    <img src="https://via.placeholder.com/300" />
                </li>
                <li ref={liRef}>
                    <img src="https://via.placeholder.com/300" />
                </li>
                <li ref={liRef}>
                    <img src="https://via.placeholder.com/300" />
                </li>
                <li ref={liRef}>
                    <img src="https://via.placeholder.com/300" />
                </li>
                <li ref={liRef}>
                    <img src="https://via.placeholder.com/300" />
                </li>
                <li ref={liRef}>
                    <img src="https://via.placeholder.com/300" />
                </li>
                <li ref={liRef}>
                    <img src="https://via.placeholder.com/300" />
                </li>
                <li ref={liRef}>
                    <img src="https://via.placeholder.com/300" />
                </li>
            </ul>
        </div>
        <p className="controls">
            <span ref={prevRef} className="prev" onClick={() => {if(currentInx > 0) {moveSlide(currentInx - 1)} else { moveSlide(slideCount - 3)}}}>prev</span>
            <span ref={nextRef} className="next" onClick={() => {if(currentInx < slideCount - 3) {moveSlide(currentInx + 1)} else { moveSlide(0)}}}>next</span>
        </p>
        </>
    )

}

export default Slide