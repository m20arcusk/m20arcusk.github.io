'use client'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
    const [hoverScale, setHoverScale] = useState(1.0);
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        const updateScale = () => {
            if (window.innerWidth < 640) { // 'sm' breakpoint in Tailwind (640px)
                setHoverScale(1.0);
            } else {
                setHoverScale(1.0);
            }
        };

        updateScale(); // Set initial value
        window.addEventListener("resize", updateScale);
        return () => window.removeEventListener("resize", updateScale);
    }, []);

    return (
        <section id="top" className="">
            <div className="flex flex-col items-center justify-center min-h-screen text-beige">
                <motion.div
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: hoverScale }}
                    transition={{
                        duration: 1.5,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className="flex flex-col items-center justify-center"
                >
                    <h1 className="text-lg sm:text-3xl mb-2 font-raleway font-domine font-montserrat font-outfit italic">
                        Hi! My name is
                    </h1>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        <h2 className="text-4xl sm:text-6xl font-light mb-2 font-raleway font-domine font-montserrat font-outfit italic">
                            Marcus Kam
                        </h2>
                    </motion.div>
                    <p className="text-lg sm:text-3xl font-light font-raleway font-domine font-montserrat font-outfit">
                        a <span className="text-light-blue font-raleway font-domine font-montserrat font-outfit italic">software engineer</span> and third-year student at ubc.
                    </p>
                    <button
                        onClick={() => window.location.href = "https://www.linkedin.com/in/marcuskam20/"}
                        className="px-4 py-1 border-2 border-light-blue text-light-blue rounded-full m-3 hover:bg-light-blue/30
               transition-all duration-300 font-raleway font-domine font-montserrat font-outfit italic"
                    >
                        Connect with me!
                    </button>
                </motion.div>
            </div>
            <motion.div
                className="absolute top-0 left-[37%] sm:left-[45%] text-[7rem]"
                initial={{ y: -200, rotate: 180 }} // Starts rotated upside down
                animate={{ y: isHover ? -65 : -200, rotate: 180 }} // Moves down while staying rotated
                transition={{ duration: 0.5, ease: "easeInOut" }} // Slower animation
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                👦🏻
            </motion.div>
        </section>
    );
}
