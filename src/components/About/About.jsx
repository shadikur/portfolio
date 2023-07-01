import React from 'react';
import CustomTitle from '../../hooks/CustomTitle';
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
} from "@material-tailwind/react";


const About = () => {
    return (
        <section id='about' className='mb-5'>
            <CustomTitle title="About Me" subtitle="I love to do the programming" />
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center container mx-auto'>
                <div className="experience">
                    <Typography className="text-2xl mb-5">
                        Work Experience
                    </Typography>
                    <div className="w-[24rem] md:w-[32rem]">
                        <Timeline>
                            <TimelineItem>
                                <TimelineConnector />
                                <TimelineHeader className="h-3">
                                    <TimelineIcon />
                                    <Typography variant="h6" color="blue-gray" className="leading-none">
                                        Timeline Title Here.
                                    </Typography>
                                </TimelineHeader>
                                <TimelineBody className="pb-8">
                                    <Typography
                                        variant="small"
                                        color="gary"
                                        className="font-normal text-gray-600"
                                    >
                                        The key to more success is to have a lot of pillows. Put it this way, it took me
                                        twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                        I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                        luv.
                                    </Typography>
                                </TimelineBody>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineConnector />
                                <TimelineHeader className="h-3">
                                    <TimelineIcon />
                                    <Typography variant="h6" color="blue-gray" className="leading-none">
                                        Timeline Title Here.
                                    </Typography>
                                </TimelineHeader>
                                <TimelineBody className="pb-8">
                                    <Typography
                                        variant="small"
                                        color="gary"
                                        className="font-normal text-gray-600"
                                    >
                                        The key to more success is to have a lot of pillows. Put it this way, it took me
                                        twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                        I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                        luv.
                                    </Typography>
                                </TimelineBody>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineConnector />
                                <TimelineHeader className="h-3">
                                    <TimelineIcon />
                                    <Typography variant="h6" color="blue-gray" className="leading-none">
                                        Timeline Title Here.
                                    </Typography>
                                </TimelineHeader>
                                <TimelineBody>
                                    <Typography
                                        variant="small"
                                        color="gary"
                                        className="font-normal text-gray-600"
                                    >
                                        The key to more success is to have a lot of pillows. Put it this way, it took me
                                        twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                        I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                        luv.
                                    </Typography>
                                </TimelineBody>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </div>
                <div className="education">
                    <Typography className="text-2xl mb-5">
                        Education
                    </Typography>
                    <div className="w-[24rem] md:w-[32rem]">
                        <Timeline>
                            <TimelineItem>
                                <TimelineConnector />
                                <TimelineHeader className="h-3">
                                    <TimelineIcon />
                                    <Typography variant="h6" color="blue-gray" className="leading-none">
                                        Timeline Title Here.
                                    </Typography>
                                </TimelineHeader>
                                <TimelineBody className="pb-8">
                                    <Typography
                                        variant="small"
                                        color="gary"
                                        className="font-normal text-gray-600"
                                    >
                                        The key to more success is to have a lot of pillows. Put it this way, it took me
                                        twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                        I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                        luv.
                                    </Typography>
                                </TimelineBody>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineConnector />
                                <TimelineHeader className="h-3">
                                    <TimelineIcon />
                                    <Typography variant="h6" color="blue-gray" className="leading-none">
                                        Timeline Title Here.
                                    </Typography>
                                </TimelineHeader>
                                <TimelineBody className="pb-8">
                                    <Typography
                                        variant="small"
                                        color="gary"
                                        className="font-normal text-gray-600"
                                    >
                                        The key to more success is to have a lot of pillows. Put it this way, it took me
                                        twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                        I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                        luv.
                                    </Typography>
                                </TimelineBody>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineConnector />
                                <TimelineHeader className="h-3">
                                    <TimelineIcon />
                                    <Typography variant="h6" color="blue-gray" className="leading-none">
                                        Timeline Title Here.
                                    </Typography>
                                </TimelineHeader>
                                <TimelineBody>
                                    <Typography
                                        variant="small"
                                        color="gary"
                                        className="font-normal text-gray-600"
                                    >
                                        The key to more success is to have a lot of pillows. Put it this way, it took me
                                        twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                        I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                        luv.
                                    </Typography>
                                </TimelineBody>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;