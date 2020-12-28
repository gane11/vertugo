import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllClubs } from '../store/actions/clubsAction'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { getSavedParties } from "../store/actions/savePartyAction";
import { getAllParties } from '../store/actions/partiesAction'
import Card from './Card'
import userCover from './images/userCover1.jpg'
import ownerCover from './images/ownerCover.jpg'


import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1260,
    height: 400,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

function User({ clubs, getAllClubs, savedParties, getSavedParties, parties, getAllParties,}) {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  let id = Number(userId)

  const [savedPartiesButton, setSavedPartiesButton] = useState(false)
  const [ownerParties, setOwnerParties] = useState(false)
  const classes = useStyles();

  useEffect(() => {
    getSavedParties(id)
  }, [id])

  useEffect(() => {
    getAllParties()
  }, [])

  useEffect(() => {
    getAllClubs()
  }, [])
  

  useEffect(() => {
    if (!userId) {
      return
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  const showTickets = () => {
    setSavedPartiesButton(false)
  }

  const showSavedParties = () => {
    setSavedPartiesButton(true)

  }

  const showClubs = () => {
    setOwnerParties(false)
  }

  const showParties = () => {
    setOwnerParties(true)

  }

  if (!user) {
    return null;
  }

  return (
    <div>
    {user.owner ? (
    <>
          <div className="profile-main__container">
            <div className="profile__main">
              <div className="profile__container">
                <div
                  className="cover-image__container"
                  style={{
                    backgroundImage: `url(${ownerCover})`
                  }}
                >
                  <div className="club-name">
                    <h1>{user.first_name}</h1>
                  </div>
                </div>

                <div className="profile__body">
                  <div className="parties__container">
                    <div className="album-track__btns">
                      <Button variant="contained" color="primary" onClick={() => showClubs()}>Clubs</Button>
                      <Button variant="contained" color="primary" onClick={() => showParties()}>Parties</Button>
                    </div>
                    {ownerParties ? (
                      <>
                        <div className="party__container">
                          <div className="party__section">
                            {parties.map((party) => {
                              if (party.club_id === id) {
                                return (
                                  <Card party={party} clubs={clubs}/>
                                )
                              }
                            })}
                          </div>
                        </div>
                        </>
                    ) : (
                      <>
                          <NavLink className="user__name" to={`/users/${user.id}/clubs`} exact={true} activeClassName="active">
                            <Button variant="contained" color="primary"
                            >Create a new club page</Button>
                          </NavLink>
                        {clubs.map((club) => {
                          if (club.owner_id === id)
                            return (
                              <>
                              <ul>
                                <li>
                                    <NavLink className="user__name" to={`/clubs/${club.id}`} exact={true} activeClassName="active">
                                      <Button variant="contained" color="primary"
                                      >{club.name}</Button>
                                    </NavLink>
                                </li>
                              </ul>
                  
                              </>
                            )
                        })}
                      </>

                      )}
                  </div>

                  <div className="club-info__container">
                    <ul>
                      <li>
                        <strong>
                          Create a new club
                        </strong>  
                        press on the create a new club page button
                      </li>
                      <li className="bio">
                        <strong>Create a party</strong> 
                        press on the parties button then press on create party button
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
      </>
    ): (
      <>
            <div className="profile-main__container">
              <div className="profile__main">
                <div className="profile__container">
                  <div
                    className="cover-image__container"
                    style={{
                      backgroundImage: `url(${userCover})`
                    }}
                  >
                    <div className="club-name">
                      <h1>{user.name}</h1>
                    </div>
                  </div>

                  <div className="profile__body">
                    <div className="parties__container">
                      <div className="album-track__btns">
                        <Button variant="contained" color="primary" onClick={() => showTickets()}>Tickets</Button>
                        <Button variant="contained" color="primary" onClick={() => showSavedParties()}>Saved Parties</Button>
                      </div>
                      {savedPartiesButton ? (
                        <>
                          <div className="party__container">

                          </div>
                        </>
                      ) : (
                          <div className="party__container">
                            <div className="party__section">
                            </div>
                          </div>

                        )}
                    </div>

                    <div className="club-info__container">
                      <ul>
                        <li>
                          <strong>Name</strong> {user.name}
                        </li>
                        <li className="bio">
                          <strong>About</strong> {user.id}
                        </li>

                        <li>
                          <strong>City</strong> {user.id}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </>
    )}
    </div>
  );
}


const UserContainer = () => {
  const parties = useSelector((state) => Object.values(state.parties))
  const clubs = useSelector((state) => Object.values(state.clubs))
  const saved_parties = useSelector((state) => (state.saved_parties))
  const dispatch = useDispatch()
  return (
    <User 
      clubs={clubs}
      getAllClubs={() => dispatch(getAllClubs())}
      parties={parties}
      getAllParties={() => dispatch(getAllParties())}
      savedParties={saved_parties}
      getSavedParties={(id) => dispatch(getSavedParties(id))}
    />
  )

}
export default UserContainer;

