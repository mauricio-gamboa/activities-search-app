import React from 'react';

// CSS
import './Tour.scss';

// Component
import '../FavoriteButton/FavoriteButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

function Tour(props) {
    const {
        currency,
        isSpecialOffer,
        price,
        rating,
        title,
        toggleFavorites,
        id,
        isFavorited
    } = props;

    return (
        <div className='tour'>
            <FavoriteButton
                isSelected={isFavorited}
                handleClick={() => toggleFavorites(id)} />
            <div className='title' dangerouslySetInnerHTML={{ __html: title }} />
        </div>
    );
}

export default Tour;