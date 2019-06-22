import React from 'react';
import ReactDOM from 'react-dom';
import Tour from './Tour';

test('renders without crashing (smoke test)', () => {
    const props = {
        title: 'Skip the Line: Neues Museum Berlin Tickets',
        price: '46',
        currency: '$',
        rating: '5',
        isSpecialOffer: true
    };
    const div = document.createElement('div');
    ReactDOM.render(<Tour {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
});