import React, { useState } from 'react';
import './ScrollToTop.css';
import { GoChevronUp } from "react-icons/go";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const scrollCheck = () => {
        if(window.scrollY >= 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }
    window.addEventListener('scroll', scrollCheck);

    return (
        <div className="scroll_container">
           <button onClick={scrollToTop} className={"scroll_btn " + (isVisible ? 'btn_show' : 'btn_hide')}>
                <GoChevronUp/>
           </button>
        </div>
    );
};

export default ScrollToTop;