'use client'

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const randomTexts = [
    "Hello, World!",
    "React is awesome!",
    "Keep moving forward!",
    "Embrace the journey!",
    "Code, Create, Conquer!",
    "Never stop learning!",
    "You got this!",
    "Dream big, code bigger!",
    "Push past limits!",
    "Innovate and elevate!",
    "Stay positive!",
    "Explore new horizons!",
    "Think outside the box!",
    "Make it happen!",
    "Believe in yourself!"
];

export default function RandomBlock() {
    const [blocks, setBlocks] = useState([]);
    const intervalsRef = useRef([]);

    // Ensure randomization only on the client side
    useEffect(() => {
        const initialBlocks = Array.from({ length: 15 }, (_, index) => ({
            id: index,
            text: randomTexts[Math.floor(Math.random() * randomTexts.length)]
        }));

        setBlocks(initialBlocks); // Set blocks only after the component mounts

        initialBlocks.forEach((block) => {
            const interval = setInterval(() => {
                setBlocks((prevBlocks) =>
                    prevBlocks.map((b) =>
                        b.id === block.id
                            ? { ...b, text: randomTexts[Math.floor(Math.random() * randomTexts.length)] }
                            : b
                    )
                );
            }, Math.random() * 25000 + 2000);

            intervalsRef.current.push(interval);
        });

        return () => intervalsRef.current.forEach(clearInterval);
    }, []);

    return (
        <div className="grid grid-cols-5 overflow-x-auto w-max">
            {blocks.map((block) => (
                <motion.div
                    key={block.id}
                    className="w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] flex items-center justify-center border border-dashed border-[var(--brown)] text-xl font-bold"
                    layout
                    animate={{ opacity: [0, 1], scale: [0.8, 1] }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.span
                        key={`${block.id}-${block.text}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {block.text}
                    </motion.span>
                </motion.div>
            ))}
        </div>
    );
}
