import React from 'react';
import './Section.css'

const Section = () => {
    return (
        <div className="container">
            <div className="sub-container" style={{backgroundColor: 'orange'}}>
                <h1>Section 1</h1>
            </div>
            <div className="sub-container" style={{backgroundColor: "tomato"}}>
                <h1>Section 2</h1>  
            </div>
            <div className="sub-container" style={{backgroundColor: "orange"}}>
                <h1>Section 3</h1>
            </div>
            <div className="sub-container" style={{backgroundColor: "tomato"}}>
                <h1>Section 4</h1>
            </div>
            <div className="sub-container" style={{backgroundColor: "orange"}}>
                <h1>Section 5</h1>
            </div>
        </div>
    );
};

export default Section;