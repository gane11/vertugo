import React, {useEffect, useState} from 'react';
import { getAllParties } from '../store/actions/partiesAction'
import {getAllClubs} from '../store/actions/clubsAction'
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card'
import { getSavedParties} from '../store/actions/savedPartiesAction'
import Banner from './Banner'




const HomeParties = ({getAllParties, parties, clubs, getAllClubs, savedParties,getSavedParties}) => {
   let searchValue = 'San Francisco'
    let userId = localStorage.getItem("user_id");

    // const [selectedDate, setSelectedDate] = useState(localStorage.getItem('date'))
    // setSelectedDate(localStorage.getItem('date'))


    let selectedDate = localStorage.getItem('date')
  

    useEffect(() => {
        getAllParties();
    }, [])

    useEffect(() => {
        getAllClubs()
    }, [])

    useEffect(() => {
        getSavedParties(userId)
    }, [userId])


    let ids = []
    for(let i = 0; i < clubs.length; i++) {
        let currentClub = clubs[i]
        if(currentClub.city === searchValue) {
            ids.push(i +1)
        }
    }



    if(!parties) return null

    return(
        <>
            <Banner searchValue={searchValue}/>
            <div className="banner-main__container">
                <div className="banner__main ">
                <div>
                    <div className="party__section">
                        {parties.map((party) => {
                        if (ids.includes(party.club_id) && new Date(party.start_date).toISOString().split('T')[0] === new Date(selectedDate).toISOString().split('T')[0]) {
                        // console.log(new Date(party.start_date).toISOString().split('T')[0], new Date(selectedDate).toISOString().split('T')[0])
                            return(
                        < Card party={party} clubs={clubs}/>
                        )
                    }})}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


const HomePartiesContainer = () => {
    const parties = useSelector((state) => Object.values(state.parties))
    const clubs = useSelector((state)=> Object.values(state.clubs))
    const savedParties = useSelector((state) => Object.values(state.savedParties))
    const dispatch = useDispatch()

    return (
        <HomeParties
            clubs={clubs}
            getAllClubs={() => dispatch(getAllClubs())}
            parties={parties}
            getAllParties={()=> dispatch(getAllParties())}
            savedParties={savedParties}
            getSavedParties={(id) => dispatch(getSavedParties(id))}
        />
    )
}


export default HomePartiesContainer;