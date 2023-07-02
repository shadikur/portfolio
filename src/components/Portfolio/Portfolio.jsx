import React from 'react';
import CustomTitle from '../../hooks/CustomTitle';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
} from "@material-tailwind/react";
import {
    BanknotesIcon,
    StarIcon,
    HeartIcon,
    WifiIcon,
    HomeIcon,
    TvIcon,
    FireIcon,
} from "@heroicons/react/24/solid";

const Portfolio = () => {
    return (
        <section id='projects'>
            <CustomTitle title={`My Projects`} subtitle={`You will find all my recent projects that I have worked.`}></CustomTitle>
            <div className="cards container mx-auto">
                <Card className="w-full max-w-[26rem] shadow-lg">
                    <CardHeader floated={false} color="blue-gray">
                        <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                            <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                                <img
                                    src="./projects/creativeexpression-bed43.web.app_.png"
                                    alt=""
                                    className="w-full object-cover object-top rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                        <IconButton
                            size="sm"
                            color="red"
                            variant="text"
                            className="!absolute top-4 right-4 rounded-full"
                        >
                            <HeartIcon className="h-6 w-6" />
                        </IconButton>
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography variant="h5" color="blue-gray" className="font-medium">
                                Wooden House, Florida
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray">
                            Enter a freshly updated and thoughtfully furnished peaceful home
                            surrounded by ancient trees, stone walls, and open meadows.
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="$129 per night">
                                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <BanknotesIcon className="h-5 w-5" />
                                </span>
                            </Tooltip>
                            <Tooltip content="Free wifi">
                                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <WifiIcon className="h-5 w-5" />
                                </span>
                            </Tooltip>
                            <Tooltip content="2 bedrooms">
                                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <HomeIcon className="h-5 w-5" />
                                </span>
                            </Tooltip>
                            <Tooltip content={`65" HDTV`}>
                                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <TvIcon className="h-5 w-5" />
                                </span>
                            </Tooltip>
                            <Tooltip content="Fire alert">
                                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    <FireIcon className="h-5 w-5" />
                                </span>
                            </Tooltip>
                            <Tooltip content="And +20 more">
                                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                    +20
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                    <CardFooter className="pt-3">
                        <a href='https://creativeexpression-bed43.web.app/' rel='noreferrer' target='_blank'>
                            <Button size="lg" fullWidth={true}>
                                Preview Site
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
            </div>

        </section>
    );
};

export default Portfolio;