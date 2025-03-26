'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import fp1 from '../../../../../../public/partners/p6.webp';
import fp2 from '../../../../../../public/partners/p5.webp';
import fp3 from '../../../../../../public/partners/fp1.webp';
import fp4 from '../../../../../../public/partners/fp2.webp';
import fp5 from '../../../../../../public/partners/fp3.webp';
import fp6 from '../../../../../../public/partners/p7.webp';

const supportList = [fp1, fp2, fp3, fp4, fp5, fp6];

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

export default function P1Section() {
    return (
        <div className="flex flex-col gap-10 md:gap-16 px-4 py-10 md:p-8 lg:p-16">
            <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-[var(--brown)] mb-8">Founding Partners</h2>
                <p className="text-base md:text-lg lg:text-xl">
                    All founding partners are registered Section 8 non-profit companies, committed to public purpose and open digital ecosystems. ONE TAC is co-created by a pioneering consortium of mission-driven institutions dedicated to building decentralized and inclusive infrastructure for Tourism, Art, and Culture.
                </p>
            </div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4"
            >
                {supportList.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="w-full h-[8rem] md:h-[15rem] p-4 md:px-10 flex items-center justify-center bg-[#FFC457]/10 rounded-xl md:rounded-3xl border-1 border-[var(--brown)]/50
                            hover:bg-[#FFC457]/20 transition duration-300 hover:-translate-y-1
                        "
                    >
                        <Image
                            src={item}
                            alt="image"
                            width={600}
                            height={600}
                            className="w-fit md:h-1/2 object-contain"
                        />
                    </motion.div>
                ))}
            </motion.div>
            <p className="text-base md:text-lg lg:text-xl">
                These organizations form the core engine of ONE TAC — combining thought leadership, field execution, and a commitment to citizen-first development.
            </p>
        </div>
    );
}