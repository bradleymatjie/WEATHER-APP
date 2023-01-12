import './App.css';
import { useState, useCallback } from 'react';
import { Data } from './components/Data/Data';
import { searchPressed } from './apiData';

import backgroundImage from './media/bj.png';

function App() {
const [search, setSearch] = useState('');
const [weatherInfo, setWeatherInfo] = useState({});  

  const searchFunction = useCallback(() => {
    searchPressed(search).then(response => {
      if ('Error' in response) {
        alert('Error!! check spelling and search again');
      } else {
        setWeatherInfo(response);
      }
    
      }).finally(() => {
        setSearch('');
      });
    },
  [search]);

  return (
    <div className="App" style={{backgroundImage: `url(${backgroundImage})`}}>
      <section className='container'>
        <h1>WEATHER APP</h1>
        <div className='search'>
          <form onSubmit={(event) => {
            event.preventDefault();
            searchFunction();
          }}>
            <input
              type='text'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Enter city name'
            />
            <button onClick={searchPressed}>Search</button>
          </form>
        </div>
        <Data weatherInfo={weatherInfo} />
      </section>
    </div>
  );
}

export default App;
