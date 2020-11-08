import * as React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export const Map: React.FC = () => {
  const [mapProps] = React.useState({
    mapContainerStyle: {
      width: '100vw',
      height: '100vh',
    },
    center: {
      lat: -22,
      lng: -43,
    },
    zoom: 10,
  })

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
      libraries={['places']}
      >
      <GoogleMap {...mapProps} />
    </LoadScript>
  )
}
