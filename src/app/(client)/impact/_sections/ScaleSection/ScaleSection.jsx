'use client'

import { motion } from "framer-motion";
import HeaderText from "@/components/HeaderText/HeaderText";
import Image from "next/image";
import s1 from '@/../public/assets/impact/s1.webp';
import s2 from '@/../public/assets/impact/s2.webp';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { scaleData } from "./scaleData";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        }
    }
};

const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function ScaleSection() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="flex flex-col gap-10 md:gap-16 px-4 py-10 md:p-8 lg:p-16"
        >
            <motion.div variants={fadeIn}>
                <HeaderText text={"How Startups Scale"} />
            </motion.div>

            <motion.div className="flex flex-col md:flex-row items-center gap-4" variants={containerVariants}>
                <motion.div className="relative w-full h-[15rem] md:h-full overflow-hidden rounded-2xl" variants={fadeIn}>
                    <Image src={s1} alt='img' width={800} height={800} className="object-cover object-center w-full h-full" />
                    <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black"></div>
                    <div className="absolute inset-x-4 bottom-4 flex flex-col gap-1 md:gap-2 text-white">
                        <b className="text-2xl md:text-3xl font-bold">Traditional Journey</b>
                        <p className="font-medium text-xs md:text-sm text-white/80">
                            Innovators had to build entire platforms from scratch—managing e-commerce, search, and catalog systems on their own.
                        </p>
                    </div>
                </motion.div>

                <div className="hidden xl:flex gap-4 items-center">
                    <div className="flex items-center justify-center w-10 h-10 bg-[var(--orange)] text-white rounded-full"><ChevronLeft /></div>
                    <div className="flex items-center justify-center w-10 h-10 bg-[var(--orange)] text-white rounded-full"><ChevronRight /></div>
                </div>

                <motion.div className="relative w-full h-[15rem] md:h-full overflow-hidden rounded-2xl" variants={fadeIn}>
                    <Image src={s2} alt='img' width={800} height={800} className="object-cover object-center w-full h-full" />
                    <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black"></div>
                    <div className="absolute inset-x-4 bottom-4 flex flex-col gap-1 md:gap-2 text-white">
                        <b className="text-2xl md:text-3xl font-bold">With OneTAC</b>
                        <p className="font-medium text-xs md:text-sm text-white/80">
                            By plugging into OneTAC's scalable digital grid, Innovators can leverage built-in capabilities and focus solely on developing their unique use cases.
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            <motion.h3 className="text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-[var(--brown)]" variants={fadeIn}>
                A Wave of Use Cases Unlocked
            </motion.h3>

            <motion.div className="grid grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4 items-center" variants={containerVariants}>
                {scaleData.map((card, index) => (
                    <motion.div
                        key={index}
                        className="relative group w-full h-[18rem] md:h-[25rem] xl:h-[30rem] 2xl:h-[35rem] bg-gray-400 rounded-xl md:rounded-2xl overflow-hidden"
                        variants={fadeIn}
                    >
                        <Image src={card.img} alt="Video Placeholder" className="w-full h-full group-active:scale-105 hover:scale-105 object-cover absolute top-0 left-0 transition-all ease-in-out duration-300" />
                        <div className="w-full absolute bottom-0 left-0 z-10 text-white flex flex-col gap-1 p-2 sm:p-4 bg-gradient-to-t from-black">
                            <b className="sm:text-lg xl:text-xl 2xl:text-2xl">{card.place}</b>
                            <p className="text-[.6rem] md:text-[.9rem] 2xl:text-lg text-gray-300 md:text-gray-200">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}