import { useContext } from 'react'

import { CitiesContext } from 'contexts/cities'
import * as Service from 'services/cities'

export const useCities = () => {
  const { cities, isLoading, setCities } = useContext(CitiesContext)

  const fetchCities = ({ lat, lng }: {lat: number, lng: number}) => {
    setCities(Service.fetchCities({ lat, lng }))
  }

  return { isLoading, cities, fetchCities }
}
