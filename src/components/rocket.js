import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRocketsData } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRocketsData());
  }, [dispatch]);
  return <div>Rockets</div>;
};

export default Rockets;
