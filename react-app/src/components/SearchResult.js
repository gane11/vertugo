import React, { useEffect } from 'react'
import { getAllParties } from '../store/actions/partiesAction'
import { getAllClubs } from '../store/actions/clubsAction'
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card'
import { useParams } from 'react-router-dom';
import { getSavedParties } from '../store/actions/savePartyAction'
import Banner from './Banner'





const SearchResult = ({ getAllParties, parties, clubs, getAllClubs}) => {
    const {searchValue} = useParams()
    let selectedDate = localStorage.getItem('date')

   

    useEffect(() => {
        getAllParties();
    }, [])

    useEffect(() => {
        getAllClubs()
    }, [])

    let ids = []
    for (let i = 0; i < clubs.length; i++) {
        let currentClub = clubs[i]
        if (currentClub.city.toLowerCase() === searchValue.toLowerCase()) {
            ids.push(i + 1)
        }
    }




    return (
        <>
            <Banner searchValue={searchValue}/>
            <div className="banner-main__container">
                <div className="banner__main ">
                    <div>
                <div className="party__section">
                    {parties.map((party) => {
                        if (ids.includes(party.club_id) && new Date(party.start_date).toISOString().split('T')[0] === new Date(selectedDate).toISOString().split('T')[0]) {
                            return (
                                <Card party={party} clubs={clubs} />
                            )
                        }
                    })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}


const SearchResultContainer = () => {
    const parties = useSelector((state) => Object.values(state.parties))
    const clubs = useSelector((state) => Object.values(state.clubs))
    // const savePartyAction
    const dispatch = useDispatch()
    return (
        <SearchResult

            clubs={clubs}
            getAllClubs={() => dispatch(getAllClubs())}
            parties={parties}
            getAllParties={() => dispatch(getAllParties())}
        />
    )
}


export default SearchResultContainer;