import React from 'react';

// CSS
import './Tour.scss';

// Component
import '../FavoriteButton/FavoriteButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import Rating from '../Rating/Rating';

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
        <div
            className='tour'
            title={isSpecialOffer ? 'Special Offer' : ''}>
            <FavoriteButton
                isSelected={isFavorited}
                handleClick={() => toggleFavorites(id)} />
            <div className='price'>{`${currency}${price}`}</div>
            <div>
                {isSpecialOffer &&
                    <span><i class='fas fa-tags'></i>{' '}</span>
                }
                <span
                    className='title'
                    dangerouslySetInnerHTML={{ __html: title }} />
            </div>
            <Rating rating={rating} />
        </div>
    );
}

export default Tour;