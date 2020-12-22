import React, {useEffect} from 'react'
import NavBarContainer from './NavBar';
import HomePartiesContainer from './HomeParties';
import DatePicker from './DatePicker'




const Home = ({ authenticate, setAuthenticated}) => {
    

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