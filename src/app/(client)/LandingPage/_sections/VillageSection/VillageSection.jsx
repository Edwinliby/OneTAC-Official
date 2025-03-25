"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import test from "../../../../../../public/assets/1.webp";

const cards = [
    {
        img: test,
        vid: "/videoBg.webm",
        place: "Kerala",
        desc: "Vibrant masks and rhythmic tales of a 500-year-old art.",
    },
    {
        img: test,
        vid: "/videoBg.webm",
        place: "Uttar Pradesh",
        desc: "Sacred temples and timeless spirituality on the banks of Ganga rituals.",
    },
    {
        img: test,
        vid: "/videoBg.webm",
        place: "Tamil Nadu",
        desc: "Windswept ruins and serene shores at the edge of India.",
    },
    {
        img: test,
        vid: "/videoBg.webm",
        place: "Kerala",
        desc: "Vibrant masks and rhythmic tales of a 500-year-old art.",
    },
    {
        img: test,
        vid: "/videoBg.webm",
        place: "Uttar Pradesh",
        desc: "Sacred temples and timeless spirituality on the banks of Ganga rituals.",
    },
];

export default function VillageSection() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const scrollRef = useRef(null);
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const [isWideScreen, setIsWideScreen] = useState(false);

    useEffect(() => {
        setIsWideScreen(window.innerWidth >= 768);
    }, []);

    const handleMouseDown = (e) => {
        isDown.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
        isDown.current = false;
    };

    const handleMouseUp = () => {
        isDown.current = false;
    };

    const handleMouseMove = (e) => {
        if (!isDown.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 2;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-10 md:gap-16 px-4 py-10 lg:py-24 md:p-8 lg:p-16"
        >
            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="text-[var(--brown)] text-3xl md:text-4xl font-semibold"
            >
                Every village has a story. {isWideScreen && <br />}
                {" "}OneTAC helps the world hear it.
            </motion.h1>

            {/* Scrollable Cards */}
            <motion.div
                ref={scrollRef}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="relative overflow-x-scroll flex gap-4 scrollbar-hide cursor-grab active:cursor-grabbing scroll-smooth"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden w-[18rem] lg:w-[22rem] h-[25rem] lg:h-[30rem] bg-gray-400 rounded-xl flex-shrink-0 snap-start"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Image
                            src={card.img}
                            alt="Video Placeholder"
                            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 ${hoveredIndex === index ? "opacity-0" : "opacity-100"
                                }`}
                        />
                        <video
                            src={card.vid}
                            muted
                            loop
                            playsInline
                            className={`w-full h-full object-cover transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
                                }`}
                            autoPlay
                        />
                        <div className="w-full absolute bottom-0 left-0 z-10 text-white flex flex-col gap-1 p-4 bg-gradient-to-t from-black">
                            <b className="text-lg">{card.place}</b>
                            <p className="text-xs md:test-md text-gray-500 md:text-gray-200">{card.desc}</p>
                            <div className="absolute bottom-0 -z-10 left-0 w-full h-[150%] bg-gradient-to-t from-black"></div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}