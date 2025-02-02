'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Header() {
    const [hoverScale, setHoverScale] = useState(1.0);
    const [isHover, setIsHover] = useState(false);
    const [isRainbow, setIsRainbow] = useState(false);

    useEffect(() => {
        const updateScale = () => {
            setHoverScale(window.innerWidth < 640 ? 1.0 : 1.0);
        };

        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    const handleEmojiClick = () => {
        setIsRainbow(true);
        setTimeout(() => setIsRainbow(false), 3000);
    };

    return (
        <section id="top">
            <div className="flex flex-col items-center w-full justify-center min-h-screen text-beige">
                <motion.div
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: hoverScale }}
                    transition={{
                        duration: 1.5,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="flex flex-col items-center justify-center"
                >
                    <h1 className="text-lg sm:text-3xl mb-2 font-raleway italic">
                        Hi! My name is
                    </h1>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        <h2
                            className={`text-4xl sm:text-6xl font-light mb-2 font-raleway italic 
                 
                bg-clip-text text-beige transition-all duration-500 
                ${isRainbow ? 'animate-flashingRainbow text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500' : ''}`}
                        >
                            Marcus Kam
                        </h2>
                    </motion.div>
                    <p className="text-lg sm:text-3xl text-center font-light font-raleway">
                        a{' '}
                        <span className="text-light-blue font-raleway italic">
                            software engineer
                        </span>{' '}
                        and third-year student at ubc.
                    </p>
                    <button
                        onClick={() =>
                        (window.location.href =
                            'https://www.linkedin.com/in/marcuskam20/')
                        }
                        className="px-4 py-1 border-2 border-light-blue text-light-blue rounded-full m-3 hover:bg-light-blue/30 transition-all duration-300 font-raleway italic"
                    >
                        Connect with me!
                    </button>
                </motion.div>
            </div>
            <motion.div
                className="absolute top-0 left-[37%] sm:left-[45%] cursor-pointer"
                initial={{ y: -200 }}
                animate={{ y: isHover ? -65 : -200, rotate: 180 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={handleEmojiClick}
            >
                <motion.div
                    initial={{ rotate: 180 }}
                    className='text-[7rem]'>
                    👦🏻
                </motion.div>
            </motion.div>
        </section>
    );
}
