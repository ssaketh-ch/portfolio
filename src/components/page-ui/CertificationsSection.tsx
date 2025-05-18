import Image from "next/image";
import React from "react";

export function CertificationsSection() {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      link: "https://www.credly.com/badges/7204bf81-ba89-4ff9-9e12-d4ff473d7b6e/linked_in_profile",
      provider: "Amazon Web Services (AWS)",
      logo: "/aws-logo.jpg",
    },
    {
      title: "AWS Certified Developer – Associate",
      link: "https://www.credly.com/badges/0e97e70a-1dcf-42cf-a367-b653c74501ea/linked_in_profile",
      provider: "Amazon Web Services (AWS)",
      logo: "/aws-logo.jpg",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      link: "https://www.credly.com/badges/b5767ac4-8720-4a66-9933-68ed0dfec538/linked_in_profile",
      provider: "Amazon Web Services (AWS)",
      logo: "/aws-logo.jpg",
    },
    {
      title: "SAS Certified Specialist: Base Programming",
      link: "https://cp.certmetrics.com/SAS/en/public/verify/credential",
      provider: "SAS (Credential ID FLBDEWQ2LEFQ1NSH)",
      logo: "/sas-logo.png",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-8 pb-8">
      <h1
        id="certifications"
        className="max-w-5xl pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl"
      >
        Certifications
      </h1>
      <ul className="mt-8 space-y-6">
        {certifications.map((cert, idx) => (
          <li
            key={idx}
            className="flex items-center space-x-4 rounded-lg border border-black/[0.2] p-4 dark:border-white/[0.2]"
          >
            <Image
              src={cert.logo}
              alt={`${cert.provider} logo`}
              width={40}
              height={40}
              className="object-contain"
            />
            <div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-600 hover:underline dark:text-blue-400"
              >
                {cert.title}
              </a>
              <div className="text-sm text-neutral-700 dark:text-neutral-300">
                {cert.provider}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
