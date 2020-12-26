import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getClub } from '../store/actions/clubAction';
import { getAllParties } from '../store/actions/partiesAction'
import { getAllClubPictures} from '../store/actions/clubPicturesAction'
import { Button } from '@material-ui/core';
import Card from './Card'





const ClubProfile = ({ club, getClub, parties, getAllParties, clubPictures, getAllClubPictures }) => {
    const { id } = useParams();
    const clubId = Number.parseInt(id);

    const [picturesSelected, setPicturesSelected] = useState(false)

    useEffect(() => {
        getClub(clubId)
    }, [clubId])

    useEffect(() => {
        getAllParties()
    }, [])
    console.log(clubPictures)

    useEffect(() => {
        getAllClubPictures(clubId)
    }, [clubId])


    if (!club) return null;



const showParties = () => {
    setPicturesSelected(false)
}

const showPictures = () => {
    setPicturesSelected(true)

}


return (
    <div className="profile-main__container">
        <div className="profile__main">
            <div className="profile__container">
                <div
                    className="cover-image__container"
                    style={{
                        backgroundImage: `url(${club.club_cover_pic})`
                    }}
                >
                    {/* <img src={club.club_cover_pic} alt={club.club_cover_pic} className="profile_image" /> */}
                    <div className="club-name">
                        <h1>{club.name}</h1>
                    </div>
                </div>

                <div className="profile__body">
                    <div className="parties__container">
                        <div className="album-track__btns">
                            <Button variant="contained" color="primary" onClick={() => showParties()}>Parties</Button>
                            <Button variant="contained" color="primary"  onClick={() => showPictures()}>Pictures</Button>
                        </div>
                            {picturesSelected ? (
                        <div className="party__container">
                            {clubPictures.map((clubPicture) => {
                                return(
                                    <img src={clubPicture.picture_url} className="club-picture"></img>
                                )
                            })}
                        </div>

                            ) : (
                            <div className="party__container">
                                <div className="party__section"> 
                                {parties.map((party) => {
                                    if (party.club_id === club.id) {
                                        return (
                                            <Card party={party} club={club} />
                                        )
                                    }
                                })}
                            </div>
                            </div>

                            )}
                    </div>

                    <div className="club-info__container">
                        <ul>
                            <li>
                                <strong>Name</strong> {club.name}
                            </li>
                            <li className="bio">
                                <strong>About</strong> {club.description}
                            </li>
                    
                            <li>
                                <strong>City</strong> {club.city}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>

);
}

const ClubProfileContainer = () => {
    const parties = useSelector((state) => Object.values(state.parties))
    const club = useSelector((state) => state.club)
    const clubPictures = useSelector((state) => Object.values(state.clubPictures))
    const dispatch = useDispatch()

    return (
        <ClubProfile
            club={club}
            getClub={(clubId) => dispatch(getClub(clubId))}
            parties={parties}
            getAllParties={() => dispatch(getAllParties())}
            clubPictures={clubPictures}
            getAllClubPictures={(clubId) => dispatch(getAllClubPictures(clubId))}
        />
    )
}


export default ClubProfileContainer