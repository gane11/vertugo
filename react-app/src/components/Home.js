import React, {useEffect} from 'react'
import NavBarContainer from './NavBar';
import HomePartiesContainer from './HomeParties';




const Home = ({getAllParties}) => {


    return (
    <div> 
        <NavBarContainer />
        <HomePartiesContainer />
        <Footer />
    </div>
    )

}