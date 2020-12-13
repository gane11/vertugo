import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { getClub} from '../store/actions/clubAction';
import {getAllParties} from '../store/actions/partiesAction'




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
        <div>
            <ul>
                <li>{club.id}</li>
                {parties.map((party) => {
                    if(party.club_id === club.id) {
                        return(
                            <>
                            <li>{party.id}</li>
                            <li>{party.description}</li>
                            </>
                        )
                    }
                })}
            </ul>
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