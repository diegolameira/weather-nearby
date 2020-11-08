import * as React from 'react';
import { Router } from "@reach/router";

import { MapScreen } from 'pages/map';
import { ListScreen } from 'pages/list';
import { SearchScreen } from 'pages/search';
import { DetailScreen } from 'pages/detail';
import { NotFound } from 'pages/404';

import { Navbar } from 'components/navbar';

export default function App() {
  return (
    <div>
      <Router>
        <MapScreen path="/" />
        <ListScreen path="/list" />
        <SearchScreen path="/search" />
        <DetailScreen path="/detail" />
        <NotFound default />
      </Router>
      <Navbar />
    </div>
  );
}
