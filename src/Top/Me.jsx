import React, { useState } from 'react';

function Me() {
    const defaultMe = {
        name: '',
        description: '',
        thumbnail: ''
    };

    const [ me, setMe ] = useState(defaultMe);

    fetch('/data/me.json')
    .then(response => response.json())
    .then(data => {
        setMe(data);
    })
    .catch(error => console.error('Error:', error));

    return (
        <>
            <img src={ me.thumbnail }></img>
            <h3>{ me.name }</h3>
            <p>{ me.description }</p>
        </>
    );
}


export default Me;