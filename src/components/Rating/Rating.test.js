import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import Rating from './Rating';

describe('Rating component', () => {
    test('renders without crashing (smoke test)', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Rating rating={'4.8'} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('it should display 1 complete star', () => {
        const { container } = render(<Rating rating='1' />);
        const stars = container.querySelectorAll('.fa-star');
        expect(stars.length).toBe(1);
    });

    test('it should display 1 half star', () => {
        const { container } = render(<Rating rating='1.4' />);
        const halfStar = container.querySelectorAll('.fa-star-half-alt');
        expect(halfStar.length).toBe(1);
    });

    test('it should display 5 complete stars', () => {
        const { container } = render(<Rating rating='5' />);
        const stars = container.querySelectorAll('.fa-star');
        expect(stars.length).toBe(5);
    });

    test('it should display 1 half star', () => {
        const { container } = render(<Rating rating='4.5' />);
        const halfStar = container.querySelectorAll('.fa-star-half-alt');
        expect(halfStar.length).toBe(1);
    });
});