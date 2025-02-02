'use client';

import { motion } from "framer-motion";

const textItems = [
    "Placeholder Fact 1",
    "Placeholder Fact 2",
    "Placeholder Fact 3",
    "Placeholder Fact 4",
    "Placeholder Fact 5"
];

export default function SlidingTextList() {
    return (
        <div className="flex flex-col items-left justify-center h-full bg-[#282c34] p-4">
            <div className="w-full max-w-md">
                {textItems.map((text, index) => (
                    <motion.div
                        key={index}
                        initial={{ x: -100, opacity: 0 }} // Slide in from the left
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
                        className="bg-white shadow-md rounded-lg p-4 my-8 text-lg font-medium text-gray-800"
                    >
                        {text}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
