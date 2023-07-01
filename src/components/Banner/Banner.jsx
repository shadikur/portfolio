import { Button } from '@material-tailwind/react';
import React from 'react';

const Banner = () => {
    return (
        <section className="pt-10 overflow-hidden bg-gray-200 md:pt-0 sm:pt-16 2xl:pt-16 shadow">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            Hey 👋
                            <br />
                            I am Shadikur
                        </h2>
                        <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                            I am a Full Stack Developer having skills on multiple technologies. I have completed my bachelor degree in Mechatronics System Engineering and a core of Aerospace Engineering.
                        </p>
                        <p className="mt-4 text-xl text-gray-600 md:mt-8">
                            <span className="relative inline-block space-x-3">
                                <Button variant="outlined" >
                                    Explore
                                </Button>
                                <Button variant="contained" >
                                    Resume
                                </Button>
                            </span>
                        </p>
                    </div>
                    <div className="relative">
                        <img
                            className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                            alt=""
                        />
                        <img
                            className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                            src="https://res.cloudinary.com/ddez9nchs/image/upload/v1688208533/shadikur/IMG_9324-removebg-preview.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Banner;