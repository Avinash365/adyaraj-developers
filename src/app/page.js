"use client";

import { motion } from "framer-motion";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import HeroSlider from "@/page/home/HeroSlider";
import LatestNews from "@/page/home/LatestNews";
import AboutCompany from "@/page/home/About"; 
import Projects from "@/page/projects/Projects";
import GovernmentExpertise from "@/page/home/Specialization";
import ProjectStats from "@/page/home/ProjectStatisticsBar";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  return (
    <div>
      <Navbar/>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <HeroSlider/>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <AboutCompany/>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Projects/>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <GovernmentExpertise/>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <ProjectStats/>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <LatestNews/>
      </motion.div>

      <Footer/>
    </div>
  );
}
