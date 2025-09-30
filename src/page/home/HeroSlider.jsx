"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

const slides = [
  {
    title: "Building Excellence",
    subtitle: "Since 2005",
    description:
      "Trusted government contractor specializing in public infrastructure, healthcare facilities, educational institutions, and government buildings across Bihar and beyond",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "Building India's",
    subtitle: "Infrastructure",
    description:
      "Leading construction company specializing in government projects across Eastern India. We design, develop, and deliver world-class infrastructure with excellence and innovation.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "Roads & Bridges",
    subtitle: "Construction",
    description:
      "Building critical transportation infrastructure connecting communities. We design, develop, and deliver world-class infrastructure with excellence and innovation.",
    image:"/images/homePage/road_Bridge.jpg",
  },
  {
    title: "Railway Infrastructure",
    subtitle: "Excellence",
    description:
      "Specialized in station buildings, platforms, and railway development projects. We design, develop, and deliver world-class infrastructure with excellence and innovation.",
    image:"/images/homePage/railway-sunrise.jpg",
  },
];

// Custom Arrow Component
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
      <i className="ri-arrow-left-s-line text-2xl text-white"></i>
    ) : (
      <i className="ri-arrow-right-s-line text-2xl text-white"></i>
    )}
  </motion.div>
);

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const sliderRef = useRef(null);

  // autoplay reduced to 3s
  const autoplaySpeed = 3000;

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed,
    arrows: true,
    pauseOnHover: true,
    fade: false,
    beforeChange: (_, next) => setActive(next),
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    appendDots: (dots) => (
      <div className="absolute bottom-6 w-full flex justify-center items-center z-30">
        <ul className="flex gap-3">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
          active === i ? "border-orange-500" : "border-white"
        }`}
      >
        {active === i && (
          <motion.div
            key={`dot-${active}`}
            className="w-2.5 h-2.5 rounded-full bg-orange-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: autoplaySpeed / 1000, ease: "linear" }}
            style={{ transformOrigin: "left center" }}
          />
        )}
      </div>
    ),
  };

  // Different animations per slide index
  const animations = [
    { initial: { scale: 1.2 }, animate: { scale: 1 } },
    { initial: { x: "10%" }, animate: { x: "0%" } },
    { initial: { x: "-10%" }, animate: { x: "0%" } },
    { initial: { opacity: 0 }, animate: { opacity: 1 } },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen w-full overflow-hidden">
            {/* Background with motion */}
            <motion.div
              key={active}
              className="absolute inset-0 bg-center bg-cover"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${slide.image})`,
              }}
              initial={animations[index % animations.length].initial}
              animate={animations[index % animations.length].animate}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />

            {/* Slide Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-16">
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
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
