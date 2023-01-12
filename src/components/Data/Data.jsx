import './Data.css'

export const Data = ({ weatherInfo }) => {
    return (
        <div>
            <div className='top'>
            <h1 className='title'>{weatherInfo.name}</h1>
            <div className='top_container'>
                <h2>{weatherInfo.main ? weatherInfo.main.temp: "0"}&deg;C</h2>
                <div className='min_max'>
                <p>max: {weatherInfo.main ? weatherInfo.main.temp_max : "0"}&deg;C</p>
                <p>min: {weatherInfo.main ? weatherInfo.main.temp_min : "0"}&deg;C</p>
                </div>
            </div>
            </div>

            <div className='middle'>
            <p>{weatherInfo.weather ? weatherInfo.weather[0].main : 'none'}</p>
            <p>{weatherInfo.weather ? weatherInfo.weather[0].description : 'none'}</p>
            <p>wind speed: {weatherInfo.wind ? weatherInfo.wind.speed : "0"}ms</p>
            </div>

            <div className='bottom'>
            <p>FEELS LIKE<span>{weatherInfo.main ? weatherInfo.main.feels_like : '0'}&deg;C</span></p>
            <p>PRESSURE<span>{weatherInfo.main ? weatherInfo.main.pressure : '0'} hPa</span></p>
            <p>HUMIDITY<span>{weatherInfo.main ? weatherInfo.main.humidity : '0'}</span></p>
            </div>
        </div>
    );
}