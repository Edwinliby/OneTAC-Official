'use client';

import { motion } from "framer-motion";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { randomData, partnerImages } from "./randomData";

export default function RandomBlock() {
    const [blocks, setBlocks] = useState([]);
    const [usedContents, setUsedContents] = useState(new Set());
    const [preloadedImages, setPreloadedImages] = useState({});
    const [isPreloading, setIsPreloading] = useState(false); // Start preloading early
    const [isVisible, setIsVisible] = useState(false); // When section is fully visible
    const sectionRef = useRef(null);
    const intervalRef = useRef(null);

    const dataSet = useMemo(() => randomData || [], []);

    // Preload images before the section reaches 50% visibility
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.boundingClientRect.top < window.innerHeight * 1.5) {
                    // Start preloading when the section is ~50% below viewport
                    setIsPreloading(true);
                }
            },
            { threshold: 0 } // Trigger when the section enters the viewport (even slightly)
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Preload images when preloading is triggered
    useEffect(() => {
        if (!isPreloading) return;

        const loadImages = async () => {
            const images = {};
            for (const item of dataSet) {
                if (typeof item !== "string") {
                    const img = new Image();
                    img.src = item.src;
                    await img.decode(); // Ensure image is fully loaded
                    images[item.src] = img; // Store the preloaded image
                }
            }
            setPreloadedImages(images);
        };

        if (dataSet.length) loadImages();
    }, [isPreloading, dataSet]);

    // Function to get a unique content
    const getUniqueContent = useCallback(() => {
        let availableData = dataSet.filter(item => !usedContents.has(item));

        if (availableData.length === 0) {
            setUsedContents(new Set());
            availableData = [...dataSet];
        }

        const newContent = availableData[Math.floor(Math.random() * availableData.length)];
        setUsedContents(prevSet => new Set(prevSet).add(newContent));
        return newContent;
    }, [dataSet, usedContents]);

    // Observe when the section is at least 50% visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Load blocks only when the section is visible
    useEffect(() => {
        if (isVisible && blocks.length === 0) {
            const initialBlocks = Array.from({ length: 15 }, (_, index) => ({
                id: index,
                content: getUniqueContent(),
            }));
            setBlocks(initialBlocks);
        }

        if (isVisible) {
            intervalRef.current = setInterval(() => {
                setBlocks((prevBlocks) => {
                    if (!prevBlocks.length) return prevBlocks;

                    const randomIndex = Math.floor(Math.random() * prevBlocks.length);
                    const newContent = getUniqueContent();

                    return prevBlocks.map((block, i) =>
                        i === randomIndex ? { ...block, content: newContent } : block
                    );
                });
            }, 1800);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isVisible, getUniqueContent]);

    return (
        <div ref={sectionRef} className="overflow-hidden my-8">
            {blocks.length > 0 && (
                <div className="grid grid-cols-5 relative -left-16 overflow-x-auto w-max">
                    <div className="absolute top-0 left-0 w-full h-full bg-black/55 -z-10"></div>
                    {blocks.map((block) => (
                        <motion.div
                            key={block.id}
                            layoutId={`block-${block.id}`}
                            className="w-[10rem] h-[10rem] sm:w-[12rem] sm:h-[12rem] md:w-[15rem] md:h-[15rem] lg:w-[18rem] xl:w-[20rem] 2xl:w-[22rem] 3xl:w-[25rem] lg:h-[18rem] flex items-center justify-center border border-dashed border-[var(--brown)]"
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            {typeof block.content === "string" ? (
                                <div className="relative h-full w-full">
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex items-center justify-center text-sm md:text-xl bg-[#fcdea5] p-4 md:p-6 h-full"
                                    >
                                        {block.content}
                                    </motion.span>
                                    <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/55 active:bg-transparent hover:bg-transparent transition duration-300"></div>
                                </div>
                            ) : (
                                <div className="relative w-full h-full">
                                    <motion.img
                                        src={preloadedImages[block.content.src]?.src || block.content.src}
                                        alt={block.content.alt || "Random Image"}
                                        className={`w-full h-full bg-white ${partnerImages.includes(block.content) ? 'object-contain p-6 md:p-14' : 'object-cover'}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/55 active:bg-transparent hover:bg-transparent transition duration-300"></div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}