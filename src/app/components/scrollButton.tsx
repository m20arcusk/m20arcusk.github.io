'use client'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ScrollDownButtonProps {
    targetId: string;
    label: string;
    sectionId: string;
    className?: string; // Optional className prop for custom styling
}

export default function ScrollDownButton({ targetId, label, sectionId, className = "" }: ScrollDownButtonProps) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById(sectionId);
            if (!section) return;

            const rect = section.getBoundingClientRect();
            console.log(rect.height)
            setVisible(true);  
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sectionId]);

    const scrollToSection = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            console.warn(`Element with ID '${targetId}' not found.`);
        }
    };

    return (
        <motion.button
            onClick={scrollToSection}
            className={`absolute transform hidden sm:block left-[43%] sm:left-[47%] translate-x-1/2 bg-light-blue text-gray px-4 py-2 rounded-full shadow-lg ${className}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 10 : 20 }}
            transition={{ duration: 0.3 }}
        >
            {label}
        </motion.button>
    );
}
