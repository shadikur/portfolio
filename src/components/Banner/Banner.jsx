import { Button } from '@material-tailwind/react';
import React from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import axios from 'axios';

const TEXTS = ['Shadikur', 'a Fullstack Engineer', 'expert in DevOps', 'expert in Automation', 'expert in Telecom'];

const Banner = () => {
    const [index, setIndex] = React.useState(0);
    const [ipAddress, setIpAddress] = React.useState('');

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    const ipAddressOfVisitor = async () => {
        const response = await fetch('https://api.ipify.org/?format=json');
        const data = await response.json();
        return data.ip;
    }

    ipAddressOfVisitor().then(ip => {
        setIpAddress(ip);
    });

    const handleRequestResume = async () => {
        const { value: email } = await Swal.fire({
            title: 'Enter your email address',
            input: 'email',
            inputLabel: 'I need your email address to send you my resume 😊',
            inputPlaceholder: 'Enter your email address',
            confirmButtonText: 'Rquest Resume',
        })

        if (email) {
            axios.post(`${import.meta.env.VITE_API_URL}/resume`, {
                email: email,
                ipAddress: ipAddress
            }).then(res => {
                Swal.fire(`Your request has been sent successfully.`)
            }).catch(err => {
                Swal.fire(`${err.response.data}`)
            })
        }
    }

    return (
        <section className="pt-10 overflow-hidden bg-gray-200 md:pt-0 sm:pt-16 2xl:pt-16 shadow" id="top">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2"
                    data-aos="zoom-in-up"
                >
                    <div>
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            Hey 👋
                            <br />
                            I am <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                        </h2>
                        <p
                            className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                            I am a Full Stack Engineer with expertise in multiple technologies. My educational background includes a bachelors degree in Mechatronics System Engineering and a strong foundation in Aerospace Engineering. I am deeply passionate about technology and always eager to learn and explore new advancements.
                        </p>
                        <p className="mt-4 text-xl text-gray-600 md:mt-8 flex space-x-2">
                            <a href='#about'>
                                <Button variant="outlined" >
                                    More
                                </Button></a>

                            <Button className='flex items-center' onClick={handleRequestResume}><FaCloudDownloadAlt className='mr-1'></FaCloudDownloadAlt>Request Resume</Button>
                        </p>
                    </div>
                    <div className="relative"
                        data-aos="zoom-in-up"
                    >
                        <img
                            className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                            alt=""
                        />
                        <img
                            className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                            src="https://res.cloudinary.com/ddez9nchs/image/upload/v1725744513/shadikur/Square_ME-removebg-preview.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Banner;