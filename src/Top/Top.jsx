import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Top() {
    const defaultMe = {
        name: '',
        description: '',
        thumbnail: ''
    };

    const [ me, setMe ] = useState(defaultMe);

    useEffect(() => {
        fetch('/data/me.json')
        .then(response => response.json())
        .then(data => {
            setMe(data);
        })
        .catch(error => console.error('Error:', error));
    }, []);

    return (
        <>
            <img src={ me.thumbnail }></img>
            <h3>{ me.name }</h3>
            <p>{ me.description }</p>
            <Link to="certification">保有資格</Link>
        </>
    );
}
