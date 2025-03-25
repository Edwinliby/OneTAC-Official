"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import slide1 from "../../../../../../public/assets/slide_1.webp";
import slide2 from "../../../../../../public/assets/slide_2.webp";
import Marquee from "react-fast-marquee";

const stats = [
    { label: "Livelihoods empowered by 2030.", value: "10M", span: "+" },
    { label: "Cultural experiences digitized.", value: "5,000", span: "+" },
    { label: "Intermediaries. 100% authenticity", value: "zer", span: "o" },
];

const images = [
    { img1: slide1 },
    { img1: slide2 },
    { img1: slide1 },
    { img1: slide2 },
];

export default function Home() {
    const [isWideScreen, setIsWideScreen] = useState(false);

    useEffect(() => {
        setIsWideScreen(window.innerWidth >= 768);
    }, []);

    return (
        <div className="flex flex-col gap-8 md:gap-10 py-10 lg:py-24">
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} 
                className="px-4 sm:px-8 md:px-16 text-left"
            >
                <h1 className="relative text-[2rem] md:text-5xl font-medium leading-tight mb-4 text-[var(--brown)]">
                    India's stories deserve a stage.{isWideScreen && <br />} Together we can
                    <motion.span
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true }} 
                        className="absolute block top-7 md:top-10 left-0 bg-amber-200 w-1/2 md:w-1/4 h-6 rounded-lg -z-10"
                    />
                </h1>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} 
                className="flex items-center justify-center px-4 sm:px-8 md:px-16"
            >
                <div className="flex justify-center md:justify-between flex-wrap w-full">
                    {stats.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                            viewport={{ once: true }} 
                            className="flex flex-col items-center text-center p-4 w-fit"
                        >
                            <p className="relative font-medium md:text-lg text-[#333]">{item.label}</p>
                            <h2 className="font-argaka text-[8rem] md:text-[4rem] lg:text-[6rem] xl:text-[10rem] w-fit">
                                {item.value}
                                <span className="text-[var(--orange)]">{item.span}</span>
                            </h2>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative flex flex-col gap-14 items-center justify-center"
            >
                <Marquee>
                    <div className="flex gap-3">
                        {images.map((item, index) => (
                            <motion.div
                                key={`image-${index}`}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }} 
                            >
                                <Image
                                    src={item.img1}
                                    alt="image"
                                    width={800}
                                    height={800}
                                    className="w-full md:h-[30rem] object-cover opacity-50"
                                />
                            </motion.div>
                        ))}
                    </div>
                </Marquee>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }} 
                    className={`
                        absolute w-fit z-10 bg-[var(--light-Orange)] border border-white text-[var(--brown)]
                        md:text-lg font-semibold py-3 px-10 rounded-lg cursor-pointer transition duration-300 shadow-lg
                        hover:-translate-y-2 hover:border-[var(--light-Orange)] hover:shadow-2xl hover:bg-amber-200
                    `}
                >
                    Explore the possibilities
                </motion.button>
            </motion.section>
        </div>
    );
}