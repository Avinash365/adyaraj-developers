"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

const slides = [
  {
    title: "Building India's",
    subtitle: "Infrastructure",
    description:
      "Leading construction company specializing in government projects across Eastern India. We design, develop, and deliver world-class infrastructure with excellence and innovation.",
    image:
      "https://readdy.ai/api/search-image?query=Bridge%20and%20flyover%20construction%2C%20highway%20infrastructure%20development%2C%20concrete%20bridge%20construction%2C%20government%20road%20project%2C%20heavy%20construction%20machinery%2C%20professional%20engineering%20work%2C%20modern%20infrastructure%20development%2C%20construction%20site%20photography&width=1920&height=1080&seq=hero-construction-4&orientation=landscape",
  },
  {
    title: "Roads & Bridges",
    subtitle: "Construction",
    description:
      "Building critical transportation infrastructure connecting communities. We design, develop, and deliver world-class infrastructure with excellence and innovation.",
    image:
      "https://readdy.ai/api/search-image?query=Bridge%20and%20flyover%20construction%2C%20highway%20infrastructure%20development%2C%20concrete%20bridge%20construction%2C%20government%20road%20project%2C%20heavy%20construction%20machinery%2C%20professional%20engineering%20work%2C%20modern%20infrastructure%20development%2C%20construction%20site%20photography&width=1920&height=1080&seq=hero-construction-4&orientation=landscape",
  },
  {
    title: "Railway Infrastructure",
    subtitle: "Excellence",
    description:
      "Specialized in station buildings, platforms, and railway development projects. We design, develop, and deliver world-class infrastructure with excellence and innovation.",
    image:
      "https://readdy.ai/api/search-image?query=Bridge%20and%20flyover%20construction%2C%20highway%20infrastructure%20development%2C%20concrete%20bridge%20construction%2C%20government%20road%20project%2C%20heavy%20construction%20machinery%2C%20professional%20engineering%20work%2C%20modern%20infrastructure%20development%2C%20construction%20site%20photography&width=1920&height=1080&seq=hero-construction-4&orientation=landscape",
  },
];

// Arrow Component
const Arrow = ({ onClick, direction }) => (
  <motion.div
    onClick={onClick}
    whileHover={{ scale: 1.2 }}
    className={`absolute top-1/2 z-20 w-12 h-12 hidden md:flex items-center justify-center rounded-full backdrop-blur-md bg-white/20 cursor-pointer transition hover:bg-white/30 ${
      direction === "left" ? "left-4" : "right-4"
    }`}
    style={{ transform: "translateY(-50%)" }}
  >
    {direction === "left" ? (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    )}
  </motion.div>
);

export default function HeroSlider() {
  const [blur, setBlur] = useState(false);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    pauseOnHover: true,
    fade: false,
    beforeChange: () => setBlur(true),
    afterChange: () => setBlur(false),
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    appendDots: dots => (
      <div className="absolute bottom-8 w-full flex justify-center items-center z-30">
        <ul className="flex gap-3">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-4 h-4 rounded-full bg-white/50 hover:bg-orange-500 cursor-pointer transition" />
    ),
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen w-full overflow-hidden">
            {/* Background */}
            <motion.div
              className={`absolute inset-0 bg-center bg-cover ${blur ? "filter blur-sm scale-105" : "scale-100"} transition-transform duration-700`}
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})` }}
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
            />

            {/* Slide Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-16">
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white"
                initial={{ y: -50, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 1, type: "spring", stiffness: 50 }}
              >
                {slide.title}{" "}
                <motion.span
                  className="text-orange-500"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {slide.subtitle}
                </motion.span>
              </motion.h1>

              <motion.p
                className="mt-4 text-white text-sm md:text-lg max-w-2xl"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                {slide.description}
              </motion.p>

              <motion.div
                className="mt-6 flex gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 1 }}
              >
                <motion.a
                  href="#projects"
                  className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  View Our Projects
                </motion.a>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
