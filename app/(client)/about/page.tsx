import { hero } from "@/assets/image";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

const BlogPage = () => {
  return (
    <Container className="bg-white text-darkColor py-10 md:py-20">
      <div>
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image
              className="h-48 w-full object-contain md:w-48"
              src={hero}
              alt="Profile picture"
              width={192}
              height={192}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-darkOrange font-bold">
              Full Stack Developer
            </div>
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-darkColor sm:text-4xl">
              Sagar Trushna Panigrahi
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-darkColor/80">
              Passionate about building scalable and efficient software
              solutions.
            </p>
          </div>
        </div>

        <div className="px-8 py-6">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-darkColor/80 mb-4">
          As a passionate full-stack developer specializing in the MERN stack, I love building
          dynamic and user-friendly applications. My journey in web development has been driven
          by curiosity, problem-solving, and a strong foundation in JavaScript technologies
          like React and Node.js.

          I enjoy writing clean and efficient code while continuously learning and exploring new 
          technologies. Whether it's crafting engaging front-end experiences or developing 
          scalable back-end solutions, I strive to create impactful digital experiences.
          </p>
          <p className="text-darkColor/80 mb-4">
          Beyond coding, I actively seek opportunities to collaborate, contribute to open-source 
          projects, and refine my skills. I believe in continuous growth and am always eager to 
          take on new challenges in the tech world!
          </p>
        </div>

        <div className="px-8 py-6 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Node.js",
              "Express.js",
              "MongoDb",
              "AWS",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlogPage;
