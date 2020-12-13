import React, {useEffect} from 'react'
import NavBarContainer from './NavBar';
import HomePartiesContainer from './HomeParties';




const Home = ({ authenticate, setAuthenticated}) => {
    

    return (
    <div> 
        <NavBarContainer authenticate={authenticate} setAuthenticated={setAuthenticated}/>
        <HomePartiesContainer />
        {/* <Footer /> */}
    </div>
    )

}


export default Home