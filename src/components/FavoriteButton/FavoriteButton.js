import React from 'react';

// CSS
import './FavoriteButton.scss';

function FavoriteButton(props) {
    const {
        isSelected,
        isDisabled,
        handleClick
    } = props;

    return (
        <button
            className={`favoriteButton ${isSelected ? 'selected' : ''}`}
            type='button'
            disabled={isDisabled}
            onClick={() => handleClick()}>
            <i className='fas fa-heart'></i>
        </button>
    );
}

export default FavoriteButton;