'use client'
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface ExperienceProps {
    image: string;
    company: string;
    role?: string;
    date: string;
    description?: string[];
}

export default function ExperienceCard(props: ExperienceProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="flex flex-col items-center justify-center my-2 text-beige italic mx-5 sm:mx-5 pl-3">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="flex items-center">
                    <Image
                        src={props.image}
                        alt="company-logo"
                        width={80}
                        height={80}
                        className="rounded-full w-12 h-12 sm:w-18 sm:h-18 border border-white border-2"
                    />
                    <div className="text-lg sm:text-2xl font-light mb-2 font-montserrat ml-4">
                        {props.role} <span className="text-light-blue font-montserrat">@</span> {props.company} {props.date}
                        {/* Toggle Arrow */}
                        <div className="flex items-center">
                            <span className="text-light-blue text-sm font-montserrat"> see more</span>
                            <motion.svg
                                className="w-6 h-6"
                                animate={{ rotate: isOpen ? 360 : 270 }}
                                transition={{ duration: 0.3 }}
                                onClick={handleToggle}
                                style={{ transformOrigin: "center" }}  // Ensures the arrow rotates on its center
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M6 9l6 6 6-6"></path>
                            </motion.svg>
                        </div>
                    </div>
                </div>

                {/* Description List */}
                <motion.ul
                    className="text-sm sm:text-xl font-light font-outfit list-disc mt-4 text-left self-start pl-6 ml-10"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }} // Hide content while collapsed
                >
                    {props.description?.map((item, index) => (
                        <li key={index}>
                            {item.startsWith("http") ? (
                                <a href={item} target="_blank" rel="noopener noreferrer" className="text-light-blue underline">
                                    {item}
                                </a>
                            ) : (
                                item
                            )}
                        </li>
                    ))}
                </motion.ul>
            </motion.div>
        </header>
    );
}
