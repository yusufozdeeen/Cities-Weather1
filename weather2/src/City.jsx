import React from 'react'

const City = ({city}) => {
  return (
    <div>
      <h1>City: {city.name}</h1>
      <h1>Temp: {city.main.temp}</h1>
      <h1>Country: {city.sys.country}</h1>
      <h1>Weather: {city.weather[0].description}</h1>
      <h1>Wind Speed: {city.wind.speed}</h1>
    </div>
  )
}
export default City
