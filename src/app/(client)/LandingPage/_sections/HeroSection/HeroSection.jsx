'use client'

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Volume2, VolumeOff } from "lucide-react";

export default function HeroSection() {
    const [isMuted, setIsMuted] = useState(true);
    const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);
    const translateY = useTransform(scrollY, [0, 500], [0, -100]);
    const bgOpacity = useTransform(scrollY, [0, 500], [0.6, 0]);

    const languages = ["India", "भारत", "இந்தியா", "ભારત", "ಭಾರತ", "భారతదేశం", "ഭാരതം"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="hero" className="w-full h-[250dvh] relative text-white">
            <div className="w-full h-screen sticky top-0">
                <motion.div
                    className="absolute bg-black w-full h-full"
                    style={{ opacity: bgOpacity }}
                ></motion.div>
                <div className="w-full h-full">
                    <video
                        src='/videoBg.webm'
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>

                <motion.div
                    className="flex flex-col items-center gap-4 px-4 w-full absolute top-[35%] left-[50%] translate-x-[-50%] text-center"
                    style={{ opacity, translateY }}
                >
                    <p className="italic font-bold px-8 text-xs md:text-sm">
                        “Tourism, Art & Culture — Powered by People, Not Just Platforms.”
                    </p>
                    <h1 className="w-full md:w-[90%] lg:w-3/4 font-telma text-4xl md:text-6xl xl:text-7xl">
                        Unlock India's soul One experience at a time
                    </h1>
                </motion.div>

                <div className="w-full text-sm absolute bottom-6 md:bottom-10 px-4 md:px-8 xl:px-16 font-semibold flex items-center justify-between">
                    <button onClick={() => setIsMuted(!isMuted)} className="flex items-center gap-1.5">
                        {isMuted ? <>Unmute <VolumeOff size={18} /></> : <>Mute <Volume2 size={18} /></>}
                    </button>
                    <motion.p
                        key={languages[currentLanguageIndex]}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                    >
                        {languages[currentLanguageIndex]}
                    </motion.p>
                </div>

                <motion.p
                    style={{ opacity, translateY }}
                    className="w-full md:w-1/2 xl:w-[28%] px-4 md:px-0 text-[.75rem] md:text-sm absolute bottom-20 md:bottom-8 left-[50%] translate-x-[-50%] text-center">
                    Igniting the next wave of tourism, art and cultural experiences through a citizen-led, decentralised movement.
                </motion.p>
            </div>
        </div>
    )
}