'use client'
import Header from "./components/header";
import Experiences from "./components/experiencesSection";
import Projects from "./components/projectsSection";
import ScrollDownButton from "./components/scrollButton";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="min-h-screen w-full"
      initial={{ opacity: 0, scale: 1.0 }}
      animate={{ opacity: 1, scale: 1.0 }}
      transition={{ duration: 1 }}
      style={{
        background: "linear-gradient(135deg, #282c34, #404854, #282c34)",
        backgroundSize: "300% 300%",
        animation: "gradientShift 20s ease infinite"
      }}
    >

      <motion.div
        className="items-center justify-items-center min-h-screen pb-10 font-raleway font-domine font-montserrat font-outfit pb-5">
        <Header />
        <ScrollDownButton targetId="experiences" label="↓ next" sectionId="experiences" className="top-[90%]" />
        <div className="pl-0 sm:pl-[10%]">
          <Experiences />
          <Projects />
        </div>
      </motion.div>
    </motion.div>
  );
}
