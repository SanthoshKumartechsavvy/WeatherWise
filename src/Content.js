import React from 'react'

const Content = ({weatherData, date, isLoading, error}) => {
  return (
    <div className='content'>
      {isLoading && <h2> Loading... </h2>}
      {error!= null && <h2> {error} </h2>}
      {!error && !isLoading &&
        <>
          <h2>{weatherData?.name}, {weatherData?.sys?.country}</h2>
          <p> {date}</p>
          <h1> {(weatherData?.main?.temp - 273).toFixed(2)} °C </h1>
          <img src={`https://openweathermap.org/img/wn/${weatherData.weather ? weatherData?.weather[0].icon : 'could not fetch data' }@2x.png`}/>
          <h4>{weatherData.weather ? weatherData.weather[0].description : 'could not fetch data'}</h4>
        </>
        }
    </div>
  )
}

export default Content
