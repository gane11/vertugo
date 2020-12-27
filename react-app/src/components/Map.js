
import React, { useState, useEffect } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps"
import { useSelector, useDispatch } from 'react-redux';
// home
//home2


const googleKey = process.env.REACT_APP_GOOGLE_KEY

const Map = ({ newLng, newLat}) => {

    return (
        ///html
        <GoogleMap
            defaultZoom={20}
            defaultCenter={{ lat: newLat, lng: newLng}}
        >

        <Marker
            key={newLat}
            position={{
                lat: newLat,
                lng: newLng
            }}
        />
        </GoogleMap>
    )
     }


// const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function GogleMap({ newLat, newLng }) {
    
    return (
        <div style={{ width: '50vw', height: '100vh' }}>
            <Map
                newLat={newLat}
                newLng={newLng}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleKey}&callback=initMap`}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
            />
        </div>
    )
}



