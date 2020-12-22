import React, {useEffect} from 'react';
import { getAllParties } from '../store/actions/partiesAction'
import {getAllClubs} from '../store/actions/clubsAction'
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card'
import { getSavedParties} from '../store/actions/savePartyAction'




const HomeParties = ({getAllParties, parties, clubs, getAllClubs, saved_parties,getSavedParties}) => {
   let searchValue = 'San Francisco'
    let userId = localStorage.getItem("user_id");

    useEffect(() => {
        getAllParties();
    }, [])

    useEffect(() => {
        getAllClubs()
    }, [])

    useEffect(() => {
        getSavedParties(1)
    }, [])

    console.log(saved_parties)

    let ids = []
    for(let i = 0; i < clubs.length; i++) {
        let currentClub = clubs[i]
        if(currentClub.city === searchValue) {
            ids.push(i +1)
        }
    }


    if(!parties) return null

    return(
        <div>
            <div className="party__section">
                {parties.map((party) => {
                    if (ids.includes(party.club_id)) {
                    return(
                    <Card party={party} clubs={clubs}/>
                    )
                }})}
            </div>
        </div>
    )
}


const HomePartiesContainer = () => {
    const parties = useSelector((state) => Object.values(state.parties))
    const clubs = useSelector((state)=> Object.values(state.clubs))
    const saved_parties = useSelector((state) => Object.values(state.saved_parties))
    const dispatch = useDispatch()

    return (
        <HomeParties
            clubs={clubs}
            getAllClubs={() => dispatch(getAllClubs())}
            parties={parties}
            getAllParties={()=> dispatch(getAllParties())}
            saved_parties={saved_parties}
            getSavedParties={(id) => dispatch(getSavedParties(id))}
        />
    )
}


export default HomePartiesContainer;