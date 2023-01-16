import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import City from './City';

function App() {
  const key = "85626bf860629e72f99cbe418854c361";

  const [search, setSearch] = useState("");
  const [city, setCity] = useState();

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getApi()
  }, [search])
  return (
    <div className="App">
     <h2 className='header' >Which City?</h2>  <br />
      <h4 className='search' >Search</h4>
      
      <div>
        <input onKeyDown={(e) => setSearch(e.target.value)} style={{ border: "2px solid black ",borderRadius:"7px" }} />
        {city && <City city={city} />}
      </div>
    </div>
  );
}

export default App;
