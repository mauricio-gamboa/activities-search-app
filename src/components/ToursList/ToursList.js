import React from 'react';

// Components
import Tour from '../Tour/Tour';

function ToursList(props) {
    const {
        tours,
        toggleFavorites
    } = props;

    return (
        <ul>
            {tours.length > 0 && tours.map((tour, index) => {
                return (
                    <li key={index}>
                        <Tour toggleFavorites={toggleFavorites} {...tour} />
                    </li>
                );
            })}
        </ul>
    );
}

export default ToursList;