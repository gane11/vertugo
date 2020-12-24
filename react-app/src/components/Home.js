import React, {useEffect, useState} from 'react'
import NavBarContainer from './NavBar';
import HomePartiesContainer from './HomeParties';
import DatePicker from './DatePicker'
import Banner from './Banner';




const Home = ({ authenticate, setAuthenticated}) => {
    const [lat, setLat] = useState()
    const [lng, setLng] = useState()

    let location
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    function geoSuccess(position) {
       setLat(position.coords.latitude);
       setLng(position.coords.longitude)
    }


    function geoError() {
        alert("Geocoder failed.");
    }

    getLocation()
    console.log(lat, lng)


    // var geocoder;
    // function initialize() {
    //     geocoder = new google.maps.Geocoder();
    // }

    // function codeLatLng(lat, lng) {
    //     var latlng = new google.maps.LatLng(lat, lng);
    //     geocoder.geocode({ 'latLng': latlng }, function (results, status) {
    //         if (status == google.maps.GeocoderStatus.OK) {
    //             console.log(results)
    //             if (results[1]) {
    //                 //formatted address
    //                 var address = results[0].formatted_address;
    //                 alert("address = " + address);
    //             } else {
    //                 alert("No results found");
    //             }
    //         } else {
    //             alert("Geocoder failed due to: " + status);
    //         }
    //     });
    // }

    // console.log(codeLatLng(lat, lng))

    return (
    <div> 
        <NavBarContainer authenticate={authenticate} setAuthenticated={setAuthenticated}/>
        {/* <DatePicker /> */}
        <HomePartiesContainer />
        {/* <Footer /> */}
    </div>
    )

}


export default Home



