import React from 'react';
// import './Banner.css'
import DatePicker from './DatePicker'
import sanFran from './images/sanFran.jpg'
import la from './images/la.jpg'
import austin from './images/austin.jpg'
import miami from './images/miami.jpg'
import newYork from './images/newYork.jpg'


const Banner = ({searchValue}) => {
    let coverPic
    if(searchValue) {
    if(searchValue.toLowerCase() === 'san francisco') coverPic = sanFran
    if (searchValue.toLowerCase() === 'los angeles') coverPic = la
    if (searchValue.toLowerCase() === 'austin') coverPic = austin
    if (searchValue.toLowerCase() === 'miami') coverPic = miami
        if (searchValue.toLowerCase() === 'new york') coverPic = newYork
    }  
    
    let divStyle = {
        background: `url(${coverPic})` ,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '40rem',
        position: 'relative',
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