import React, { useState, useEffect } from 'react';

// Services
import getActivities from '../../services/activities';

// Components
import Search from '../Search/Search'
import ToursList from '../ToursList/ToursList';

function App() {
    const [tours, setTours] = useState(getActivities());
    const [matchedTours, setMatchedTours] = useState([]);

    useEffect(() => {
        const fetchTours = async () => {
            const data = await getActivities();
            setTours(data.tours);
        };

        fetchTours();
    }, []);

    const updateMatchedTours = serchTearm => {
        const filteredTours = tours.filter(tour => {
            const titleLower = tour.title.toLowerCase();
            const serchTearmLower = serchTearm.toLowerCase();
            return serchTearm && titleLower.includes(serchTearmLower);
        });

        setMatchedTours(filteredTours);
    };

    return (
        <div className='app'>
            <Search onChange={updateMatchedTours} />
            <ToursList tours={matchedTours} />
        </div>
    );
}

export default App;
