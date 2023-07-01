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
                    <>
                        loading ....
                    </>
            }
        </div>
    );
};

export default PreLoader;