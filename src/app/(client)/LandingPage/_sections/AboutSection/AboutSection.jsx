'use client'

import Image from "next/image"
import Link from "next/link"
import { Sparkle, Link2 } from "lucide-react"
import { motion } from "framer-motion";
import Img1 from '../../../../../../public/assets/1.webp'
import Img2 from '../../../../../../public/assets/16.webp'

const list = [
    {
        text: "Tourism supports 70 million jobs, yet only drives 1.77% of India's GDP",
        link: "https://wttc.org/research/economic-impact",
    },
    {
        text: "India has 10 million artisans, yet only 2% are digitally visible",
        link: "https://texmin.nic.in/sites/default/files/English%20Final%20MOT%20Annual%20Report%202022-23%20%28English%29_0.pdf",
    },
]

export default function AboutSection() {
    return (
        <div className="flex flex-col md:flex-row gap-12 items-center px-4 py-10 lg:py-24 md:p-8 lg:p-16">
            <motion.div
                className="relative md:w-1/2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <Image
                    src={Img1}
                    alt="image"
                    draggable={false}
                    width={500}
                    height={500}
                    className="w-[90%] md:w-[85%] h-full object-cover rounded-2xl"
                />
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="absolute -bottom-14 right-0 w-1/2"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <Image
                        src={Img2}
                        alt="image"
                        draggable={false}
                        width={500}
                        height={500}
                        className="z-10 object-cover rounded-2xl border-4 border-[var(--background)]"
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className="flex flex-col gap-6 lg:gap-8 md:w-1/2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <p className="relative w-fit font-medium text-xl">
                    About Us
                    <span className="absolute left-1 -bottom-[.005rem] rounded-2xl w-full h-2 -z-10 bg-amber-200"></span>
                </p>
                <h2 className="text-[2rem] md:text-4xl lg:text-5xl text-[var(--brown)] font-medium xl:leading-14">
                    OneTAC - India's <br />
                    UPI Moment for Tourism
                </h2>
                <p className="md:text-md xl:text-xl">
                    OneTAC is a pan-India digital grid that seamlessly connects tourism, arts, and culture (TAC) —unlocking a UPI-like transformation for India's services economy, turning tourism into India's next economic revolution, empowering travelers to discover hidden gems.
                </p>
                <ul className="flex flex-col gap-6">
                    {
                        list.map((item, index) => (
                            <li className="group flex items-start md:items-center gap-2 text-sm" key={index}>
                                <Sparkle size={15} className="bg-[var(--orange)] text-white w-6 h-6 p-1 rounded-4xl group-hover:rotate-180 transform duration-300" />
                                {item.text}
                                <Link href={item.link} rel="noopener noreferrer" target="_blank" className="group-hover:text-[var(--orange)]"> <Link2 size={18} className="-rotate-45" /></Link>
                            </li>
                        ))
                    }
                </ul>
                <p className="md:text-md xl:text-xl">
                    Imagine unlocking this untapped potential, equitably.
                </p>
                <Link href='/about'
                    className="flex items-center gap-2 shadow-xl w-fit bg-[var(--light-Orange)] text-[var(--brown)] font-semibold rounded-md px-6 py-3 hover:-translate-y-1 transition-all duration-200"
                >Know more</Link>
            </motion.div>
        </div>
    )
}