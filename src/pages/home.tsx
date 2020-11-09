import * as React from 'react'
import { Router, RouteComponentProps, useNavigate } from "@reach/router"

import { ReactComponent as Logo } from 'assets/logo.svg'

import { useCities } from 'hooks/useCities'
import styles from 'styles/pages.module.scss'
import { Map } from 'components/map'
import { ListScreen } from './list';
import { SearchScreen } from './search';

interface Props extends RouteComponentProps {}
export const HomeScreen: React.FC<Props> = () => {
  const navigate = useNavigate()
  const { cities } = useCities()

  React.useEffect(() => {
    if (cities.length) navigate('/search')
  }, [navigate, cities])

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
