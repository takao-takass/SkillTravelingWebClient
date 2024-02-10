import React, { useState, useEffect } from 'react';
import "./certificate.css";

export default function Certificate() {
    const defaultCertificates = {
        certificates: [
            {
                acquiredAt: '',
                name: '',
                description: '',
                badge: '',
                website: '',
            },
        ]
    };

    const [ certificates, setCertificates ] = useState(defaultCertificates);

    useEffect(() => {
        fetch('/data/certificates.json')
        .then(response => response.json())
        .then(data => {
            setCertificates(data);
        })
        .catch(error => console.error('Error:', error));
    }, []);

    const certificateList = certificates.certificates.map((certificate, index) => {
        return (
            <div key={ index }>
                <h3>{ certificate.name }</h3>
                <p>{ certificate.description }</p>
                <img className="badge" src={ certificate.badge }></img>
                <a href={ certificate.website }>View Official Site</a>
            </div>
        );
    });

    return (
        <div>
            <h2>Certificates</h2>
            { certificateList }
        </div>
    );
}
