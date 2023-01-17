import React from 'react';
import './background.css';


function Background({children}){
    return (
    <div className='background' data-testid="background-1">
        <div className='head'></div>
        <div className='body-hr'></div>
        <div className='body-vt'></div>
        <div className='leg'></div>
        <div className='dots'>{children}</div>
    </div>
    );
}

export default Background;