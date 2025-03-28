'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import one from "@/../public/assets/bento/1.webp";
import two from "@/../public/assets/bento/2.webp";
import three from "@/../public/assets/bento/3.webp";
import four from "@/../public/assets/bento/4.webp";
import five from "@/../public/assets/bento/5.webp";
import six from "@/../public/assets/bento/6.webp";

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function BentoSection() {
    return (
        <div className="px-4 py-10 md:p-8 lg:p-16 flex flex-col gap-8 lg:gap-16">
            <h1 className="text-[2rem] md:text-4xl lg:text-5xl font-semibold text-[var(--brown)]">
                The Market Opportunity
            </h1>

            <motion.div
                className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full mx-auto auto-rows-fr"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Left Grid */}
                <motion.div className="col-span-1 row-span-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div className="w-full h-full bg-white rounded-2xl shadow-md flex flex-col items-start justify-between p-8 py-10 gap-16" variants={itemVariants}>
                        <h3 className="text-3xl lg:text-4xl">India's tourism sector is growing at <b className="text-[var(--brown)]">7.4% annually</b></h3>
                        <p className="text-xl xl:text-2xl">But it's fragmented and inequitable.</p>
                    </motion.div>

                    <motion.div className="w-full h-full flex flex-col justify-between bg-white rounded-2xl shadow-md" variants={itemVariants}>
                        <p className="font-bold text-2xl p-8 py-10">Market size and <b className="text-[var(--brown)]">projections</b></p>
                        <Image
                            src={two}
                            alt="bento images"
                            draggable={false}
                            width={600}
                            height={600}
                            className="w-full h-fit object-contain px-6"
                        />
                    </motion.div>

                    <motion.div className="w-full h-full flex flex-col justify-between gap-4 bg-white rounded-2xl shadow-md p-8 py-10" variants={itemVariants}>
                        <p className="text-4xl">Enabling <b className="text-[var(--brown)]">Livelihoods</b></p>
                        <p className="text-xl xl:text-2xl">Turning every corner of India into a global destination by 2047.</p>
                        <Image
                            src={one}
                            alt="bento images"
                            draggable={false}
                            width={600}
                            height={600}
                            className="w-full h-fit object-contain relative -bottom-8 left-0"
                        />
                    </motion.div>

                    <div className="w-full h-full text-center text-[var(--brown)] rounded-2xl grid grid-cols-2 gap-4">
                        <motion.div className="w-full h-full py-6 grid place-content-center bg-white rounded-2xl shadow-md" variants={itemVariants}>
                            <p className="font-semibold">OneTAC <br />Ambition</p>
                        </motion.div>
                        <motion.div className="w-full h-full py-6 grid place-content-center bg-white rounded-2xl shadow-md" variants={itemVariants}>
                            <p className="text-xs"><b className="text-4xl">$1 Tn+</b><br />Economy</p>
                        </motion.div>
                        <motion.div className="w-full h-full py-6 grid place-content-center bg-white rounded-2xl shadow-md" variants={itemVariants}>
                            <p className="text-xs"><b className="text-4xl">600 K</b><br />Villages</p>
                        </motion.div>
                        <motion.div className="w-full h-full py-6 grid place-content-center bg-white rounded-2xl shadow-md" variants={itemVariants}>
                            <p className="font-semibold">Untapped <br />Experiences </p>
                        </motion.div>
                        <motion.div className="w-full h-full py-6 grid place-content-center bg-white rounded-2xl shadow-md" variants={itemVariants}>
                            <p className="font-semibold">Stories <br />Unlocked</p>
                        </motion.div>
                        <motion.div className="w-full h-full py-6 grid place-content-center bg-white rounded-2xl shadow-md" variants={itemVariants}>
                            <p className="text-xs"><b className="text-4xl">35 Mn</b><br />New Jobs</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Grid */}
                <motion.div className="col-span-1 row-span-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="col-span-1 row-span-2 grid grid-cols-1 gap-4">
                        <motion.div className="w-full h-full row-span-2 flex flex-col justify-between gap-4 overflow-hidden bg-white rounded-2xl shadow-md px-8 pt-10" variants={itemVariants}>
                            <div>
                                <p className="text-4xl mb-6">For <b className="text-[var(--brown)]">Startups</b></p>
                                <p className="text-xl xl:text-2xl">A ready-made grid to build on, not from scratch</p>
                            </div>
                            <Image
                                src={four}
                                alt="bento images"
                                draggable={false}
                                width={600}
                                height={600}
                                className="w-full h-fit object-contain"
                            />
                        </motion.div>
                        <motion.div className="w-full h-full relative overflow-hidden shadow-md bg-white rounded-2xl" variants={itemVariants}>
                            <Image
                                src={three}
                                alt="bento images"
                                draggable={false}
                                width={600}
                                height={600}
                                className="w-fit h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    <div className="col-span-1 row-span-2 grid grid-cols-1 gap-4">
                        <motion.div className="w-full h-full overflow-hidden flex items-center justify-center shadow-md bg-white rounded-2xl" variants={itemVariants}>
                            <Image
                                src={five}
                                alt="bento images"
                                draggable={false}
                                width={600}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        <motion.div className="w-full h-full flex flex-col items-start justify-between bg-white rounded-2xl shadow-md p-8 py-14" variants={itemVariants}>
                            <h3 className="text-3xl">Tap into India's tourism growth story and unlock <b className="text-[var(--brown)]">new business models</b></h3>
                            <p className="text-4xl">For <b className="text-[var(--brown)]">Investors</b></p>
                        </motion.div>
                    </div>

                    <motion.div className="w-full h-full relative sm:col-span-2 overflow-hidden shadow-md bg-white rounded-2xl" variants={itemVariants}>
                        <p className="absolute font-bold text-2xl p-8 py-10">India's tourism <b className="text-[var(--brown)]">growth story</b></p>
                        <Image
                            src={six}
                            alt="bento images"
                            draggable={false}
                            width={600}
                            height={600}
                            className="w-full h-fit object-cover relative -bottom-16 sm:bottom-0"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}