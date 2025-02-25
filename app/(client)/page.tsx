import Banner from "@/components/Banner";
import Projects from "@/components/Projects";;
import Testimonials from "@/components/Testimonials";
import WhatIDo from "@/components/WhatIDo";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />
      
      <WhatIDo />
      <Projects />
      <Testimonials />
    </div>
  );
}
