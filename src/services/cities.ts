export const fetchCities = ({ lat, lng }: {lat: number, lng: number}): Promise<any> => {
  const url = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&units=metric&cnt=15&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
  return fetch(url)
    .then(response => response.json())
    .then(({ list }) => {
      return list?.map(({
        id,
        weather,
        name,
        main: {
          // feels_like,
          // grnd_level,
          // humidity,
          // pressure,
          // sea_level,
          temp: current,
          temp_max: max,
          temp_min: min,
        },
       }: any) => ({
        id,
        weather,
        weatherType: weather[0]?.main,
        name,
        current: Math.round(current),
        min: Math.round(min),
        max: Math.round(max),
      }))
    })
}

export const fetchCityById = (id: number): Promise<any> => {
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&cnt=15&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
  return fetch(url)
    .then(response => response.json())
    .then(({
        id,
        weather,
        name,
        main: {
          // feels_like,
          // grnd_level,
          // humidity,
          // pressure,
          // sea_level,
          temp: current,
          temp_max: max,
          temp_min: min,
        },
       }: any) => ({
        id,
        weather,
        weatherType: weather[0]?.main,
        name,
        current: Math.round(current),
        min: Math.round(min),
        max: Math.round(max),
      }))
}
