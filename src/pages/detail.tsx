import * as React from 'react'
import { useParams, useLocation, RouteComponentProps, useNavigate } from "@reach/router"

import { normalizeTemp } from 'utils'

import styles from 'styles/pages.module.scss'
import { useCities } from 'hooks/useCities'
import { WeatherIcon } from 'components/weather-icon'

interface Props extends RouteComponentProps {
  location?: any
}
export const DetailScreen: React.FC<Props> = ({ location: { state } }) => {
  const params = useParams()
  const navigate = useNavigate()
  const { error, fetchCityById, isLoading, city } = useCities()

  React.useEffect(() => {
    if ( state?.name ) return
    if ( city.id === Number(params.cityId) ) {
      navigate(`${city.id}`, { replace: true, state: city })
    }
    if ( !error && !isLoading && city.id !== Number(params.cityId) ) {
      fetchCityById(params.cityId)
    }
  }, [fetchCityById, error, isLoading, city, params, state, navigate])

  return (
    <div className={`${styles.detailScreen} ${normalizeTemp(state?.current)}`} >
      <span className="title">{state?.name}</span>
      <div>
        <span className="current">{state?.current}</span>
        <div>
          <span className="max">{state?.max}</span>
          <span className="min">{state?.min}</span>
        </div>
      </div>
      <span className="icon"><WeatherIcon weather={state?.weatherType} /></span>
    </div>
  )
}
