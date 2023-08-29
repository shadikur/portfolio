import React from 'react';
import CustomTitle from '../../hooks/CustomTitle';
import { FaCss3, FaHtml5, FaJava, FaMarsStrokeH } from 'react-icons/fa';
import { SiAmazonaws, SiApache, SiAzuredevops, SiBootstrap, SiC, SiCplusplus, SiCss3, SiCucumber, SiDaisyui, SiDigitalocean, SiDocker, SiEclipseche, SiEclipsejetty, SiExpress, SiFirebase, SiGit, SiGooglechrome, SiGooglecloud, SiHtml5, SiIntellijidea, SiJavascript, SiJenkins, SiJquery, SiJson, SiJsonwebtokens, SiLinux, SiMongodb, SiMysql, SiNextdotjs, SiNginx, SiNodedotjs, SiPhp, SiPostgresql, SiPostman, SiPowershell, SiPython, SiReact, SiSelenium, SiShell, SiSwift, SiTailwindcss, SiUikit, SiVisualstudiocode, SiXaml } from 'react-icons/si';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import { Typography } from '@material-tailwind/react';


const skills = [
    {
        name: "HTML",
        icon: <SiHtml5 className='h-10 w-10' />,
    },
    {
        name: "CSS",
        icon: <SiCss3 className='h-10 w-10' />,
    },
    {
        name: "JavaScript",
        icon: <SiJavascript className='h-10 w-10' />,
    },
    {
        name: "Bootstrap",
        icon: <SiBootstrap className='h-10 w-10' />,
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className='h-10 w-10' />,
    },
    {
        name: "React JS",
        icon: <SiReact className='h-10 w-10' />,
    },
    {
        name: "Next JS",
        icon: <SiNextdotjs className='h-10 w-10' />,
    },
    {
        name: "Express JS",
        icon: <SiExpress className='h-10 w-10' />,
    },
    {
        name: "Node JS",
        icon: <SiNodedotjs className='h-10 w-10' />,
    },
    {
        name: "Material UI",
        icon: <SiUikit className='h-10 w-10' />,
    },
    {
        name: "Daisy UI",
        icon: <SiDaisyui className='h-10 w-10' />,
    },
    {
        name: "Firebase",
        icon: <SiFirebase className='h-10 w-10' />,
    },
    {
        name: "JWT Auth",
        icon: <SiJsonwebtokens className='h-10 w-10' />,
    },
    {
        name: "JQuery",
        icon: <SiJquery className='h-10 w-10' />,
    },
    {
        name: "MongoDB",
        icon: <SiMongodb className='h-10 w-10'></SiMongodb>
    }
];

const languages = [
    {
        name: "Java",
        icon: <FaJava className='h-10 w-10'></FaJava>,
    },
    {
        name: "JavaScript",
        icon: <SiJavascript className='h-10 w-10' />,
    },
    {
        name: "PHP",
        icon: <SiPhp className='h-10 w-10' />,
    },
    {
        name: "MySQL",
        icon: <SiMysql className='h-10 w-10' />,
    },
    {
        name: "PostgreSQL",
        icon: <SiPostgresql className='h-10 w-10' />,
    },
    {
        name: "Shell",
        icon: <SiLinux className='h-10 w-10' />,
    },
    {
        name: "Powershell",
        icon: <SiPowershell className='h-10 w-10' />,
    },
    {
        name: "Swift",
        icon: <SiSwift className='h-10 w-10' />,
    },
    {
        name: "C",
        icon: <SiC className='h-10 w-10' />,
    },
    {
        name: "C++",
        icon: <SiCplusplus className='h-10 w-10' />,
    },
    {
        name: "JSON",
        icon: <SiJson className='h-10 w-10' />,
    },
    {
        name: "XML",
        icon: <SiXaml className='h-10 w-10' />,
    },
    {
        name: "Cucumber",
        icon: <SiCucumber className='h-10 w-10' />,
    },
    {
        name: "Python",
        icon: <SiPython className='h-10 w-10' />,
    },
    {
        name: "Matlab",
        icon: <FaMarsStrokeH className='h-10 w-10' />,
    }
]

const tools = [
    {
        name: "Git",
        icon: <SiGit className='h-10 w-10' />
    },
    {
        name: "VSCode",
        icon: <SiVisualstudiocode className='h-10 w-10' />,
    },
    {
        name: "Intellij IDEA",
        icon: <SiIntellijidea className='h-10 w-10' />,
    },
    {
        name: "EClips",
        icon: <SiEclipsejetty className='h-10 w-10' />,
    },
    {
        name: "Postman",
        icon: <SiPostman className='h-10 w-10' />,
    },
    {
        name: "Selenium",
        icon: <SiSelenium className='h-10 w-10' />,
    },
    {
        name: "Dev Tools",
        icon: <SiGooglechrome className='h-10 w-10' />,
    },
    {
        name: "Dcoker",
        icon: <SiDocker className='h-10 w-10' />,
    },
    {
        name: "Jenkins",
        icon: <SiJenkins className='h-10 w-10' />,
    },
    {
        name: "AWS",
        icon: <SiAmazonaws className='h-10 w-10' />,
    },
    {
        name: "GoogleCloud",
        icon: <SiGooglecloud className='h-10 w-10' />,
    },
    {
        name: "DigitalOcean",
        icon: <SiDigitalocean className='h-10 w-10' />,
    },
    {
        name: "Apache",
        icon: <SiApache className='h-10 w-10' />,
    },
    {
        name: "NGINX",
        icon: <SiNginx className='h-10 w-10' />,
    },
    {
        name: "Azure",
        icon: <SiAzuredevops className='h-10 w-10' />,
    },

]


const Skills = () => {
    return (
        <div className='bg-gray-200 pb-10' id='skills'>
            <CustomTitle title={`My Top Skills`} subtitle={`Technology, I am experienced with`}></CustomTitle>
            <div className="skill-group container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center">
                <div className="keyskills grid grid-cols-2 md:grid-cols-3 gap-3">
                    {skills.map((skill, index) =>
                        <Card key={index} className='items-center justify-center p-5 h-32 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white'>
                            {skill.icon}
                            <Typography>
                                {skill.name}
                            </Typography>
                        </Card>
                    )}
                </div>
                <div className="programming-languages grid grid-cols-2 md:grid-cols-3 gap-3">
                    {languages.map((language, index) =>
                        <Card key={index} className='items-center justify-center p-5 h-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 text-white'>
                            {language.icon}
                            <Typography>
                                {language.name}
                            </Typography>
                        </Card>
                    )}
                </div>
                <div className="tools grid grid-cols-2 md:grid-cols-3 gap-3">
                    {tools.map((tool, index) =>
                        <Card key={index} className='items-center justify-center p-5 h-32 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white'>
                            {tool.icon}
                            <Typography>
                                {tool.name}
                            </Typography>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Skills;