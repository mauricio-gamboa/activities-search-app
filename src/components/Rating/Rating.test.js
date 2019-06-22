import React from 'react';
import ReactDOM from 'react-dom';
import Rating from './Rating';

test('renders without crashing (smoke test)', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Rating rating={'4.8'} />, div);
    ReactDOM.unmountComponentAtNode(div);
});