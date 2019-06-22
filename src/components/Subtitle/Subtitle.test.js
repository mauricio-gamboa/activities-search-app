import React from 'react';
import ReactDOM from 'react-dom';
import Subtitle from './Subtitle';

test('renders without crashing (smoke test)', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Subtitle />, div);
    ReactDOM.unmountComponentAtNode(div);
});