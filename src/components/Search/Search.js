import React from 'react';

// Services
import getActivities from '../../services/activities';

function Search(props) {
    const {
        onChange
    } = props;

    return (
        <div>
            <input
                onChange={e => onChange(e.target.value)}
                type='text'
                name='term'
                placeholder='What are you looking for?' />
        </div>
    );
}

export default Search;