import React from 'react';
import ReactDOM from 'react-dom';
import ToursList from './ToursList';

test('renders without crashing (smoke test)', () => {
    const tours = [{
        title: 'Skip the Line: Neues Museum Berlin Tickets',
        price: '46',
        currency: '$',
        rating: '5',
        isSpecialOffer: true
    }];
    const div = document.createElement('div');
    ReactDOM.render(<ToursList tours={tours} />, div);
    ReactDOM.unmountComponentAtNode(div);
});