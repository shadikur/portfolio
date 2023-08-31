import React from 'react';
import CustomTitle from '../../hooks/CustomTitle';
import { Button, Input, Textarea, Typography } from '@material-tailwind/react';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';
import axios from 'axios';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ipAddress, setIpAddress] = React.useState('');

    const onSubmit = (data) => {
        const ipAddressOfVisitor = async () => {
            const response = await fetch('https://api.ipify.org/?format=json');
            const data = await response.json();
            return data.ip;
        }

        ipAddressOfVisitor().then(ip => {
            setIpAddress(ip);
        });

        Swal.fire({
            title: 'Are you sure?',
            text: "You are about to send a message to Shadikur and your IP is being tracked! In case of any spamming, you will be blocked and reported to the authority!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, send it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post(`${import.meta.env.VITE_API_URL}/send`, {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    subject: data.subject,
                    message: data.message,
                    ipAddress: ipAddress
                })
                    .then(function (response) {
                        Swal.fire(
                            'Sent!',
                            'Your message has been sent successfully!',
                            'success'
                        )
                    })
                    .catch(function (error) {
                        Swal.fire(
                            'Error!',
                            error.response.data,
                            'error'
                        )
                    }
                    );
            }
        })
    };

    return (
        <div className='bg-gray-200' id='contact'>
            <CustomTitle title={`Contact Me`} subtitle={`Would like to get in touch? Simply fill out the form below and shoot me a message`}></CustomTitle>
            <section className='pb-20'>
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
                        <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3" data-aos="flip-left">
                            <div className="overflow-hidden bg-white rounded-xl">
                                <div className="p-6">
                                    <svg
                                        className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    <p className="mt-6 text-lg font-medium text-gray-900">
                                        +13322200022
                                    </p>
                                    <p className="mt-1 text-lg font-medium text-gray-900">
                                        +442036034258
                                    </p>
                                    <p className="mt-1 text-lg font-medium text-gray-900">
                                        +4928217869930
                                    </p>
                                </div>
                            </div>
                            <div className="overflow-hidden bg-white rounded-xl">
                                <div className="p-6">
                                    <svg
                                        className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <Typography className="mt-6 text-lg font-medium text-gray-900">
                                        hello@shadikur.com
                                    </Typography>
                                </div>
                            </div>
                            <div className="overflow-hidden bg-white rounded-xl">
                                <div className="p-6">
                                    <svg
                                        className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <Typography className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
                                        Brühl, Nord-Rhein-Westphalia, Germany
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 overflow-hidden bg-white rounded-xl">
                            <div className="px-6 py-12 sm:p-12">
                                <Typography className="text-3xl font-semibold text-center text-gray-900">
                                    Send me a message
                                </Typography>
                                <form className="mt-14" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                        <div>
                                            <div className="mt-2.5 relative">
                                                <Input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    label="Enter your name"
                                                    {...register("name", { required: true })}
                                                />
                                                {errors.name && <span className='text-deep-orange-900'>This field is required</span>}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mt-2.5 relative">
                                                <Input
                                                    type="email"
                                                    name=""
                                                    id=""
                                                    label='Enter your email address'
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                                />
                                                {errors.email && <span className='text-deep-orange-900'>This field is required</span>}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mt-2.5 relative">
                                                <Input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    label="Enter your phone number"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                    {...register("phone", { required: true, minLength: 6, maxLength: 15, pattern: /^[0-9]+$/i })}
                                                />
                                                {errors.phone && <span className='text-deep-orange-900'>This field is required</span>}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mt-2.5 relative">
                                                <Input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    label="Subject to your message"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                    {...register("subject", { required: true, minLength: 6, maxLength: 60 })}
                                                />
                                                {errors.subject && <span className='text-deep-orange-900'>This field is required</span>}
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <div className="mt-2.5 relative">
                                                <Textarea
                                                    name=""
                                                    id=""
                                                    label="Write your message"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                                                    rows={4}
                                                    defaultValue={""}
                                                    {...register("message", { required: true, minLength: 10, maxLength: 1000 })}
                                                />
                                                {errors.message && <span className='text-deep-orange-900'>This field is required</span>}
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <Button
                                                type="submit"
                                                className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                                            >
                                                Send
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;