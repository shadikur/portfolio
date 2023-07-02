import React from 'react';
import CustomTitle from '../../hooks/CustomTitle';

const keyskills = [

]

const Skills = () => {
    return (
        <div className='bg-gray-200' id='skills'>
            <CustomTitle title={`My Top Skills`} subtitle={`Technology, I am experienced with`}></CustomTitle>
            <div className="skill-group">
                <div className="keyskills">

                </div>
                <div className="programming-languages">

                </div>
                <div className="tools">

                </div>
            </div>
        </div>
    );
};

export default Skills;