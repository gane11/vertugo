import React from 'react';
// import './Banner.css'
import DatePicker from './DatePicker'
import sanFran from './images/sanFran.jpg'
import la from './images/la2.jpg'
import austin from './images/austin.jpg'
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
        background: `url(${coverPic})` ,
        backgroundSize: '100% 100%',
        width: '85rem',
        height: '35rem'
        // objectFit: 'contain'
        // // backgroundPosition: 'center center',
        // // backgroundRepeat: 'no-repeat',
        // // width: '100%',
        // // height: '40rem',
        // // position: 'relative',
    }


    if(!coverPic) {
        return(
            <div>
                <h1>Not there yet, try San francisco, Miami, Austin, New York or Los Angeles</h1>
            </div>
        )
    }
    return (
        <div className="banner-main__container">
            <div className="banner__main">
                <div className="banner" style={divStyle} >
                    <div className="banner_info">
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