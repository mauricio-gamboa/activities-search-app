import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import ToursList from './ToursList';

describe('TourList component', () => {
    let tours;

    beforeEach(() => {
        tours = [
            {
                title: 'Skip the Line: Neues Museum Berlin Tickets',
                price: '46',
                currency: '$',
                rating: '5',
                isSpecialOffer: true
            },
            {
                title: 'Skip the Line: TV Tower Early Bird Tickets',
                price: '140',
                currency: '$',
                rating: '4.5',
                isSpecialOffer: false
            }
        ];
    });

    test('renders without crashing (smoke test)', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ToursList tours={tours} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('reder the correct amout of tours', () => {
        const { container } = render(<ToursList tours={tours} />);
        const displayedTours = container.querySelectorAll('li');
        expect(displayedTours.length).toBe(2);
    });

    test('reder the correct amout of tours', () => {
        tours.length = 1;
        const { container } = render(<ToursList tours={tours} />);
        const displayedTours = container.querySelectorAll('li');
        expect(displayedTours.length).toBe(1);
    });
});