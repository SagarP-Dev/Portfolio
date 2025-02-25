import React from "react";
import Container from "./Container";
import { Title } from "./typo";
import { Box, Dice5, LoaderPinwheel, Sparkle } from "lucide-react";

const data = [
  {
    icon: <Sparkle size={50} />,
    title: "Web Development",
    description:
      "Building responsive and dynamic websites using modern web technologies like React.js, Next.js, and Tailwind CSS.",
  },
  {
    icon: <Dice5 size={50} />,
    title: "Backend Development",
    description:
      "Developing robust server-side applications with Node.js, Express.js, and MongoDB to power web applications.",
  },
  {
    icon: <LoaderPinwheel size={50} />,
    title: "Innovative",
    description:
      "Constantly exploring new technologies and creative solutions to build efficient, scalable, and user-friendly applications. Passionate about pushing boundaries and improving digital experiences.",
  },
  {
    icon: <Box size={50} />,
    title: "Problem Solving",
    description:
      "Passionate about solving coding challenges and optimizing performance for better user experience.",
  },
];

const WhatIDo = () => {
  return (
    <div className="bg-darkColor text-primaryWhite py-20 md:py-24">
      <Container className="space-y-10">
        <div>
          <Title className="tracking-widest">What I Do</Title>
          <p className="tracking-wide max-w-2xl mt-2 text-primaryWhite/80">
          Passionate about building modern web applications, solving problems, and continuously learning new technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {data?.map((item) => (
            <div key={item?.title} className="space-y-4 group">
              <span className="group-hover:text-darkOrange hoverEffect group-hover:animate-spin inline-block">
                {item?.icon}
              </span>
              <h3 className="text-2xl font-semibold">{item?.title}</h3>
              <p className="tracking-wide text-primaryWhite/80 group-hover:text-primaryWhite/90 hoverEffect">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhatIDo;
