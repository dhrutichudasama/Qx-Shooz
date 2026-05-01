import { useEffect, useState } from "react";

// ✅ Import images
import banner1 from "../assets/banner-1.webp";
import banner2 from "../assets/banner-2.webp";
import banner3 from "../assets/banner-3.webp";

const slides = [
  {
    image: banner1,
    title: "Discover The Latest Trends In Footwear",
    desc: "From classic sneakers to trendy boots, our collection has something for everyone.",
    align: "right",
  },
  {
    image: banner2,
    title: "Find the perfect pair of shoes for every step",
    desc: "Explore our latest collection of high-performance sneakers and elegant lifestyle shoes.",
    align: "right",
  },
  {
    image: banner3,
    title: "Discover shoes that look great and feel even better",
    desc: "Our collection combines fashion-forward designs with unparalleled comfort.",
    align: "left",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          {/* Image */}
          <img
            src={slide.image}
            alt="banner"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Text */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 px-6 md:px-16 max-w-[600px]
            ${slide.align === "right" ? "right-0" : "left-0"}`}
          >
            <p className="text-sm tracking-widest text-white mb-2 uppercase">
              Step Into Style
            </p>

            <h1 className="text-2xl md:text-5xl font-semibold text-white mb-4">
              {slide.title}
            </h1>

            <p className="text-white/90 mb-6">{slide.desc}</p>

            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3">
              SHOP NOW →
            </button>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}