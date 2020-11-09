export const fetchCities = ({ lat, lng }: {lat: number, lng: number}): Promise<any> => {
  const url = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&units=metric&cnt=15&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
  return fetch(url)
    .then(response => response.json())
    .then(({ list }) => {
      return list?.map(({
        weather,
        name: title,
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
        weather,
        weatherType: weather[0]?.main,
        current,
        title,
        min,
        max,
      }))
    })
}
