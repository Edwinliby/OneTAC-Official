"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cardData } from "./data";
import DescriptionText from "@/Components/Description/Description";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

export default function VillageSection() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const scrollRef = useRef(null);
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const sectionRef = useRef(null);
    const [isSectionVisible, setIsSectionVisible] = useState(false);

    // Intersection Observer to track section entry (20% before)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsSectionVisible(true); // Load videos when section is close
                }
            },
            { root: null, threshold: 0, rootMargin: "20%" } // Load when 20% before entering viewport
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
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

    const scrollLeftHandler = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRightHandler = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-10 md:gap-16 px-4 py-10 lg:py-24 md:p-8 lg:p-16"
        >
            <div className="relative">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-[var(--brown)] text-[2rem] md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold md:leading-12 lg:leading-16 3xl:leading-20"
                >
                    India: A Cultural Odyssey
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    <DescriptionText
                        className={"mt-4 2xl:mt-8"}
                        content={"From snow-capped peaks to vibrant festivals, India’s cultural wealth is unmatched, offering a rich tapestry of traditions, art, and heritage that stretches across centuries. Despite this, India’s cultural influence remains underutilized due to fragmentation, unequal growth, and limited discoverability. By uniting the Tourism, Arts, and Culture (TAC) ecosystem through tech-driven solutions, India can unlock its true power and emerge as a global leader in immersive cultural experiences."}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                    className="absolute right-0 -bottom-6 sm:-bottom-9 z-10 flex items-center gap-4 md:gap-6 text-[var(--brown)] text-4xl md:text-5xl">
                    <HiArrowLongLeft className="active:text-[var(--orange)] hover:text-[var(--orange)] cursor-pointer" onClick={scrollLeftHandler} />
                    <HiArrowLongRight className="active:text-[var(--orange)] hover:text-[var(--orange)] cursor-pointer" onClick={scrollRightHandler} />
                </motion.div>
            </div>

            {/* Scrollable Cards */}
            <motion.div
                ref={scrollRef}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="relative overflow-x-scroll overflow-y-hidden flex gap-4 scrollbar-hide cursor-grab active:cursor-grabbing scroll-smooth"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {cardData.map((card, index) => (
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
                        <button
                            aria-label="play video"
                            className={`z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 backdrop-blur-sm bg-amber-50/10 border-2 border-[var(--orange)] rounded-full
                                ${hoveredIndex === index ? "opacity-0" : "opacity-100"}`}
                        >
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="#FBC04E" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="8,5 19,12 8,19" />
                            </svg>
                        </button>
                        <Image
                            src={card.img}
                            alt="Video Placeholder"
                            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 ${hoveredIndex === index ? "opacity-0" : "opacity-100"}`}
                        />
                        {isSectionVisible && (
                            <video
                                data-index={index}
                                src={card.vid}
                                muted
                                loop
                                playsInline
                                className={`lazy-video w-full h-full object-cover transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
                                autoPlay
                                preload="auto"
                            />
                        )}
                        <div className="w-full absolute bottom-0 left-0 z-10 text-white flex flex-col gap-1 p-4 bg-gradient-to-t from-black">
                            <b className="text-lg">{card.place}</b>
                            <p className="text-xs md:test-md text-gray-300 md:text-gray-200">{card.desc}</p>
                            <div className="absolute bottom-0 -z-10 left-0 w-full h-[150%] bg-gradient-to-t from-black"></div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}