"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

import { TracingBeam } from "@/components/ui/tracing-beams";

export function ExperienceSection() {
  return (
    <>
      <h1
        id="experience"
        className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl"
      >
        Education
      </h1>
      <TracingBeam className="px-6">
        <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
          {experience.map((item, index) => (
            <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
              <h2 className={twMerge("text-xl text-black dark:text-white")}>
                {item.title}
              </h2>
              <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">
                {item.badge}
              </span>
              <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
}

const experience = [
  {
    title: "Sri Sathya Sai Institute of Higher Learning",
    description: (
      <ul className="list-disc">
        <li> Grade : N/A </li>
        <li>
          Relevant coursework : Data structures, Design and Algorithms, Computer
          Networks, Systems Programming, Operating systems, Computer
          Architecture, C++, Java, Advanced Linear algebra, Porbability and
          statistics, Functional analysis, optimization techniques, Mathematical
          methods of datamining.
        </li>
        <li>
          Activities and societies: Cricket, Soccer, Badminton, Multimedia,
          Photography, Videography, Tabla, Drums, Orchestra team, Drama team.
        </li>
      </ul>
    ),
    badge:
      "Masters in Mathematics (specialization in Computer science) : 2024 - 2026",
  },
  {
    title: "Sri Sathya Sai Institute of Higher Learning",
    description: (
      <ul className="list-disc">
        <li> Grade : A+ [7.4 CGPA]</li>
        <li>
          Relevant coursework :Algorithms, C, Linear algebra, Real analysis,
          Ordinary Differential equations, Multivariable calculus, Complex
          analysis.
        </li>
        <li>
          Activities and societies: 2023 Campus Sports Captain, leading school
          sports and athletic initiatives and fostering teamwork. Passionate
          cricketer and Soccer player; served as opening batsman for
          inter-campus cricket team. Skilled in tabla performance. Also part of
          the Orchestra and Drama team
        </li>
      </ul>
    ),
    badge: "Bachelors in Mathematics (hons) : 2020 - 2023",
  },
];
