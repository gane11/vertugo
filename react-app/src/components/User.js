import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllClubs } from '../store/actions/clubsAction'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { getSavedParties } from "../store/actions/savedPartiesAction";
import { getAllParties } from '../store/actions/partiesAction'
import {getAllTickets} from '../store/actions/ticketsAction'
import Card from './Card'
import userCover from './images/userCover1.jpg'
import ownerCover from './images/ownerCover.jpg'
import ClubCard from './ClubCard'
import Map from './Map'

///for show
import QRious from "qrious";
//for show


import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import TicketCard from "./TicketCard";

const useStyles = makeStyles((theme) => ({
  shape: {
    borderRadius: '2rem'
  },
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

function User({ clubs, getAllClubs, savedParties, getSavedParties, parties, getAllParties, tickets, getAllTickets}) {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  let id = Number(userId)

  let date = new Date();
  let yesterday = date.setDate(date.getDate() - 1);

  const [savedPartiesButton, setSavedPartiesButton] = useState(false)
  const [ownerParties, setOwnerParties] = useState(false)
  const classes = useStyles();

  useEffect(() => {
    getSavedParties(userId)
  }, [userId])

  useEffect(() => {
    getAllTickets(userId)
  }, [userId])

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

  let userLat = Number(localStorage.getItem('userLat'))
  let userLng = Number(localStorage.getItem('userLng'))
  // if(lat && lng) {
  //   userLat = lat
  //   userLng = lng
  // }



  //for show
  let qr = new QRious();
  qr.set({
    background: 'white',
    backgroundAlpha: 0.8,
    foreground: 'blue',
    foregroundAlpha: 0.8,
    level: 'H',
    padding: 25,
    size: 500,
    value: 'https://gane11.github.io/Aleksandar-Dordevic/'
  });

  //for show

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
                      <Button className={classes.shape} variant="contained" color="primary" onClick={() => showClubs()}>Clubs</Button>
                      <Button className={classes.shape} variant="contained" color="primary" onClick={() => showParties()}>Parties</Button>
                    </div>
                    {ownerParties ? (
                      <>
                        <div className="party__container">
                          <div className="party__section">
                            {parties.map((party) => {
                              if (party.club_id === id && new Date(party.start_date) > yesterday) {
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
                       <div className="create-club__button">
                          <NavLink className="user__name" to={`/users/${user.id}/clubs`} exact={true} activeClassName="active">
                              <Button className={classes.shape} variant="contained" color="primary" size="large"
                            >Create a new club page</Button>
                          </NavLink>
                        {clubs.map((club) => {
                          if (club.owner_id === id)
                            return (
                              <>
                              <ClubCard club={club}/>
                              </>
                            )
                        })}
                          </div>
                      </>

                      )}
                  </div>

                  <div className="club-info__container">
                    <ul>
                      <li>
                        <strong>
                          Create a new club
                        </strong>  
                        press on the create a new club page button and fill out the form
                      </li>
                      <li className="bio">
                        <strong>Create a party</strong> 
                        Go to the club page and press the create teh party button
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
                      <h1>{user.first_name}</h1>
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
                            {savedParties.map((savedParty) => {
                              let partyId = savedParty.party_id
                              let party = parties[partyId - 1]
                              return (
                                <Card clubs={clubs} party={party}/>

                              )
                            })}
                          </div>
                        </>
                      ) : (
                          <div className="party__container">
                            <div className="party__section">
                              {tickets.map((ticket) => {
                                if(new Date (ticket.start_date) <= new Date() )
                                  return (
                                    <TicketCard ticket={ticket}/>
                                    
                                  )
                                }
                              )}
                            </div>
                          </div>

                        )}
                    </div>

                    <div className="club-info__container">
                      <ul>
                        <li>
                          <strong>Name</strong> {`${user.first_name} ${user.last_name}`}
                        </li>
                        <li className="bio">
                          <strong>About</strong> {user.id}
                        </li>

                        <li>
                          <strong>City</strong> {user.id}
                        </li>
                        <li>
                          <strong>Address</strong> <Map newLat={userLat} newLng={userLng} />
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
  const savedParties = useSelector((state) => Object.values(state.savedParties))
  const tickets = useSelector((state) => Object.values(state.tickets))
  const dispatch = useDispatch()
  return (
    <User 
      clubs={clubs}
      getAllClubs={() => dispatch(getAllClubs())}
      parties={parties}
      getAllParties={() => dispatch(getAllParties())}
      savedParties={savedParties}
      getSavedParties={(userId) => dispatch(getSavedParties(userId))}
      tickets={tickets}
      getAllTickets={(userId)=> dispatch(getAllTickets(userId))}
    />
  )

}
export default UserContainer;

