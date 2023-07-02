import React, { useEffect, useState } from 'react';
import { Spinner, Typography } from "@material-tailwind/react";
import "./PreLoader.css"
import { Dna } from 'react-loader-spinner';

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
                        <Dna
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="dna-loading"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper"
                        />
                        <Typography variant="lead">
                            One moment please ...
                        </Typography>
                    </div>
            }
        </div>
    );
};

export default PreLoader;