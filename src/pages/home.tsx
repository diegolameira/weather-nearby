import * as React from 'react'
import { Router, RouteComponentProps } from "@reach/router"

import { ReactComponent as Logo } from 'assets/logo.svg'

import styles from 'styles/pages.module.scss'
import { Map } from 'components/map'
import { ListScreen } from './list';
import { SearchScreen } from './search';

interface Props extends RouteComponentProps {}
export const HomeScreen: React.FC<Props> = () => {
  return (
    <div className={styles.homeScreen}>
      <Logo className={styles.logo} />
      <Map />
      <Router>
        <SearchScreen path="/search" />
        <ListScreen path="/list" />
      </Router>
    </div>
  )
}
