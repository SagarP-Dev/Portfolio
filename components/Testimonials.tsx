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
        <div className="relative">
          <Carousel>
            <CarouselContent>
              {data?.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="flex flex-col items-center justify-center gap-5 md:gap-7 pb-10"
                >
                  <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-center">
                    {item?.title}
                  </h2>
                  <p className="tracking-wide text-center leading-7 max-w-6xl px-4">
                    {item?.description}
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>

            
            <div className="absolute top-1/2 -translate-y-1/2 left-3 right-3 md:left-8 md:right-8 flex justify-between px-6">
              <CarouselPrevious className="w-14 h-14 flex items-center justify-center bg-white/90 rounded-full shadow-lg text-lg" />
              <CarouselNext className="w-14 h-14 flex items-center justify-center bg-white/90 rounded-full shadow-lg text-lg" />
            </div>
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
