'use client'

import { useState } from "react";
import Image from "next/image";
import ProtoImg from '@/../public/assets/impact/prototype.webp';
import HeaderText from "@/Components/Header/Header";
import DescriptionText from "@/Components/Description/Description";
import PrototypeButton from "./button";
import { motion, AnimatePresence } from "framer-motion";

const HeaderContext = `See It in Action:

Explore the Prototype`;

export default function ProtoSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");

    const togglePopup = (url = "") => {
        setIsOpen(!isOpen);
        setVideoUrl(url);
    };

    return (
        <div className="px-4 py-10 md:p-8 lg:p-16">
            <div className="p-6 sm:p-8 xl:p-14 flex flex-col justify-between xl:flex-row gap-8 bg-white rounded-3xl">
                <div className="flex flex-col gap-4 xl:gap-6 2xl:gap-10 xl:w-[45%]">
                    <HeaderText text={HeaderContext} className={'leading-10 md:leading-14 2xl:leading-18'} />
                    <DescriptionText content={"See OneTAC's potential come to life through real-world prototypes. From AI-powered travel discovery to seamless cultural bookings, these prototypes showcase how OneTAC enables innovation across tourism, arts, and culture."} />

                    <div className="flex flex-col sm:flex-row xl:flex-col gap-4">
                        <PrototypeButton label="View Traveller Prototype" onClick={() => togglePopup("https://www.youtube.com/embed/zMl8R97Te4o")} />
                        <PrototypeButton label="View Practitioner Prototype" onClick={() => togglePopup("https://www.youtube.com/embed/R-PhUyuoVb8")} />
                    </div>
                </div>

                <div className="overflow-hidden">
                    <Image
                        src={ProtoImg}
                        alt="proto"
                        width={800}
                        height={800}
                        className="w-full h-full object-contain object-center rounded-3xl"
                    />
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <div
                        onClick={() => togglePopup()}
                        className="fixed inset-0 px-4 bg-black/20 backdrop-blur-xs flex justify-center items-center z-50"
                    >
                        <button onClick={() => togglePopup()} className="bg-[var(--brown)] text-white shadow w-10 h-10 p-2 rounded-full flex items-center justify-center hover:scale-110 transition duration-300 absolute top-4 right-4 text-xl">✕</button>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-3xl w-full relative"
                        >
                            <div className="relative w-full h-[80vh]">
                                <iframe
                                    className="w-full h-full rounded-xl"
                                    src={videoUrl}
                                    title="Prototype Video"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}