'use client'

import { useState, useRef } from "react";
import { Sparkle, Volume2, VolumeOff, Play, Pause, SkipBack, SkipForward } from "lucide-react";
import HeaderText from "@/components/HeaderText/HeaderText";
import DescriptionText from "@/components/DescriptionText/DescriptionText";

const keyData = [
    "Public value over private ownership",
    "Community-based co-creation",
    "Open-source",
    "DPI-first, citizen-first design",
];

const content = `OneTAC is India's decentralized digital infrastructure for tourism, arts, and culture—an open network that seamlessly connects travelers with authentic local experiences across the country.

Built on the Beckn Protocol and interoperable frameworks, OneTAC unifies India's diverse cultural offerings and hidden gems—heritage walks, folk performances, artisan workshops—making them easily discoverable and bookable across platforms. Imagine unlocking this untapped potential, equitably.`;

export default function WhatSection() {
    const [isMuted, setIsMuted] = useState(true);
    const [volume, setVolume] = useState(0.25);
    const [showSlider, setShowSlider] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);

    const toggleMute = () => {
        setIsMuted((prev) => !prev);
        setShowSlider((prev) => !prev);
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            if (!isMuted) {
                videoRef.current.volume = volume;
            }
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
    };

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying((prev) => !prev);
        }
    };

    const skipBackward = () => {
        if (videoRef.current) {
            videoRef.current.currentTime -= 10;
        }
    };

    const skipForward = () => {
        if (videoRef.current) {
            videoRef.current.currentTime += 10;
        }
    };

    return (
        <div id='aboutOneTAC' className="px-4 py-10 md:p-8 lg:p-16 grid grid-cols-1 lg:grid-cols-2 items-center md:mt-8 gap-8 lg:gap-16">
            <div className="flex flex-col gap-6 md:gap-8">
                <HeaderText text="What is OneTAC" className={'2xl:mb-8'} />
                <DescriptionText content={content} />
                <h2 className="text-[var(--brown)] font-semibold text-lg md:text-2xl 3xl:text-3xl">Key Features:</h2>
                <div className="flex flex-wrap gap-6">
                    {
                        keyData.map((item, index) => (
                            <p className="group flex items-start md:items-center gap-3 text-sm md:text-md xl:text-xl 3xl:text-2xl" key={index}>
                                <Sparkle size={15} className="bg-[var(--orange)] text-white w-6 h-6 p-1 rounded-4xl group-active:rotate-180 group-hover:rotate-180 transform duration-300" />
                                {item}
                            </p>
                        ))
                    }
                </div>
            </div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <video
                    ref={videoRef}
                    src='/aboutVid.webm'
                    autoPlay
                    loop
                    playsInline
                    poster="/assets/aboutBg.webp"
                    muted={isMuted}
                    className="w-full h-full object-cover"
                />
                {/* Custom Controls */}
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 flex items-center gap-4 text-white font-bold bg-black/50 backdrop-blur-sm px-2.5 sm:px-4 py-1 sm:py-2 rounded-full">
                    <button onClick={skipBackward} aria-label="Skip Backward">
                        <SkipBack size={15} />
                    </button>
                    <button onClick={togglePlayPause} aria-label={isPlaying ? "Pause" : "Play"}>
                        {isPlaying ? <Pause size={15} /> : <Play size={15} />}
                    </button>
                    <button onClick={skipForward} aria-label="Skip Forward">
                        <SkipForward size={15} />
                    </button>
                    <button onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
                        {isMuted ? <VolumeOff size={15} /> : <Volume2 size={15} />}
                    </button>
                    {showSlider && (
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="w-24 h-1 cursor-pointer appearance-none bg-amber-100 rounded-full"
                            style={{
                                accentColor: 'orange'
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}