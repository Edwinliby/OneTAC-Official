'use client'

import Image from "next/image";
import { useState } from "react";

export default function Card({ sliceStart, sliceEnd, items, className }) {
    const [flippedId, setFlippedId] = useState(null);

    const handleFlip = (id) => {
        setFlippedId(flippedId === id ? null : id);
    };

    return (
        <div className={`grid md:grid-cols-2 xl:flex gap-4 xl:gap-16 ${className || ''}`}>
            {
                items.slice(sliceStart, sliceEnd).map((item) => (
                    <div key={item.id} className="relative group perspective-distant w-full xl:w-fit h-[13rem] md:h-[15rem] 2xl:h-[18rem] 3xl:h-[22rem]" onClick={() => handleFlip(item.id)}>
                        <div
                            className={`relative w-full h-full cursor-pointer transition-transform duration-500 ease-in-out transform-3d ${flippedId === item.id ? 'rotate-y-180' : ''}`}
                        >
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={800}
                                height={800}
                                className="object-cover object-center w-full h-full rounded-2xl"
                            />
                            <div className="absolute inset-0 p-4 bg-black/50 rounded-2xl"></div>
                            <div className="absolute left-4 bottom-4 flex flex-col gap-2 text-white">
                                <b className="text-3xl font-bold">{item.id}</b>
                                <h3 className="text-2xl font-semibold">{item.title}</h3>
                            </div>

                            <div className="absolute bottom-0 left-0 backface-hidden w-full h-full text-white font-medium flex flex-col gap-2 justify-end rotate-y-180">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={800}
                                    height={800}
                                    className="object-cover object-center w-full h-full rounded-2xl"
                                />
                                <div className="absolute inset-0 p-4 bg-black/50 backdrop-blur-xs rounded-2xl"></div>
                                <div className="absolute bottom-4 inset-x-4">
                                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-sm md:text-base">{item.back}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}