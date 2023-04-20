import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import './styles/Profile.css';

const Myprofile = () => {
  const { rockets } = useSelector((store) => store.rockets);
  const { missions } = useSelector((store) => store.missions);

  return (
    <div className="profile-content">
      <div className="missions-list">
        <h2>My Missions</h2>
        <Table striped bordered>
          <tbody>
            {missions.filter((mission) => mission.reserved).map(
              (reserved) => (<tr key={reserved.id}><td>{reserved.name}</td></tr>),
            )}
          </tbody>
        </Table>
      </div>
      <div className="rockets-list">
        <h2>My Rockets</h2>
        <Table striped bordered>
          <tbody>
            {rockets.filter((rocket) => rocket.reserved).map(
              (reserved) => (<tr key={reserved.id}><td>{reserved.name}</td></tr>),
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Myprofile;
