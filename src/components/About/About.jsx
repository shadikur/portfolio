import React from 'react';
import CustomTitle from '../../hooks/CustomTitle';
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    Typography,
    Card,
} from "@material-tailwind/react";

import { FaBookReader } from 'react-icons/fa';
import { MdWorkHistory } from 'react-icons/md';
import ReactGA from "react-ga4";

const About = () => {
    ReactGA.initialize('YOUR_TRACKING_ID');
    return (
        <section id='about' className='mb-5' data-aos="fade-up-left">
            <CustomTitle title="About Me" subtitle="A brief description about me" />
            <Card className='container p-10 mx-auto text-center shadow-xl mb-7 bg-gray-200'>
                <Typography>
                    A seasoned Full Stack Engineer with over 10 years of experience successfully managing IT modernization and system integration projects. Known for bridging the gap between business and technology, I excel at developing innovative IT solutions that solve business problems and deliver measurable results. Skilled in designing and implementing scalable web applications using modern frameworks such as React.js and Laravel, with expertise in both front-end and back-end technologies. I possess excellent interpersonal skills and thrive in collaborative team environments. Highly adaptable, I am constantly learning and staying ahead of industry trends to drive success.
                </Typography>
            </Card>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center container mx-auto'>
                <div className="experience" data-aos="fade-up-right">
                    <Typography className="text-2xl mb-5 text-center">
                        Work Experience
                    </Typography>
                    <div className="w-[24rem] md:w-[32rem]">
                        <Timeline>
                            <TimelineItem className="h-28">
                                <TimelineConnector className="!w-[78px]" />
                                <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                                    <TimelineIcon className="p-3" variant="ghost">
                                        <MdWorkHistory className="h-5 w-5" />
                                    </TimelineIcon>
                                    <div className="flex flex-col gap-1">
                                        <Typography variant="h6" color="blue-gray">
                                            IT System Administrator
                                            (Guidepoint Global),
                                            Düsseldorf, Germany
                                        </Typography>
                                        <Typography variant="small" color="gray" className="font-normal">
                                            (01.11.2019 - Current)
                                        </Typography>
                                    </div>
                                </TimelineHeader>
                            </TimelineItem>
                            <TimelineItem className="h-28">
                                <TimelineConnector className="!w-[78px]" />
                                <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                                    <TimelineIcon className="p-3" variant="ghost" color="red">
                                        <MdWorkHistory className="h-5 w-5" />
                                    </TimelineIcon>
                                    <div className="flex flex-col gap-1">
                                        <Typography variant="h6" color="blue-gray">
                                            System Engineer
                                            (Count7 LTD),
                                            London, United Kingdom
                                        </Typography>
                                        <Typography variant="small" color="gray" className="font-normal">
                                            (31.01.2015 – 31.03.2019)
                                        </Typography>
                                    </div>
                                </TimelineHeader>
                            </TimelineItem>
                            <TimelineItem className="h-28">
                                <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                                    <TimelineIcon className="p-3" variant="ghost" color="green">
                                        <MdWorkHistory className="h-5 w-5" />
                                    </TimelineIcon>
                                    <div className="flex flex-col gap-1">
                                        <Typography variant="h6" color="blue-gray">
                                            QA Engineer
                                            (SBSystem UK Ltd),
                                            London, United Kingdom
                                        </Typography>
                                        <Typography variant="small" color="gray" className="font-normal">
                                            (30.11.2010 - 29.10.2013)
                                        </Typography>
                                    </div>
                                </TimelineHeader>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </div>
                <div className="education" data-aos="fade-up-left">
                    <Typography className="text-2xl mb-5 text-center">
                        Education
                    </Typography>
                    <div className="w-[24rem] md:w-[32rem]">
                        <Timeline>
                            <TimelineItem className="h-28">
                                <TimelineConnector className="!w-[78px]" />
                                <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                                    <TimelineIcon className="p-3" variant="ghost">
                                        <FaBookReader className="h-5 w-5" />
                                    </TimelineIcon>
                                    <div className="flex flex-col gap-1">
                                        <Typography variant="h6" color="blue-gray">
                                            M/BEng in Mechatronics Engineering, <br />
                                            Hochschule Rhein Waal, Germany
                                        </Typography>
                                        <Typography variant="small" color="gray" className="font-normal">
                                            31/08/2019 – 01/10/2023
                                        </Typography>
                                    </div>
                                </TimelineHeader>
                            </TimelineItem>
                            <TimelineItem className="h-28">
                                <TimelineConnector className="!w-[78px]" />
                                <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                                    <TimelineIcon className="p-3" variant="ghost" color="red">
                                        <FaBookReader className="h-5 w-5" />
                                    </TimelineIcon>
                                    <div className="flex flex-col gap-1">
                                        <Typography variant="h6" color="blue-gray">
                                            Ravensburg-Weingarten University<br />
                                            Weingarten, Germany.
                                        </Typography>
                                        <Typography variant="small" color="gray" className="font-normal">
                                            20/02/2019 – 01/08/2019
                                        </Typography>
                                    </div>
                                </TimelineHeader>
                            </TimelineItem>
                            <TimelineItem className="h-28">
                                <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                                    <TimelineIcon className="p-3" variant="ghost" color="green">
                                        <FaBookReader className="h-5 w-5" />
                                    </TimelineIcon>
                                    <div className="flex flex-col gap-1">
                                        <Typography variant="h6" color="blue-gray">
                                            ISEFP/BEng in Aerospace Engineering<br />
                                            Queen Mary Univerysity of London, UK.
                                        </Typography>
                                        <Typography variant="small" color="gray" className="font-normal">
                                            04/01/2013 – 17/02/2016
                                        </Typography>
                                    </div>
                                </TimelineHeader>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;