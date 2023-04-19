import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/Missions';

const Mission = ({
  id, name, description, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <th className="heading" scope="row">{name}</th>
      <td className="heading col-lg-7">{description}</td>
      <td className="btns">
        {reserved ? (
          <span className="badge text-bg-primary">Active Member</span>
        ) : (<span className="badge text-bg-secondary">Not A Member</span>
        )}
      </td>
      <td className="btns">
        {reserved ? (
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => dispatch(leaveMission(id))}
          >
            Leave Mission
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-outline-secondary test-small btn-sm"
            onClick={() => dispatch(joinMission(id))}
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
};

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
