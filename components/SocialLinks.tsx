import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const footerData = [
  { label: "Github", href: "https://github.com/SagarP-Dev", icon: <Github /> },
  

  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/sagar-trushna-panigrahi-079b6727a/",
    icon: <Linkedin />,
  },
  
  
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      {footerData?.map((item) => (
        <Link
          href={item?.href}
          key={item?.label}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-darkOrange/50 p-2 rounded-lg text-primary/80 hover:border-darkOrange hover:text-darkOrange hover:bg-darkOrange/5 hoverEffect"
        >
          <span>{item?.icon}</span>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
