'use client'

import { useState, useRef } from "react";
import Image from "next/image";
import HeaderText from "@/components/Header/Header";
import th1 from "@/../public/assets/impact/th1.webp";
import th2 from "@/../public/assets/impact/th2.webp";
import logo from "@/../public/assets/logo_white.webp";

export default function ImageComparisonSlider() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);
    const isDragging = useRef(false);
    const animationFrameRef = useRef(null);
    const lastPosition = useRef(sliderPosition); // Store the last position to avoid redundant updates

    const updateSliderPosition = (e) => {
        if (!containerRef.current) return;

        const { left, width } = containerRef.current.getBoundingClientRect();
        let newPosition;

        // For mobile/touch support
        if (e.touches) {
            newPosition = ((e.touches[0].clientX - left) / width) * 100;
        } else {
            newPosition = ((e.clientX - left) / width) * 100;
        }

        newPosition = Math.max(0, Math.min(100, newPosition));

        // Only update state if the position has changed significantly to prevent redundant updates
        if (Math.abs(newPosition - lastPosition.current) > 1) {
            lastPosition.current = newPosition;
            setSliderPosition(newPosition);
        }
    };

    const handleMove = (e) => {
        if (isDragging.current) {
            // Call updateSliderPosition inside requestAnimationFrame for smooth performance
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = requestAnimationFrame(() => updateSliderPosition(e));
        }
    };

    const handleMouseDown = (e) => {
        isDragging.current = true;
        handleMove(e); // Ensure initial position is set
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        cancelAnimationFrame(animationFrameRef.current);
    };

    const handleTouchStart = (e) => {
        isDragging.current = true;
        handleMove(e); // Ensure initial position is set
    };

    const handleTouchEnd = () => {
        isDragging.current = false;
        cancelAnimationFrame(animationFrameRef.current);
    };

    return (
        <div
            className="flex flex-col gap-10 md:gap-16 px-4 pb-24 py-10 md:p-8 lg:p-16 md:mb-10 overflow-hidden md:overflow-visible"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
            onMouseUp={handleMouseUp}
            onTouchEnd={handleTouchEnd}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
        >
            <HeaderText text={"How TAC Practitioners Thrive"} />
            <div ref={containerRef} className="relative w-full h-[50vh] md:h-[70vh] shadow-lg">
                <div className="absolute top-0 left-0 w-full h-full">
                    <Image
                        src={th2}
                        alt="After"
                        draggable={false}
                        width={800}
                        height={800}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-black/80 to-50%  rounded-2xl"></div>
                    <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 text-right w-full h-fit text-white flex flex-col gap-2">
                        <b className="text-4xl 2xl:text-6xl">After</b>
                        <ul className="py-2 text-xs md:text-lg 2xl:text-xl">
                            <li className="py-1">Pan-India Access: Nationwide digital visibility.</li>
                            <li className="py-1">Better Margins: Direct bookings boost profits.</li>
                            <li className="py-1">Centralized Platform: Unified portfolio management.</li>
                            <li className="py-1">Enhanced Storytelling: Engaging AR and live experiences.</li>
                            <li className="py-1">Scalable Growth: Data-driven operational insights.</li>
                        </ul>
                    </div>
                </div>

                {/* Foreground Image */}
                <div className="absolute top-0 left-0 w-full h-full" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                    <Image
                        src={th1}
                        alt="Before"
                        width={800}
                        height={800}
                        draggable={false}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-50% rounded-2xl"></div>
                    <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 w-full h-fit text-white flex flex-col gap-2">
                        <b className="text-4xl 2xl:text-6xl">Before</b>
                        <ul className="py-2 text-xs md:text-lg 2xl:text-xl">
                            <li className="py-1">Limited Discoverability: Local reach only.</li>
                            <li className="py-1">High Commissions: Excessive fees reduce earnings.</li>
                            <li className="py-1">Fragmented Presence: Multiple unintegrated platforms.</li>
                            <li className="py-1">Outdated Marketing: Reliance on word-of-mouth.</li>
                            <li className="py-1">Inefficient Operations: Manual processes slow growth.</li>
                        </ul>
                    </div>
                </div>

                {/* Slider Bar */}
                <div className="absolute top-0 w-1 md:w-1.5 bg-[var(--orange)] h-[110%]"
                    style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}>
                    <div
                        className="absolute -bottom-[8%] md:-bottom-[3%] xl:-bottom-[5%] left-1/2 transform -translate-x-1/2 bg-amber-400 rounded-full shadow-lg border border-white cursor-grab active:cursor-grabbing"
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleTouchStart}
                    >
                        <div className="w-14 h-14 2xl:w-22 2xl:h-22 p-2 rounded-full flex items-center justify-center">
                            <Image
                                src={logo}
                                alt="logo"
                                draggable={false}
                                width={800}
                                height={800}
                                className="object-contain object-center w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}