import Header from "./Header";
import Search from "./Search";
import Content from "./Content";
import { format } from 'date-fns'; 
import { useState, useEffect } from "react";

function App() {

  useEffect(()=> {
    handleFetch('chennai');
  },[]);

  const citiesUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
  const citiesOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'a80e8af97amsha3c0a9efa3a75cdp1ad201jsn733319825346',
      'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
    }
  };

  useEffect(() => {
    const handleCitiesFetch = async() => {
      try {
        const response = await fetch(citiesUrl, citiesOptions);
        const result = await response.json();
        // const citiesData = result.map()
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    handleCitiesFetch();
  },[]);
  

  
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cities, setCities] = useState('');
  console.log(weatherData);
  
  
  const handleFetch = async (cityNameParam) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNameParam}&appid=7d413e8929275e292d75a0b95c2d95f9`);
      if(!response.ok) throw Error("City not found");
      const data = await response.json();
      const currentDate = new Date();
      const formattedDate = format(currentDate, 'dd/MM/yyyy');
      setDate(formattedDate);
      setWeatherData(data);      
      setError(null);
    } catch (e) {
      console.log(e);
      setError(e.message);
      console.log(error);
    }
    finally {
      setIsLoading(false);
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    handleFetch(cityName);
  }

  

  return (
    <div className="App">
      <Header/>
      <Search
        cityName = {cityName}
        setCityName = {setCityName}
        handleSearch = {handleSearch}
        />
      <Content
        weatherData = {weatherData}
        date = {date}
        isLoading = {isLoading}
        error = {error}
        />

    </div>
  );
}

export default App;
