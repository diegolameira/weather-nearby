import * as React from 'react';
import { Link } from '@reach/router';

import styles from 'styles/components.module.scss';

import { ReactComponent as MapIcon } from 'assets/map.svg';
import { ReactComponent as MapIconActive } from 'assets/map-active.svg';
import { ReactComponent as SearchIcon } from 'assets/search.svg';
import { ReactComponent as SearchIconActive } from 'assets/search-active.svg';
import { ReactComponent as ListIcon } from 'assets/list.svg';
import { ReactComponent as ListIconActive } from 'assets/list-active.svg';

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <Link
        to={'/'}
        getProps={({ isCurrent }) => {
          return {
            children: isCurrent ? <MapIconActive /> : <MapIcon />,
          };
        }}
      />
      <Link
        to={'/search'}
        getProps={({ isCurrent }) => {
          return {
            children: isCurrent ? <SearchIconActive /> : <SearchIcon />,
          };
        }}
      />
      <Link
        to={'/list'}
        getProps={({ isCurrent }) => {
          return {
            children: isCurrent ? <ListIconActive /> : <ListIcon />,
          };
        }}
      />
    </nav>
  );
};
