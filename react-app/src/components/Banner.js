import React from 'react';
// import './Banner.css'
import DatePicker from './DatePicker'
import sanFran from './images/sanFran.jpg'
import la from './images/la2.jpg'
import austin from './images/austin.jpeg'
import miami from './images/miami.jpg'
import newYork from './images/newYork.jpg'


const Banner = ({searchValue}) => {
    let coverPic = false
    if(searchValue) {
    if(searchValue.toLowerCase() === 'san francisco') coverPic = sanFran
    if (searchValue.toLowerCase() === 'los angeles') coverPic = la
    if (searchValue.toLowerCase() === 'austin') coverPic = austin
    if (searchValue.toLowerCase() === 'miami') coverPic = miami
        if (searchValue.toLowerCase() === 'new york') coverPic = newYork

    }  
    
    let divStyle = {
        background: `no-repeat center/100% url(${coverPic})`,
        borderadius: '1rem',
        width: '85rem',
        height: '35rem',

    }


    if(!coverPic) {
        return(
            <div className="banner-error">
                <h1>Not there yet, try San francisco, Miami, Austin, New York or Los Angeles</h1>
            </div>
        )
    }
    return (
        <div className="banner-main__container">
            <div className="banner__main">
                <div  style={divStyle} className="banner">
                    <div className="banner_info" >
                        <h1>Pick a date</h1>
                        <h2>
                        <DatePicker />
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;