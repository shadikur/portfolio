import React, { useRef } from 'react';
import CustomTitle from '../../hooks/CustomTitle';

const Skills = () => {
    return (
        <div className='bg-gray-200' id='skills'>
            <CustomTitle title={`My top skills`} subtitle={`Technology, I am experienced with`}></CustomTitle>
        </div>
    );
};

export default Skills;