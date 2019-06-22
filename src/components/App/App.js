import React, { useState, useEffect } from 'react';

// CSS
import './App.scss';

// Services
import getActivities from '../../services/activities';

// Utils
import {
    setStorage,
    getStorage
} from '../../utils/store';

// Constants

import { FAVORITE_TOURS_KEY } from '../../constants';

// Components
import Search from '../Search/Search'
import ToursList from '../ToursList/ToursList';

function App() {
    const [tours, setTours] = useState([]);
    const [matchedTours, setMatchedTours] = useState([]);
    const [favoriteTours, setFavoriteTours] = useState(getStorage(FAVORITE_TOURS_KEY));

    // This effect gets the tours from the JSON.
    useEffect(() => {
        const fetchTours = async () => {
            const data = await getActivities();
            setTours(data.tours);
        };

        fetchTours();
    }, []);

    // This effect saves the favorite tours in session storage.
    useEffect(() => {
        setStorage(FAVORITE_TOURS_KEY, favoriteTours);
    }, [favoriteTours]);

    const addToFavorites = id => {
        const index = matchedTours.findIndex(tour => tour.id === id);

        if (index !== -1) {
            const newFavorite = Object.assign({}, matchedTours[index]);
            newFavorite.isFavorited = true;
            setFavoriteTours([...favoriteTours, newFavorite]);

            const updatedTours = [...matchedTours];
            updatedTours.splice(index, 1);
            setMatchedTours(updatedTours);
        }
    };

    const removeFromFavorites = id => {
        const index = favoriteTours.findIndex(tour => tour.id === id);

        if (index !== -1) {
            const updatedTours = [...favoriteTours];
            updatedTours.splice(index, 1);
            setFavoriteTours(updatedTours);
        }
    };

    const cleanAndSetMatchedTours = filteredTours => {
        const tours = []

        // Exclude the favorited ones
        for (let i = 0; i < filteredTours.length; i++) {
            const index = favoriteTours.findIndex(tour => tour.id === filteredTours[i].id);

            if (index === -1) {
                tours.push(filteredTours[i]);
            }
        }

        setMatchedTours(tours);
    };

    return (
        <div className='app'>
            <Search
                tours={tours}
                onChange={cleanAndSetMatchedTours} />

            {matchedTours && matchedTours.length > 0 &&
                <div>
                    <h2>Search results:</h2>
                    <ToursList
                        toggleFavorites={addToFavorites}
                        tours={matchedTours} />
                </div>
            }

            {favoriteTours && favoriteTours.length > 0 &&
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
