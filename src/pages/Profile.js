import React from 'react';
import { useSelector } from 'react-redux';
import ReservedRockets from './reservedRockets';

function Profile() {
  const missionsData = useSelector((state) => state.missions.missions);
  const joinedMissions = missionsData.filter((mission) => mission.joined);

  const profileStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    margin: '20px auto',
  };

  const ulStyles = {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  };

  const listStyles = {
    border: '1px solid lightgrey',
    padding: '15px 25vw 15px 20px',
  };
  return (
    <>
      <div style={profileStyle} className="profile">
        <div className="missions">
          <h2 className="missions-h1">My Missions</h2>
          <ul style={ulStyles} className="missions-ul">
            { joinedMissions.map((mission) => (
              <li style={listStyles} className="missions-li" key={mission.mission_id}>{ mission.mission_name }</li>
            )) }
          </ul>
        </div>
        <ReservedRockets />
      </div>

    </>
  );
}

export default Profile;
