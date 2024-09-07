import React, { useEffect, useState } from 'react';
import { Progress, Typography } from "@material-tailwind/react";
import "./PreLoader.css"

const PreLoader = ({ children }) => {
    const [loaded, setLoaded] = useState(false);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        for (let i = 0; i <= 100; i++) {
            setCounter(i);
        }
        setTimeout(() => {
            setLoaded(true);
        }, 100);
    }, []);


    return (
        <div>
            {
                loaded ? <>
                    {children}
                </> :
                    <div className='w-full h-screen flex flex-col justify-center items-center align-middle'>
                        <div className="w-[50vw] mx-auto">
                            <Progress value={counter} size="md" label="loaded" />
                        </div>
                    </div>
            }
        </div>
    );
};

export default PreLoader;