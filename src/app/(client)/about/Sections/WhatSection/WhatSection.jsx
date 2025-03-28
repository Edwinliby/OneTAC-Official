'use client'

import { Sparkle } from "lucide-react"
import { motion } from "framer-motion";

const keyData = [
    {
        text: "Public value over private ownership",
    },
    {
        text: "Community based co-creation",
    },
    {
        text: "Open-source",
    },
    {
        text: "DPI-first, citizen-first design",
    },
]

export default function WhatSection() {
    return (
        <div id='aboutOneTAC' className="px-4 py-10 md:p-8 lg:p-16 grid grid-cols-1 lg:grid-cols-2 items-center md:mt-8 gap-8 lg:gap-16">
            <div className="flex flex-col gap-6 md:gap-8">
                <h1 className="text-[2rem] md:text-4xl lg:text-5xl font-semibold text-[var(--brown)]">
                    What is OneTAC
                </h1>
                <p className="md:text-md xl:text-xl">
                    OneTAC is India's decentralized digital infrastructure for tourism, arts, and culture—an open network that seamlessly connects travelers with authentic local experiences across the country.
                    <br /><br />
                    Built on the Beckn Protocol and interoperable frameworks, OneTAC unifies India's diverse cultural offerings and hidden gems—heritage walks, folk performances, artisan workshops—making them easily discoverable and bookable across platforms. Imagine unlocking this untapped potential, equitably.
                </p>
                <h2 className="text-[var(--brown)] font-semibold text-lg md:text-2xl">Key Features:</h2>
                <div className="flex flex-wrap gap-6">
                    {
                        keyData.map((item, index) => (
                            <p className="group flex items-start md:items-center gap-2 text-sm md:text-md xl:text-xl" key={index}>
                                <Sparkle size={15} className="bg-[var(--orange)] text-white w-6 h-6 p-1 rounded-4xl group-active:rotate-180 group-hover:rotate-180 transform duration-300" />
                                {item.text}
                            </p>
                        ))
                    }
                </div>
            </div>
            <div className="w-full h-full rounded-2xl overflow-hidden">
                <video
                    src='/videoBg.webm'
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}