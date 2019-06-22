import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';

import FavoriteButton from './FavoriteButton';

describe('FavoriteButton component', () => {
    test('renders without crashing (smoke test)', () => {
        const div = document.createElement('div');
        ReactDOM.render(<FavoriteButton />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('adds the "selected" class', () => {
        const { container } = render(<FavoriteButton isSelected={true} />);
        const button = container.querySelector('button');
        expect(button).toHaveClass('favoriteButton selected');
    });

    test('does not add the "selected" class', () => {
        const { container } = render(<FavoriteButton isSelected={false} />);
        const button = container.firstChild;
        expect(button).toHaveClass('favoriteButton');
    });

    test('calls the handleClick prop', () => {
        const handleClickMock = jest.fn();
        const { container } = render(<FavoriteButton handleClick={handleClickMock} />);
        const button = container.firstChild;
        fireEvent.click(button);
        expect(handleClickMock).toHaveBeenCalledTimes(1);
    });

    test('does not the handleClick prop', () => {
        const handleClickMock = jest.fn();
        render(<FavoriteButton handleClick={handleClickMock} />);
        expect(handleClickMock).toHaveBeenCalledTimes(0);
    });
});