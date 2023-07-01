import React, { useEffect, useState } from 'react';

const PreLoader = ({ children }) => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 2000);
    });

    return (
        <div>
            {
                loaded ? <>
                    {children}
                </> :
                    <div className="preloader-container">
                        <h1>Mohammad Shadikur</h1>
                        <div id="progress-line-container">
                            <div className="progress-line" />
                        </div>
                        <h1>Rahman</h1>
                    </div>
            }
        </div>
    );
};

export default PreLoader;