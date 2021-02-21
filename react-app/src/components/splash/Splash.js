import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import gif1 from '../images/vertugo1.gif'




const Splash = () => {

    AOS.init({ startEvent: 'DOMContentLoaded', dataAosOnce: false, duration: 1000 })

    return(
        <div className="splash__container">
            <div className="splash-header__container">
                <div className="splash-header__logo">
                </div>
                <div className="splash-header__right">
                    

                    <div className="splash-header__home">
                    Home
                </div>
                
                    <div className="splash-header__club-owner">
                    Club Owner
                </div>
                    <div className="splash-header__club-owner">
                        How to
                </div>
                </div>

            </div>
            <div className="splash-top__container" >
                {/* <div className="splash-circle-1"></div>
                <div className="splash-circle-2"></div>
                <div className="splash-circle-3"></div> */}

                <div className="splash-main__text">
                    Welcome to Vertugo
                </div >
                <div className="splash-second__text">
                    Easiest way to find a party close to you. Just click on one of the cities and find your next party.
                </div>
                <div className="splash-cities__container">
                    <NavLink className="splash-city" to={`/search/Miami`} exact={true} activeClassName="active">
                        <div data-aos-easing="ease-out-back"data-aos="fade-right" >Miami</div>

                    </NavLink>
                    <NavLink className="splash-city" to={`/search/Austin`}  exact={true} activeClassName="active">
                        <div data-aos="fade-right" data-aos-easing="ease-out-back" data-aos-delay="200">Austin</div>

                    </NavLink>
                    <NavLink className="splash-city" to={`/search/San%20Francisco`}  exact={true} activeClassName="active">
                        <div data-aos="fade-right" data-aos-easing="ease-out-back"data-aos-delay="400">San Francisco</div>

                    </NavLink>
                    <NavLink className="splash-city" to={`/search/Los%20Angeles`} exact={true} activeClassName="active">
                        <div data-aos="fade-right" data-aos-easing="ease-out-back"data-aos-delay="600">Los Angeles</div>

                    </NavLink>
                    <NavLink className="splash-city" to={`/search/New%20York`}  exact={true} activeClassName="active">

                        <div data-aos="fade-right" data-aos-easing="ease-out-back" data-aos-delay="800">New York</div>
                    </NavLink>
                </div>
                
            </div>
            <div className="splash-middle__container">
                <div className="splash-middle__first">
                    <div data-aos="fade-right" data-aos-easing="ease-out-back"data-aos-delay="900" 
                      className="splash-middle__text">
                        1. Search for a party 
                    </div>
                    <div data-aos-easing="ease-out-back"data-aos="fade-left" data-aos-delay="900" className="splash-middle__picture">
                        <img src={gif1} />
                    </div>

                </div>

                <div className="splash-middle__second">
                    <div  className="splash-middle__picture2">
                        <img src={gif1} />
                    </div>
                    <div  className="splash-middle__text2">
                        2. Buy a ticket
                    </div>

                </div>
                <div className="splash-middle__third" >
                    <div data-aos="fade-right" className="splash-middle__text3" >
                        3. Show your QR code
                        {/* <div className="splash-smallprint">Just </div> */}
                    </div>
                    <div className="splash-middle__picture3" >
                        <img src={gif1} />
                    </div>

                </div>

            </div>
        </div>
    )
}


export default Splash