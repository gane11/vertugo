import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllClubs } from '../store/actions/clubsAction'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { getSavedParties } from "../store/actions/savePartyAction";

function User({ clubs, getAllClubs, savedParties, getSavedParties}) {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  let id = Number(userId)
  useEffect(() => {
    getSavedParties(id)
  }, [id])
  

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

  useEffect(() => {
    getAllClubs()
  }, [])

  if (!user) {
    return null;
  }

  return (
    <div>
    {user.owner ? (
    <>
    <div>==</div>
          <NavLink className="user__name" to={`/users/${user.id}/clubs`} exact={true} activeClassName="active">
            <Button variant="contained" color="primary"
            >Create a new club page</Button>
          </NavLink>
    <div>{user.first_name}</div>
        <div className="club__section">
          {clubs.map((club) => {
            if(club.owner_id === id)
            return (
              <>
              <li>{club.city}</li>
              <li>{club.name}</li>
              </>
            )
          })}
        </div>
      </>
    ): (
      <>
          <ul>
            <li>
              <strong>User Id</strong> {userId}
            </li>
            <li>
              <strong>Username</strong> {user.username}
            </li>
            <li>
              <strong>Email</strong> {user.email}
            </li>
          </ul>
          <div>
            <div className="saved_party__section">
              {/* {savedParties.map((savedParty) => {
                return (
                  <>
                    <li>{savedParty.party_id}</li>
                  </>
                )
              })} */}
            </div>
          </div>
          </>
    )}
    </div>
  );
}


const UserContainer = () => {
  const clubs = useSelector((state) => Object.values(state.clubs))
  const saved_parties = useSelector((state) => (state.saved_parties))
  const dispatch = useDispatch()
  return (
    <User 
      clubs={clubs}
      getAllClubs={() => dispatch(getAllClubs())}
      savedParties={saved_parties}
      getSavedParties={(id) => dispatch(getSavedParties(id))}
    />
  )

}
export default UserContainer;

