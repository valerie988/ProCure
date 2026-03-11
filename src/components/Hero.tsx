import { useState, useEffect } from "react";

// Slides
const slides = [
  {
    title: "Simplify Procurement",
    desc: "Connect with suppliers and optimize your workflow efficiently.",
    img: "/images/pic17.jpeg",
  },
  {
    title: "Manage Suppliers Easily",
    desc: "Track all your supplier interactions in one place seamlessly.",
    img: "/images/pic2.jpeg",
  },
  {
    title: "Gain Actionable Insights",
    desc: "Analyze data and make smarter procurement decisions.",
    img: "/images/services.jpeg",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden rounded-b-3xl font-sans">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="h-full w-full relative flex flex-col justify-center items-center px-6 md:px-16 text-center text-white"
          >
            {/* Image */}
            <img
              src={slide.img}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover filter blur-sm brightness-75"
            />

            {/* Text */}
            <div className="relative max-w-3xl space-y-4">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-xl font-poppins">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl drop-shadow-lg font-medium">
                {slide.desc}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              idx === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;