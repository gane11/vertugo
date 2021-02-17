import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'


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
                </div>

            </div>
            <div className="splash-top__container" >
                <div className="splash-circle-1"></div>
                <div className="splash-circle-2"></div>
                <div className="splash-circle-3"></div>

                <div className="splash-main__text">
                    Welcome to Vertugo
                </div>
            </div>
        </div>
    )
}


export default Splash