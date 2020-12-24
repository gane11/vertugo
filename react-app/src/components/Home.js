import React, {useEffect} from 'react'
import NavBarContainer from './NavBar';
import HomePartiesContainer from './HomeParties';
import DatePicker from './DatePicker'




const Home = ({ authenticate, setAuthenticated}) => {
    // let lng
    // let lat
    // function locationSuccess(position) {
    //     lat = position.coords.latitude;
    //     lng = position.coords.longitude;
    //     var altitude = position.coords.altitude;
    //     // var accuracy = position.coords.accuracy;
    //     // var altitudeAccuracy = position.coords.altitudeAccuracy;
    //     // var heading = position.coords.height;
    //     // var speed = position.coords.speed;
    //     // var timestamp = position.timestamp;

    //     // work with this information however you'd like!
    // }

    // function locationError(error) {
    //     var code = error.code;
    //     var message = error.message;

    //     // read the code and message and decide how you want to handle this!
    // }

    // navigator.geolocation.getCurrentPosition(locationSuccess, locationError);


    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    function geoSuccess(position) {
       const lat = position.coords.latitude;
       const lng = position.coords.longitude;
        let location = (lat, lng)
        return location
    }


    function geoError() {
        alert("Geocoder failed.");
    }

    getLocation()
    console.log(location)
    return (
    <div> 
        <NavBarContainer authenticate={authenticate} setAuthenticated={setAuthenticated}/>
        <DatePicker />
        <HomePartiesContainer />
        {/* <Footer /> */}
    </div>
    )

}


export default Home



