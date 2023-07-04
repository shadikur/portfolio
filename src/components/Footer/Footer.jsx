import React from 'react';
import { Typography } from "@material-tailwind/react";
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';


const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="px-4 divide-y bg-gray-800 text-gray-100">
            <div className="container grid grid-cols-1 md:grid-cols-3 items-center justify-items-center py-10 mx-auto">
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/shadikur/" title="LinkedIn" className="flex items-center p-1">
                    <SiLinkedin></SiLinkedin> <Typography>LinkedIn</Typography>
                </a>
                <a rel="noopener noreferrer" href="https://twitter.com/Shadikur" title="Twitter" className="flex items-center p-1">
                    <SiTwitter></SiTwitter> <Typography>Twitter</Typography>
                </a>
                <a rel="noopener noreferrer" href="https://github.com/shadikur" title="Github" className="flex items-center p-1">
                    <SiGithub></SiGithub> <Typography>GitHub</Typography>
                </a>
            </div>
            <div className="py-6 text-sm text-center text-gray-400">© {currentYear} Shadikur. All rights reserved.</div>
        </footer>
    );
};

export default Footer;