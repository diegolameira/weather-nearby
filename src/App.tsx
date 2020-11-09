import * as React from 'react';
import { useMediaQuery } from 'react-responsive'
import { Router } from "@reach/router";
import { LoadScript } from '@react-google-maps/api';

import { HomeScreen } from 'pages/home';
import { ListScreen } from 'pages/list';
import { DetailScreen } from 'pages/detail';

import { Navbar } from 'components/navbar';
import { CitiesProvider } from 'contexts/cities';

export default function App() {
  const isPhone = useMediaQuery({
    query: '(max-width: 1023px)'
  })

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
      libraries={['places']}
    >
      <CitiesProvider>
        <Router>
          {
            isPhone && (
              <>
                <ListScreen path="/list" />
                <DetailScreen path="/detail/:cityId" />
              </>
            )
          }
          <HomeScreen default />
        </Router>
        <Navbar />
      </CitiesProvider>
    </LoadScript>
  );
}
