import React from 'react';
import { FaPython } from 'react-icons/fa';
import { SiCplusplus, SiPytorch, SiNvidia } from 'react-icons/si'; 
import Image from 'next/image';

const Mlperf = () => (
    <Image
        src="/MLperf-logo.jpeg"
        alt="MLperf"
        width={56}
        height={56}
        className="inline align-middle relative"
        style={{ minWidth: 36, minHeight: 36, top: '-6px' }}
    />
);

const nsigths = () => (
    <Image
        src="/nsigths-logo.png"
        alt="nsigths"
        width={36}
        height={36}
        className="inline align-middle relative"
        style={{ minWidth: 36, minHeight: 36, top: '-6px' }}
    />
);

const nsigthc = () => (
    <Image
        src="/nsigthc-logo.png"
        alt="nsigthc"
        width={36}
        height={36}
        className="inline align-middle relative"
        style={{ minWidth: 36, minHeight: 36, top: '-6px' }}
    />
);

export function ProjectsSection() {
    return (
        <div className="mx-auto max-w-4xl px-8 pb-8">
            <h1 id="projects" className="pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl mb-10">
                Projects
            </h1>
            <div className="flex flex-col md:flex-row gap-8">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="flex-1 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 p-8 shadow-lg flex flex-col items-center"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">{project.title}</h2>
                        <div className="flex flex-row gap-4 mb-4">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="text-3xl" title={tech.label}>
                                    {React.createElement(tech.icon)}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-4 mt-auto">
                            {/* 
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                            >
                                GitHub
                            </a>
                            */}
                            <a
                                href={project.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                            >
                                View PDF
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const projects = [
    {
        title: 'Benchmarking and Profiling Machine Learning workloads on GPUs using MLPerf',
        link: 'https://github.com/yourusername/project-one',
        pdf: '/pdfs/MLPerf.pdf',
        technologies: [
            { icon: SiCplusplus, label: 'C++' },
            { icon: Mlperf, label: 'MLPerf' },
            { icon: nsigthc, label: 'Nsight compute' },
            { icon: nsigths, label: 'Nsight systems' },
            { icon: SiNvidia, label: 'CUDA (Nvidia)' }, 
        
        ]
    },
    {
        title: 'Periocular age and gender recognition',
        link: 'https://github.com/yourusername/project-two',
        pdf: '/pdfs/Periocular age and gender recognition.pdf',
        technologies: [
            { icon: FaPython, label: 'Python' },
            { icon: SiPytorch, label: 'PyTorch' }
        ]
    }
];
