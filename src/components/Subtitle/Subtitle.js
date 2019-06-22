import React from 'react';

function Subtitle(props) {
    const {
        children,
        icon
    } = props;

    return (
        <h2 className='subtitle'>
            <i className={`fas ${icon}`}></i>
            {' '}
            {children}
        </h2>
    );
}

export default Subtitle;