import React from 'react';
import './Banner.css'
import DatePicker from './DatePicker'
import sanFran from './images/sanFran.jpeg'



const Banner = ({searchValue}) => {
    let coverPic

    if(searchValue.toLowerCase() === 'san fracisco') coverPic = sanFran
    if (searchValue.toLowerCase() === 'los angeles') coverPic = la
    if (searchValue.toLowerCase() === 'austin') coverPic = austin
    if (searchValue.toLowerCase() === 'miami') coverPic = miami



    return (
        <div className="banner" >
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