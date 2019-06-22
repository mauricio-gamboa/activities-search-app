import React from 'react';

// CSS
import './Rating.scss';

function Rating(props) {
    const {
        rating
    } = props;

    const getRatingStars = rating => {
        if (!rating) {
            return null;
        }

        const int = Math.trunc(rating * 1);
        const hasDecimal = rating.includes('.');
        const ratingComponent = [];

        for (let i = 0; i < int; i++) {
            ratingComponent.push(<i key={i} className='fas fa-star'></i>);
        }

        if (hasDecimal) {
            ratingComponent.push(<i key={int + 1} className='fas fa-star-half-alt'></i>);
        }

        return ratingComponent;
    };

    return (
        <div
            className='rating'
            title={`Rating: ${rating}`}>
            {`Rating:`}
            {' '}
            {getRatingStars(rating)}
        </div>
    );
}

export default Rating;