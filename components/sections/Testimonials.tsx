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
        "Kanishaka demonstrated exceptional skill in React and Next.js, seamlessly handling complex frontend and backend tasks. His ability to learn quickly and proactively address challenges made him an invaluable part of the team. His contributions significantly elevated the quality and functionality of our project.",
      name: "Emily Watson",
      designation: "",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Kanishaka's technical expertise and proactive mindset stood out throughout the project. Whether it was implementing a complex feature or optimizing performance, he consistently delivered outstanding results. His work ethic and teamwork made him an asset to the team.",
      name: "",
      designation: "James Kim",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
