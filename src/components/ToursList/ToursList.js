import React from 'react';

// Components
import Tour from '../Tour/Tour';

function ToursList(props) {
    const {
        tours
    } = props;

    return (
        <ul>
            {tours.length > 0 && tours
                .map((tour, index) =>
                    <li key={index}><Tour {...tour} /></li>)
            }
        </ul>
    );
}

export default ToursList;