import React from 'react';

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import WeeklyForecast from '../WeeklyForceast/WeeklyForecast';

const Home = () => {
    return (
        <div>
            <div>
                <CurrentWeather />
                <WeeklyForecast />
            </div>
        </div>
    )
}

export default Home;
