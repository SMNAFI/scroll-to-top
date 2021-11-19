import React, { useEffect, useState } from 'react';
import {MdKeyboardArrowUp} from 'react-icons/md';
import './ScrollToTop.css'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if(window.pageYOffset > 300) {
            // console.log(window.pageYOffset);
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        // console.log("okk");
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // for removing event listeners when the component unmount
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, [])

    return (
        <div className="scroll_container">
           <button onClick={scrollToTop} className={"scroll_btn "} style={{opacity: isVisible ? '100' : '0'}}>
                <MdKeyboardArrowUp/>
           </button>
        </div>
    );
};

export default ScrollToTop;