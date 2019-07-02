import React from 'react';

// CSS
import './Search.scss';

function Search(props) {
    const {
        tours,
        onChange
    } = props;

    const handleChange = serchTearm => {
        const filteredTours = tours.filter(tour => {
            const titleLower = tour.title.toLowerCase().replace(/ /g, '');
            const serchTearmLower = serchTearm.toLowerCase();
            return serchTearm && titleLower.includes(serchTearmLower);
        });

        onChange(filteredTours);
    };

    return (
        <div className='search'>
            <input
                onChange={e => handleChange(e.target.value)}
                type='text'
                name='term'
                placeholder='What are you looking for?' />
        </div>
    );
}

export default Search;