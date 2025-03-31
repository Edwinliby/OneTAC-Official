"use client";

import { motion } from "framer-motion";
import HeaderText from "@/Components/HeaderText/HeaderText";
import Image from "next/image";
import { imgData } from "./imgData";

export default function CollabSection() {
    return (
        <div id="collaborative" className="px-4 py-10 md:p-8 lg:p-16 flex flex-col items-start gap-10 lg:gap-16">
            <HeaderText text="OneTAC Collaborative" />

            <motion.div
                className="flex items-center justify-center flex-wrap gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.2 },
                    },
                    hidden: { opacity: 0 },
                }}
            >
                {imgData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="w-[9rem] md:w-[12rem]"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                        }}
                    >
                        <Image
                            src={item}
                            alt="collab images"
                            draggable={false}
                            width={600}
                            height={600}
                            className="w-fit h-fit object-contain px-2 md:px-6"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}