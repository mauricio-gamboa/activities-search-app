import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';

test('renders without crashing (smoke test)', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search />, div);
    ReactDOM.unmountComponentAtNode(div);
});