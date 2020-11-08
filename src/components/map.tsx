import * as React from 'react';
import {
  GoogleMap,
  StandaloneSearchBox,
  Marker,
  StandaloneSearchBoxProps,
} from '@react-google-maps/api';

import { ReactComponent as Locate } from 'assets/locate.svg';
import styles from 'styles/components.module.scss';
import { usePosition } from 'hooks/usePosition';

export const Map: React.FC = () => {
  const { error, position: userPosition, findLocation } = usePosition()
  const searchRef = React.useRef<any>();
  const [state, setState] = React.useState({
    userLocation: {},
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

  React.useEffect(() => {
    if (!userPosition) return;
    const position = { lat: userPosition.latitude, lng: userPosition.longitude };
    setState((currentState) => ({ ...currentState, position, center: position, userLocation: position }));
  }, [userPosition])

  return (
    <GoogleMap onClick={handleClick} {...state}>
      <SearchBox
        onLoad={(ref) => (searchRef.current = ref)}
        onPlacesChanged={handlePlacesChange}
      >
        {!Boolean(error) && <Locate onClick={findLocation} title="Find my position" className={state.userLocation === state.position ? 'active' : ''} />}
      </SearchBox>
      <Marker position={state.position} />
    </GoogleMap>
  );
};

interface SearchBoxProps extends StandaloneSearchBoxProps {}
export const SearchBox: React.FC<SearchBoxProps> = ({ onLoad, onPlacesChanged, children }) => {
  return (
    <StandaloneSearchBox
      onLoad={onLoad}
      onPlacesChanged={onPlacesChanged}
    >
      <div className={styles.searchBox}>
        <input type="search" placeholder="Find a city or a place" />
        {children}
      </div>
    </StandaloneSearchBox>
  )
}
