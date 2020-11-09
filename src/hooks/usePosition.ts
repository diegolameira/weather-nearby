import {useState, useEffect} from 'react';

const defaultSettings = {
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0,
};

interface Return {
  findLocation: () => void
  position: Coordinates|null
  error: string|null
}
export const usePosition = (settings = defaultSettings): Return => {
  const [position, setPosition] = useState<Coordinates|null>(null);
  const [error, setError] = useState<string|null>(null);

  const onChange = ({coords}: Position) => {
    setPosition(coords);
  };

  const onError = (error: PositionError) => {
    setError(error.message);
  };

  const findLocation = () => {
    navigator.geolocation.getCurrentPosition(onChange, onError, settings);
  }

  useEffect(() => {
    if (!navigator || !navigator.geolocation) {
      setError('Geolocation is not supported');
      return;
    }
  }, []);

  return { position, error, findLocation };
};
