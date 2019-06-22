import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import Subtitle from './Subtitle';

describe('Subtitle', () => {
    test('renders without crashing (smoke test)', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Subtitle />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('reders the correct text', () => {
        const text = 'This is a test';
        const icon = 'iconName';
        const { getByText } = render(<Subtitle icon={icon}>{text}</Subtitle>);
        expect(getByText(text)).toBeInTheDocument();
    });

    test('reders the correct text', () => {
        const iconClass = 'iconName';
        const { container } = render(<Subtitle icon={iconClass}>This is a test</Subtitle>);
        const icon = container.querySelector('i');
        expect(icon).toHaveClass(iconClass);
    });
});