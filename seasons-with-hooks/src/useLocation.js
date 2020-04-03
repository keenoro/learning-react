import { useState, useEffect } from 'react';

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // [] means the useEffect only runs the arrow function once
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.latitude ),
      (err) => setErrorMessage(err.message)
    );
  }, []);

  //Community convention is to return an array of parameters
  return [lat, errorMessage];
};