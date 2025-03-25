"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Img1 from "@/../public/assets/1.webp";
import Img2 from "@/../public/assets/2.webp";
import Img4 from "@/../public/assets/4.webp";
import Img5 from "@/../public/assets/5.webp";
import Img6 from "@/../public/assets/6.webp";
import Img7 from "@/../public/assets/7.webp";
import Img8 from "@/../public/assets/8.webp";
import Img9 from "@/../public/assets/9.webp";

const ImgList = [
    { img1: Img1, img2: Img2, img3: Img4 },
    { img1: Img4, img2: Img5, img3: Img6 },
    { img1: Img7, img2: Img8, img3: Img9 },
];

const stats = [
    { label: "Livelihoods empowered by 2030.", value: "10M", span: "+" },
    { label: "Cultural experiences digitized.", value: "5,000", span: "+" },
    { label: "Intermediaries. 100% authenticity", value: "zer", span: "o" },
]

export default function Home() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const galleryRef = useRef(null);
    const isDragging = useRef(false);
    const startPosition = useRef(0);
    const startSliderValue = useRef(0);
    const [maxScroll, setMaxScroll] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => setWindowWidth(window.innerWidth);
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    useEffect(() => {
        const calculateMaxScroll = () => {
            if (galleryRef.current) {
                const galleryWidth = galleryRef.current.scrollWidth;
                const containerWidth = galleryRef.current.parentElement?.clientWidth || 0;
                const calculatedMaxScroll = Math.max(0, galleryWidth - containerWidth);
                setMaxScroll(calculatedMaxScroll);
            }
        };

        calculateMaxScroll();
        window.addEventListener("resize", calculateMaxScroll);
        return () => {
            window.removeEventListener("resize", calculateMaxScroll);
        };
    }, []);

    useEffect(() => {
        if (maxScroll > 0) {
            updateImagePosition(sliderPosition);
        }
    }, [maxScroll]);

    const updateImagePosition = (sliderValue) => {
        if (galleryRef.current && maxScroll > 0) {
            const translateX = (maxScroll * sliderValue) / 100;
            galleryRef.current.style.transform = `translateX(-${translateX}px)`;
        }
    };

    const handleSliderChange = (e) => {
        const newPosition = parseInt(e.target.value);
        setSliderPosition(newPosition);
        updateImagePosition(newPosition);
    };

    const handleSliderMouseDown = (e) => {
        isDragging.current = true;
        startPosition.current = "touches" in e ? e.touches[0].clientX : e.clientX;
        startSliderValue.current = sliderPosition;
        document.addEventListener("mousemove", handleSliderMouseMove);
        document.addEventListener("mouseup", handleSliderMouseUp);
        document.addEventListener("touchmove", handleSliderMouseMove);
        document.addEventListener("touchend", handleSliderMouseUp);
    };

    const handleSliderMouseMove = (e) => {
        if (!isDragging.current) return;
        const currentPosition = "touches" in e ? e.touches[0].clientX : e.clientX;
        if (!currentPosition) return;
        const diff = currentPosition - startPosition.current;
        const sliderTrackWidth = 200; // Adjust to match actual slider track width
        const newSliderValue = Math.min(
            100,
            Math.max(0, startSliderValue.current + (diff / sliderTrackWidth) * 100)
        );
        setSliderPosition(newSliderValue);
        updateImagePosition(newSliderValue);
    };

    const handleSliderMouseUp = () => {
        isDragging.current = false;
        document.removeEventListener("mousemove", handleSliderMouseMove);
        document.removeEventListener("mouseup", handleSliderMouseUp);
        document.removeEventListener("touchmove", handleSliderMouseMove);
        document.removeEventListener("touchend", handleSliderMouseUp);
    };

    return (
        <div className="flex flex-col gap-8 md:gap-12">
            <section className="px-4 sm:px-8 md:px-16 text-left">
                <h1 className="text-[2rem] md:text-5xl font-medium leading-tight mb-4 text-[var(--brown)]">
                    India's stories deserve a stage.
                    {windowWidth >= 768 && <br />}
                    Let's build it together.
                </h1>
            </section>

            <section className="flex items-center justify-center px-4 sm:px-8 md:px-16">
                <div className="flex justify-center md:justify-between flex-wrap w-full">
                    {
                        stats.map((item) => (
                            <div key={item.label} className="flex flex-col items-center text-center p-4 w-fit">
                                <h2 className="font-argaka text-[8rem] md:text-[4rem] lg:text-[6rem] xl:text-[10rem] w-fit">
                                    {item.value}<span className="text-[var(--orange)]">{item.span}</span>
                                </h2>
                                <p className="relative -top-7 text-base text-[#333]">{item.label}</p>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className="relative flex flex-col gap-14">
                <div className="w-full overflow-hidden relative rounded-lg">
                    <div className="flex flex-row transition-transform duration-300 ease-out w-max" ref={galleryRef}>
                        {ImgList.map((img, index) => (
                            <div className="flex mx-2 gap-4 h-fit md:h-[30rem]" key={index}>
                                <div className="flex flex-col gap-4 h-fit md:h-[30rem]">
                                    <Image
                                        src={img.img1}
                                        alt="Indian cultural"
                                        className="w-[200px] h-[150px] object-cover rounded-2xl md:w-[15rem] md:h-[14.5rem]"
                                    />
                                    <Image
                                        src={img.img2}
                                        alt="Indian cultural"
                                        className="w-[200px] h-[150px] object-cover rounded-2xl md:w-[15rem] md:h-[14.5rem]"
                                    />
                                </div>
                                <Image
                                    src={img.img3}
                                    alt="Indian cultural"
                                    className="w-[400px] h-[310px] object-cover rounded-2xl md:w-[30rem] md:h-[30rem]"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full h-12 flex items-center justify-center py-4 relative">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={sliderPosition}
                        className="absolute w-[200px] opacity-0 cursor-pointer z-10 h-[30px]"
                        onChange={handleSliderChange}
                        onMouseDown={handleSliderMouseDown}
                        onTouchStart={handleSliderMouseDown}
                    />
                    <div className="w-[150px] h-1 bg-[#D1D1D1] relative rounded">
                        <div
                            className="absolute top-1/2 transform -translate-y-1/2 pointer-events-none w-[3.5rem] h-fit"
                            style={{ left: `${sliderPosition}%` }}
                        >
                            <div className="text-center text-white px-[.75rem] py-1 bg-linear-[#FFECC9,#FFA600] rounded-md relative -translate-x-1/2">|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex justify-center mt-4">
                <button className={`
                    ${"bg-[var(--light-Orange)] border border-white text-[var(--brown)] text-lg font-semibold py-3 px-10 rounded-lg cursor-pointer transition duration-300 shadow-lg"}
                    ${"hover:translate-y-[-3px] hover:border-[var(--light-Orange)] hover:shadow-xl hover:bg-transparent"}
                    `}>
                    Explore the possibilities
                </button>
            </section>
        </div>
    );
}
