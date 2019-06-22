import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';

import Search from './Search';

describe('Search component', () => {
    test('renders without crashing (smoke test)', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Search />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    describe('tours handling', () => {
        const tours = [
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

        test('calls the onChange props with the correct value', () => {
            const onChangeMock = jest.fn();
            const { container } = render(<Search tours={tours} onChange={onChangeMock} />);
            const input = container.querySelector('input[type="text"]');
            fireEvent.change(input, { target: { value: 'Berlin' } });
            expect(onChangeMock).toHaveBeenCalledWith([tours[0]]);
        });

        test('calls the onChange props with the correct value', () => {
            const onChangeMock = jest.fn();
            const { container } = render(<Search tours={tours} onChange={onChangeMock} />);
            const input = container.querySelector('input[type="text"]');
            fireEvent.change(input, { target: { value: 'Skip' } });
            expect(onChangeMock).toHaveBeenCalledWith(tours);
        });

        test('calls the onChange props with the correct value', () => {
            const onChangeMock = jest.fn();
            const { container } = render(<Search tours={tours} onChange={onChangeMock} />);
            const input = container.querySelector('input[type="text"]');
            fireEvent.change(input, { target: { value: 'Costa Rica' } });
            expect(onChangeMock).toHaveBeenCalledWith([]);
        });
    });
});