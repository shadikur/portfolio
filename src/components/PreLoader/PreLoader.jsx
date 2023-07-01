import React, { useEffect, useState } from 'react';
import { Spinner, Typography } from "@material-tailwind/react";
import "./PreLoader.css"

const PreLoader = ({ children }) => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 1000);
    });

    return (
        <div>
            {
                loaded ? <>
                    {children}
                </> :
                    <div className="loader">
                        <Spinner color="purple" className='h-11 w-11' />
                        <Typography variant="lead">
                            Welcome to my portfolio. Give me a sec to load up...
                        </Typography>
                    </div>
            }
        </div>
    );
};

export default PreLoader;