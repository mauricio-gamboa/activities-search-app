import React from 'react';

function Tour(props) {
    const {
        currency,
        isSpecialOffer,
        price,
        rating,
        title
    } = props;

    return (<div>{title}</div>);
}

export default Tour;