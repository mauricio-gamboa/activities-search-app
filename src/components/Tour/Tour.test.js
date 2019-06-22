import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import Tour from './Tour';

describe('Tour component', () => {
    test('renders without crashing (smoke test)', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Tour />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    describe('displays atrtibutes properly', () => {
        let props;

        beforeEach(() => {
            props = {
                title: 'Skip the Line: Neues Museum Berlin Tickets',
                price: '46',
                currency: '$',
                rating: '5',
                isSpecialOffer: true
            };
        });

        test('adds the title attribute', () => {
            const { container } = render(<Tour {...props} />);
            const elementWithTitle = container.querySelectorAll('div[title="Special Offer"]');
            expect(elementWithTitle.length).toBe(1);
        });

        test('adds the title attribute', () => {
            props.isSpecialOffer = false;
            const { container } = render(<Tour {...props} />);
            const elementWithTitle = container.querySelectorAll('div[title="Special Offer"]');
            expect(elementWithTitle.length).toBe(0);
        });

        test('displays the special offer icon', () => {
            const { container } = render(<Tour {...props} />);
            const icon = container.querySelectorAll('.fa-tags');
            expect(icon.length).toBe(1);
        });

        test('does not display the special offer icon', () => {
            props.isSpecialOffer = false;
            const { container } = render(<Tour {...props} />);
            const icon = container.querySelectorAll('.fa-tags');
            expect(icon.length).toBe(0);
        });

        test('displays the correct price', () => {
            const { container } = render(<Tour {...props} />);
            const price = container.querySelector('.price');
            expect(price.textContent).toBe(`${props.currency + props.price}`);
        });

        test('displays the correct title', () => {
            const { container } = render(<Tour {...props} />);
            const title = container.querySelector('.title');
            expect(title.textContent).toBe(props.title);
        });
    });
});