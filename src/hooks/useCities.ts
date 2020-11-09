import React, { useContext } from 'react'

import { CitiesContext } from 'contexts/cities'
import * as Service from 'services/cities'

export const useCities = () => {
  const { error, city, cities, isLoading, setCities, setCity } = useContext(CitiesContext)

  const fetchCities = ({ lat, lng }: {lat: number, lng: number}) => {
    setCities(Service.fetchCities({ lat, lng }))
  }

  const fetchCityById = (id: number) => {
    setCity(Service.fetchCityById(id))
  }

  return { error, isLoading, cities, city, fetchCities, fetchCityById }
}
