import React, { useState, useEffect } from 'react';

// CSS
import './App.scss';

// Services
import getActivities from '../../services/activities';

// Components
import Search from '../Search/Search'
import ToursList from '../ToursList/ToursList';

function App() {
    const [tours, setTours] = useState([]);
    const [matchedTours, setMatchedTours] = useState([]);
    const [favoriteTours, setFavoriteTours] = useState([]);

    useEffect(() => {
        const fetchTours = async () => {
            const data = await getActivities();
            const tours = data.tours;

            // adds and in to the tours
            for (let i = 0; i < tours.length; i++) {
                tours[i].id = i;
            }

            setTours(tours);
        };

        fetchTours();
    }, []);

    const addToFavorites = id => {
        const index = matchedTours.findIndex(tour => tour.id === id);

        if (index !== -1) {
            const favorites = [...favoriteTours, matchedTours[index]];
            setFavoriteTours(favorites);

            const updatedTours = [...matchedTours];
            updatedTours.splice(index, 1);
            setMatchedTours(updatedTours);
        }
    };

    const removeFromFavorites = id => {

    };

    return (
        <div className='app'>
            <Search
                tours={tours}
                onChange={setMatchedTours} />

            {matchedTours.length > 0 &&
                <div>
                    <h2>Search results:</h2>
                    <ToursList
                        toggleFavorites={addToFavorites}
                        tours={matchedTours} />
                </div>
            }

            {favoriteTours.length > 0 &&
                <div>
                    <h2>Favorite tours:</h2>
                    <ToursList
                        toggleFavorites={removeFromFavorites}
                        tours={favoriteTours} />
                </div>
            }
        </div>
    );
}

export default App;
