'use client';
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon, VercelLogoIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';
import { FaInstagram, FaMedium } from 'react-icons/fa';

import { ModeToggle } from '@/components/page-ui/ModeToggle';
import { HoveredLink, Menu, MenuItem } from '@/components/ui/navbar-menu';
import { cn } from '@/lib/utils';

export function Navbar() {
    return (
        <div className="relative flex w-full items-center justify-center">
            <NavbarComponent className="top-2" />
        </div>
    );
}

function NavbarComponent({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50', className)}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Navigation">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#landing-page">Landing Page</HoveredLink>
                        <HoveredLink href="#experience">Experience</HoveredLink>
                        <HoveredLink href="#skills">Skills</HoveredLink>
                        <HoveredLink href="#certifications">Certifications</HoveredLink>
                        <HoveredLink href="#projects">Projects</HoveredLink>
                        <HoveredLink href="/articles">Articles</HoveredLink>
                        <HoveredLink href="#contact-me">Contact Me</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Social">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="https://github.com/ssaketh-ch" rel="noopener noreferrer" target="_blank">
                            <GitHubLogoIcon className="mr-1" /> Github
                        </HoveredLink>
                        <HoveredLink href="https://www.linkedin.com/in/sai-saketh-cherukuri-825456250" rel="noopener noreferrer" target="_blank">
                            <LinkedInLogoIcon className="mr-1" /> Linkedin
                        </HoveredLink>
                        <HoveredLink href="https://www.instagram.com/ssaketh_ch/" rel="noopener noreferrer" target="_blank">
                            <FaInstagram className="mr-1" /> Instagram
                        </HoveredLink>
                        <HoveredLink href="https://medium.com/@ssaketh.2002" rel="noopener noreferrer" target="_blank">
                            <FaMedium className="mr-1" /> Medium
                        </HoveredLink>
                    </div>
                </MenuItem>
                <ModeToggle />
            </Menu>
        </div>
    );
}
