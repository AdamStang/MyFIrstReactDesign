import React from 'react';
import ReactDOM from 'react-dom';
import './Banner.css';
import back from '../images/back.jpg';

function MyBanner(){
    return (
        <div className="bannerDiv">
            <img src={back} alt=""></img>
        </div>
    )
}

export default MyBanner;