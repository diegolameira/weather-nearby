import * as React from 'react'
import { useParams, RouteComponentProps } from "@reach/router"

import { normalizeTemp } from 'utils'

import styles from 'styles/pages.module.scss'
import { useCities } from 'hooks/useCities'

interface Props extends RouteComponentProps {}
export const DetailScreen: React.FC<Props> = () => {
  const params = useParams()
  const { fetchCityById, city } = useCities()

  React.useEffect(() => {
    if ( city?.id === params?.id ) fetchCityById(params.id)
  }, [fetchCityById, params])

  return (
    <div className={`${styles.detailScreen} ${normalizeTemp(city.current)}`} >
      <h1>{city.name}</h1>
      <h2>{city.current}</h2>
      <h2>{city.max}</h2>
      <h2>{city.min}</h2>
    </div>
  )
}
