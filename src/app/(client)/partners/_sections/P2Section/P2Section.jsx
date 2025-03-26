'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { dataList } from './P2Data.js';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function P2Section() {
    return (
        <div className="flex flex-col gap-10 md:gap-16 px-4 py-10 md:p-8 lg:p-16">
            <div>
                <h2 className="text-[2rem] md:text-4xl lg:text-5xl font-semibold text-[var(--brown)] mb-8">Strategic Ecosystem Partners</h2>
                <p className="md:text-md xl:text-xl">
                    ONE TAC is further strengthened by a diverse ecosystem of strategic partners across <b>infrastructure, research, entrepreneurship, investment, and community mobilization</b>.
                </p>
            </div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4"
            >
                {dataList.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="w-full h-[12.5rem] md:h-[15rem] p-3 md:p-6 flex flex-col justify-center items-start gap-8 bg-white rounded-xl md:rounded-3xl border-1 border-[var(--brown)]/50
                            transition duration-300 hover:-translate-y-1"
                    >
                        <Image
                            src={item.img}
                            alt="image"
                            width={600}
                            height={600}
                            className="w-fit h-1/4 object-contain"
                        />
                        <div>
                            <h3 className="font-semibold text-lg sm:text-3xl mb-2">{item.title}</h3>
                            <p className="font-medium text-black/80 text-xs sm:text-sm">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}