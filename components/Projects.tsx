import React from "react";
import Container from "./Container";
import Image from "next/image";
import { projectOne, projectThree, projectTwo } from "@/assets/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const data = [
  {
    title: "I've developed a fully functional real-time chat application using the MERN Stack (MongoDB, Express, React, Node.js). ",
    href: "http://chat-app-41ge.onrender.com/",
    image: projectOne,
    publishedAt: "April 21, 2024",
    category: "Chat Application",
  },
  {
    title: "I'm thrilled to unveil my latest creation - Fresh Fruit Finds - a project I've built using React.js, a powerful JavaScript library for building dynamic and responsive user interfaces.",
    href: "https://fresh-fruit-finds.vercel.app/",
    image: projectTwo,
    publishedAt: "April 21, 2024",
    category: "Fresh Fruit Finds",
  },
  {
    title: "Excited to share my latest project, Cafecito, with all of you! I built this project using React.js, a powerful JavaScript library for building user interfaces..",
    href: "https://cafecito-kappa.vercel.app/",
    image: projectThree,
    publishedAt: "April 21, 2024",
    category: "Blogs",
  },
];

const Projects = ({ className }: { className?: string }) => {
  return (
    <div className={cn("py-20 md:py-24", className)}>
      <Container className="">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-4xl font-bold tracking-wide">My Projects</h1>
          <p className="max-w-3xl text-center">
          A collection of projects showcasing my skills in web development, backend architecture, and UI/UX design. From responsive websites to interactive applications, each project reflects my passion for coding and problem-solving.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {data?.map((item, index) => (
            <div key={index}>
              <div className="overflow-hidden relative w-full h-64 group">
                <Image
                  src={item?.image}
                  alt="projectOne"
                  className="w-full h-full z-10"
                />
                <div className="absolute w-full h-full bg-primary left-0 top-0 opacity-10 scale-100 hover:scale-95 hoverEffect" />
              </div>
              <div className="space-y-5 mt-2">
                <p className="font-semibold text-primary/70 text-sm">
                  {item?.publishedAt} / {item?.category}
                </p>
                <h2 className="text-xl font-bold">{item?.title}</h2>
                <button className="pr-4 text-sm font-bold border-r-primary hover:text-darkOrange hoverEffect after:w-[2px] after:h-[60%] after:bg-primary  after:absolute relative after:-right-1.5 after:top-0 hover:after:-rotate-45 before:w-[2px] before:h-[60%] before:bg-primary before:absolute before:-right-1.5 before:bottom-0 hover:before:rotate-45 hover:after:inline-block after:transition-all before:transition-all transform-rotate duration-500">
                  <Link href={item?.href}>View Project</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
