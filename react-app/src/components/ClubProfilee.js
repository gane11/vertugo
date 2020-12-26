import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { getClub} from '../store/actions/clubAction';
import {getAllParties} from '../store/actions/partiesAction'
import { Button } from '@material-ui/core';
import Card from './Card'





const ClubProfile = ({ club, getClub, parties, getAllParties}) => {
    const {id} = useParams();
    const clubId= Number.parseInt(id);
    
    useEffect(() => {
        getClub(clubId) 
    }, [clubId])

    useEffect(() => {
        getAllParties()
    },[])
    console.log(club)

    if(!club) return null;

    return(
        <div className="profile-main__container">
            <div className="profile-main">
            <div  className="profile__container">
            <div
                className="cover-image__container"
                style={{
                    backgroundImage:`url(${club.club_cover_pic})`
                }}
            >
                <div className="club-name">
                    <h1>{club.name}</h1>
                </div>
            </div>

            <div className="profile__body">
                <div className="parties__container">
                    <div className="party__container">
                        <ul>
                            {parties.map((party) => {
                                if(party.club_id === club.id) {
                                    return(
                                        <Card party={party} club={club}/>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                </div>
                <div className="club-info__container">
                    <ul>
                        <li>
                            <strong>Name</strong> {club.name}
                        </li>
                        <li>
                            <strong>About</strong> {club.description}
                        </li>
                        {/* <li>
                            <strong>City</strong> {club.city}
                        </li> */}
                    </ul>
                </div>
            </div>
                </div>
            </div>
        </div>
    )
}


const ClubProfileContainer = () => {
    const parties = useSelector((state) => Object.values(state.parties))
    const club = useSelector((state) => state.club)
    const dispatch = useDispatch()

    return(
        <ClubProfile
            club={club}
            getClub={(clubId) => dispatch(getClub(clubId))}
            parties={parties}
            getAllParties={() => dispatch(getAllParties())}
        />
    )
}


export default ClubProfileContainer