import React from 'react';
import './dot.css';


function dot({colorCode, dotId}){
    return (
    <div className='dotDiv' data-testid="dotDiv">
        <div className={`dot-style  ${colorCode? colorCode : ""}`} >
        </div>
        <sup>{dotId}</sup>
    </div>
    );
}

export default dot;