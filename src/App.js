import './App.css';
import { useState } from 'react';
import { Data } from './Data';

import backgroundImage from './media/bj.png'; 

function App() {
  const [search, setSearch] = useState('');
  const [weatherInfo, setWeatherInfo] = useState({});
  
  const api = {
    key: "8e01601781c2308a4b673cdc9626c7fd",
    base: "https://api.openweathermap.org/data/2.5/",
  }
  
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then((result) => {
          setWeatherInfo(result);
          setSearch('');
        }
      )
  };
  
  return (
    <div className="App" style={{backgroundImage: `url(${backgroundImage})`}}>
      <section className='container'>
        <div className='search'>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Enter city name'
          />
          <button onClick={searchPressed}>Search</button>
        </div>
        {search && <Data weatherInfo={weatherInfo}/>}
      </section>
    </div>
  );
}

export default App;
