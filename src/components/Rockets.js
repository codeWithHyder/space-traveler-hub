import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsData } from '../redux/rockets/rocketsSlice';
import Loader from './Loader';
import Rocket from './Rocket';

const Rockets = () => {
  const {
    rockets, isLoading, hasError, isFetched,
  } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRocketsData());
    }
  }, [dispatch, isFetched, rockets.length]);
  if (isLoading) {
    return <Loader />;
  }

  if (hasError) return <h2>An error has occured</h2>;
  if (rockets.length === 0) return <h2>No Rockets exist</h2>;

  return rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />);
};

export default Rockets;
