import React from 'react';
import CustomTitle from '../../hooks/CustomTitle';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    IconButton,
    Chip,
} from "@material-tailwind/react";

import { SiGithub } from 'react-icons/si';

const projects = [
    {
        name: "Creative Expressions Summer Camp School",
        description: "Comprehensive courses and tutorials on drawing, painting, crafts, sculpture, and more",
        screenShot: "https://res.cloudinary.com/ddez9nchs/image/upload/v1688341344/shadikur/FireShot_Capture_008_-_Creative_Expressions_-_A_place_to_share_your_creative_expressions__-_creativeexpression-bed43.web.app.png",
        technologies: [
            "React",
            "MongoDB",
            "Firebase",
            "Express JS API",
            "Node JS",
            "JWT",
            "MUI"
        ],
        links: [
            {
                frontEnd: "https://github.com/shadikur/creativeExpression",
                backEnd: "https://github.com/shadikur/creativeExpressionServer",
                liveSite: "https://creativeexpression-bed43.web.app/"
            }
        ]
    },
    {
        name: "Robot Toy Marketplace Toy listing website",
        description: "Explore a wide range of robot toys available for purchase",
        screenShot: "https://res.cloudinary.com/ddez9nchs/image/upload/v1688341343/shadikur/FireShot_Capture_010_-_Robo_Toy_-_Home_-_The_best_robot_toys_marketplace_in_the_world__-_toyclient.web.app.png",
        technologies: [
            "React",
            "MongoDB",
            "Express JS",
            "Node JS",
            "JWT",
            "Firebase",
            "TailwindCSS"
        ],
        links: [
            {
                frontEnd: "https://github.com/shadikur/toyclient",
                backEnd: "https://github.com/shadikur/toyserver",
                liveSite: "https://toyclient.web.app/"
            }
        ]
    },
    {
        name: "Thai Chef A place with most popular chef",
        description: "'Thai Chef', including its menu, location, hours of operation, and contact information",
        screenShot: "https://res.cloudinary.com/ddez9nchs/image/upload/v1688341333/shadikur/FireShot_Capture_011_-_Thai_Chef_-_The_taste_of_Thailand_-_thai-chef-e1bc4.web.app.png",
        technologies: [
            "React",
            "MongoDB",
            "Express JS",
            "DaisyUI",
            "TailwindCSS",
            "Firebase"
        ],
        links: [
            {
                frontEnd: "https://github.com/shadikur/chefClient",
                backEnd: "https://github.com/shadikur/chefServer",
                liveSite: "https://thai-chef-e1bc4.web.app/"
            }
        ]
    }
]

const Portfolio = () => {
    return (
        <section id='projects' className='pb-10'>
            <CustomTitle title={`My Projects`} subtitle={`You will find all my recent projects that I have worked.`}></CustomTitle>
            <div className="cards container mx-auto grid grid-cols-1 md:grid-cols-3">
                {
                    projects.map((project, index) =>
                        <Card key={index} className="w-full max-w-[26rem] shadow-lg">
                            <CardHeader floated={false} color="blue-gray">
                                <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
                                    <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                                        <img
                                            src={project.screenShot}
                                            alt=""
                                            className="w-full object-cover object-top rounded-lg"
                                        />
                                    </div>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="mb-3 flex items-center justify-between">
                                    <Typography variant="h5" color="blue-gray" className="font-medium">
                                        {project.name}
                                    </Typography>
                                    <Typography
                                        color="blue-gray"
                                        className="flex items-center gap-1.5 font-normal"
                                    >
                                        {
                                            project.links.map((link, index) =>
                                                <a key={index} href={link.frontEnd} rel='noreferrer' target='_blank'>
                                                    <IconButton className="bg-[#333333] rounded hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                                                        <SiGithub className='text-lg'></SiGithub>
                                                    </IconButton>
                                                </a>)
                                        }

                                    </Typography>
                                </div>
                                <Typography color="gray">
                                    {
                                        project.description
                                    }
                                </Typography>
                                <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                                    {
                                        project.technologies.map((tech, index) =>
                                            <Chip key={index} variant="outlined" value={tech} />
                                        )
                                    }
                                </div>
                            </CardBody>
                            <CardFooter className="pt-3">
                                {
                                    project.links.map((link, index) =>
                                        <a href={link.liveSite} key={index} rel='noreferrer' target='_blank'>
                                            <Button size="lg" fullWidth={true}>
                                                Live Site
                                            </Button>
                                        </a>
                                    )
                                }

                            </CardFooter>
                        </Card>)
                }
            </div>

        </section>
    );
};

export default Portfolio;