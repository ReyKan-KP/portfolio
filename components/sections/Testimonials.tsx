import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Kanishaka excelled in working with Next.js, managing both frontend and backend tasks efficiently. He was proactive, quick to learn, and a great team player. His contributions added real value to the project.",
      name: "Prathmesh Sadake",
      designation: "Software Engineer at Intellify (Build Fast With AI)",
      src: "/images/testimonials1.png",
    },
    {
      quote:
        "Kanishaka is Great Developer and also as in person. He’s always willing to work, excels in UI/UX, ships products efficiently, and has a good understanding of what’s needed.",
      name: "Aaryan",
      designation: "Generative AI Developer at Intellify (Build Fast With AI)",
      src: "/images/testimonials2.png",
    },
    {
      quote:
        "Kanishaka excelled in React and Next.js, showcasing strong problem-solving skills and a proactive mindset. His adaptability and teamwork greatly contributed to the project's success.",
      name: "Sanjeev Patel",
      designation: "Full Stack Developer at Intellify (Build Fast With AI)",
      src: "/images/testimonials3.png",
    },
    // {
    //   quote:
    //     "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    //   name: "James Kim",
    //   designation: "Engineering Lead at DataPro",
    //   src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   quote:
    //     "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    //   name: "Lisa Thompson",
    //   designation: "VP of Technology at FutureNet",
    //   src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
