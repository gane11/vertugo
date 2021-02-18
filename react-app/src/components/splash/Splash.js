import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



const Splash = () => {
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
                    <div data-aos="fade-right" >Miami</div>

                    </NavLink>
                    <NavLink className="splash-city" to={`/search/Austin`}  exact={true} activeClassName="active">
                    <div data-aos="fade-right" data-aos-delay="200">Austin</div>

                    </NavLink>
                    <NavLink className="splash-city" to={`/search/San%20Francisco`}  exact={true} activeClassName="active">
                    <div data-aos="fade-right" data-aos-delay="400">San Francisco</div>

                    </NavLink>
                    <NavLink className="splash-city" to={`/search/Los%20Angeles`} exact={true} activeClassName="active">
                    <div data-aos="fade-right" data-aos-delay="600">Los Angeles</div>

                    </NavLink>
                    <NavLink className="splash-city" to={`/search/New%20York`}  exact={true} activeClassName="active">

                    <div data-aos="fade-right" data-aos-delay="800">New York</div>
                    </NavLink>
                </div>
                
            </div>
            <div className="splash-middle__container">
                <div className="splash-middle__first">
                    <div data-aos="fade-right" data-aos-delay="900" className="splash-middle__text">
                        1. Search for a party 
                    </div>
                    <div data-aos="fade-left" data-aos-delay="900" className="splash-middle__picture">
                        computer here
                    </div>

                </div>

            </div>
        </div>
    )
}


export default Splash