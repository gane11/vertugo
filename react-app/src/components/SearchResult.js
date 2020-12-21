import React, { useEffect } from 'react'
import NavBarContainer from './NavBar';
import { getAllParties } from '../store/actions/partiesAction'
import { getAllClubs } from '../store/actions/clubsAction'
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card'
import { useParams } from 'react-router-dom';
import { getSavedParties } from '../store/actions/savePartyAction'




const SearchResult = ({ getAllParties, parties, clubs, getAllClubs}) => {
    const {searchValue} = useParams()
    console.log(searchValue)

    useEffect(() => {
        getAllParties();
    }, [])

    useEffect(() => {
        getAllClubs()
    }, [])

    let ids = []
    for (let i = 0; i < clubs.length; i++) {
        let currentClub = clubs[i]
        if (currentClub.city === searchValue) {
            ids.push(i + 1)
        }
    }

    if(!parties) return null;

    return (
            <div>
                <div className="party__section">
                    {parties.map((party) => {
                        if (ids.includes(party.club_id)) {
                            return (
                                <Card party={party} clubs={clubs} />
                            )
                        }
                    })}
                </div>
            </div>
    )

}


const SearchResultContainer = () => {
    const parties = useSelector((state) => Object.values(state.parties))
    const clubs = useSelector((state) => Object.values(state.clubs))
    const savePartyAction
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