import { Typography } from '@material-tailwind/react';
import React from 'react';

const CustomTitle = ({ title, subtitle }) => {
    return (
        <div className='mx-auto container text-center p-10 broder border-b-black'>
            <Typography className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">{title}</Typography>
            <Typography className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">{subtitle}</Typography>
        </div>
    );
};

export default CustomTitle;