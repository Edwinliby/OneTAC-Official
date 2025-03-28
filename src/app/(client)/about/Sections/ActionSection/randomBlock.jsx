'use client'

import { motion } from "framer-motion";
import { useState, useEffect, useRef, useMemo } from "react";
import { randomData, partnerImages } from "./randomData";

export default function RandomBlock() {
    const [blocks, setBlocks] = useState([]);
    const intervalRef = useRef(null);

    // Memoizing randomData to avoid unnecessary recalculations
    const dataSet = useMemo(() => randomData || [], []);

    useEffect(() => {
        if (!dataSet.length) {
            console.error("randomData is not properly initialized");
            return;
        }

        // Function to get a new unique content
        const getUniqueContent = (usedContents) => {
            let availableData = dataSet.filter(item => !usedContents.includes(item));
            return availableData.length > 0
                ? availableData[Math.floor(Math.random() * availableData.length)]
                : dataSet[Math.floor(Math.random() * dataSet.length)];
        };

        // Initialize blocks
        let usedContents = new Set();
        const initialBlocks = Array.from({ length: 15 }, (_, index) => {
            const content = getUniqueContent([...usedContents]);
            usedContents.add(content);
            return { id: index, content };
        });

        setBlocks(initialBlocks);

        // Set interval for random updates
        intervalRef.current = setInterval(() => {
            setBlocks((prevBlocks) => {
                if (!prevBlocks.length) return prevBlocks;

                let usedContents = new Set(prevBlocks.map(b => b.content));
                const randomIndex = Math.floor(Math.random() * prevBlocks.length);
                const newContent = getUniqueContent([...usedContents]);

                return prevBlocks.map((block, i) =>
                    i === randomIndex ? { ...block, content: newContent } : block
                );
            });
        }, 10000); // Update every 10 seconds

        return () => clearInterval(intervalRef.current);
    }, [dataSet]);

    return (
        <div className="overflow-hidden my-8">
            <div className="grid grid-cols-5 relative -left-16 overflow-x-auto w-max">
                <div className="absolute top-0 left-0 w-full h-full bg-black/55 -z-10"></div>
                {blocks.map((block) => (
                    <motion.div
                        key={block.id}
                        className="w-[8.5rem] h-[8.5rem] sm:w-[12rem] sm:h-[12rem] md:w-[15rem] md:h-[15rem] lg:w-[18rem] 2xl:w-[25rem] lg:h-[18rem] flex items-center justify-center border border-dashed border-[var(--brown)]"
                        layout
                        animate={{ opacity: [0, 1], scale: [0.9, 1] }}
                        transition={{ duration: 0.5 }}
                    >
                        {typeof block.content === "string" ? (
                            <div key={`${block.id}-${block.content}`} className="relative h-full w-full">
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex items-center justify-center text-sm md:text-xl bg-[#fcdea5] p-4 md:p-6 h-full"
                                >
                                    {block.content}
                                </motion.span>
                                <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/55 hover:bg-transparent transition duration-300"></div>
                            </div>
                        ) : (
                            <div key={`${block.id}-${block.content.src}`} className="relative w-full h-full">
                                <motion.img
                                    src={block.content.src}
                                    alt={block.content.alt || "Random Image"}
                                    className={`w-full h-full bg-white ${partnerImages.includes(block.content) ? 'object-contain p-6 md:p-14' : 'object-cover'}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/55 hover:bg-transparent transition duration-300"></div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}