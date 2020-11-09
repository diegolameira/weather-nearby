import * as React from 'react'
import { WeatherTypes } from 'typings'

import {
  PartlyCloudy
} from 'assets/weather-icons'

interface Props {
  weather: WeatherTypes
}
export const WeatherIcon: React.FC<Props> = ({ weather }) => {
  switch (weather) {
    case WeatherTypes.Clouds:
      return <PartlyCloudy />
    default:
      return <PartlyCloudy />
  }
}
