import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import { bookRocket, cancelBooking } from '../redux/rockets/rocketsSlice';
import './styles/Rocket.css';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  return (
    <div className="rocket-card">
      <img className="rocket-img" src={rocket.image} alt="rocket" />
      <div className="rocket-informations">
        <h3 className="rocket-name">{rocket.name}</h3>
        <p className="rocket-description">
          {rocket.reserved && (
          <Badge bg="success" className="reserve-badge">
            Reserved
          </Badge>
          )}
          {rocket.description}
        </p>
        {rocket.reserved && (
        <Button
          onClick={() => {
            dispatch(cancelBooking(rocket.id));
          }}
          className="reserve-rocket"
          variant="outline-secondary"
        >
          Cancel Reservation
        </Button>
        )}
        {!rocket.reserved && (
        <Button
          onClick={() => {
            dispatch(bookRocket(rocket.id));
          }}
          className="reserve-rocket"
          variant="primary"
        >
          Reserve Rocket
        </Button>
        )}

      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
