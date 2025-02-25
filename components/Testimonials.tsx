import React from "react";
import Container from "./Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const data = [
  {
    title: "Skills & Technologies",
    description:
      "Proficient in modern web technologies including React.js, Node.js, Express.js, and MongoDB. Passionate about learning new tools to enhance web performance and user experience.",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Git & GitHub"],
  },
  {
    title: "Certifications & Achievements",
    description:
      "Completed courses and certifications to enhance my skills in full-stack development. Actively participating in coding challenges and hackathons.",
    },
  {
    title: "Open Source Contributions",
    description:
      "Actively contributing to open-source projects and collaborating with developers worldwide. Engaging in meaningful projects to improve coding skills and community engagement.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-darkOrange/10 py-20 md:py-24">
      <Container>
        <Carousel>
          <CarouselContent>
            {data?.map((item, index) => (
              <CarouselItem
                key={index}
                className="flex flex-col items-center justify-center gap-5 md:gap-7"
              >
                <h2 className="text-5xl font-bold tracking-wide">
                  {item?.title}
                </h2>
                <p className="tracking-wide text-center leading-7 max-w-6xl">
                  {item?.description}
                </p>
                
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </div>
  );
};

export default Testimonials;
