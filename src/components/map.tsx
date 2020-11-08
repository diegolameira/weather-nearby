import * as React from 'react';
import {
  GoogleMap,
  LoadScript,
  StandaloneSearchBox,
  Marker,
} from '@react-google-maps/api';

import styles from 'styles/components.module.scss';

export const Map: React.FC = () => {
  const searchRef = React.useRef<any>();
  const [state, setState] = React.useState({
    position: {},
    mapContainerStyle: {
      width: '100vw',
      height: '100vh',
    },
    center: {
      lat: -22,
      lng: -43,
    },
    zoom: 6,
  });

  const handleClick = ({ latLng }: any) => {
    setState((currentState) => ({ ...currentState, position: latLng, center: latLng }));
  }

  const handlePlacesChange = () => {
    const { lat, lng } = searchRef.current?.getPlaces()[0].geometry.location;
    const position = { lat: lat(), lng: lng() }
    setState((currentState) => ({ ...currentState, position, center: position }));
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
      libraries={['places']}
    >
      <GoogleMap onClick={handleClick} {...state}>
        <StandaloneSearchBox
          onLoad={(ref) => (searchRef.current = ref)}
          onPlacesChanged={handlePlacesChange}
        >
          <input type="search" placeholder="Find a city or a place" className={styles.mapSearchBox} />
        </StandaloneSearchBox>
        <Marker position={state.position} />
      </GoogleMap>
    </LoadScript>
  );
};
