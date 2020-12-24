import React from 'react';
import './Banner.css'
import DatePicker from './DatePicker'
import sanFran from './images/sanFran.jpeg'
import la from './images/la.jpeg'
import austin from './images/austin.jpeg'
import miami from './images/miami.jpeg'



const Banner = ({searchValue}) => {
    let coverPic
    if(searchValue) {
    if(searchValue.toLowerCase() === 'san francisco') coverPic = sanFran
    if (searchValue.toLowerCase() === 'los angeles') coverPic = la
    if (searchValue.toLowerCase() === 'austin') coverPic = austin
    if (searchValue.toLowerCase() === 'miami') coverPic = miami
    }  
    
    let divStyle = {
        background: `url(${coverPic})` ,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }



    return (
        <div className="banner" style={divStyle} >
            <div className="banner_info">
                <h1>Pick a date</h1>
                <h2>
                   <DatePicker />
        </h2>
            </div>
        </div>
    );
}

export default Banner;