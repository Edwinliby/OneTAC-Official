'use client'

import { motion } from "framer-motion";
import HeaderText from "@/components/Header/Header";
import DescriptionText from "@/components/Description/Description";

const currentVideo = "_f6XPlUkWDc";

export default function BeginSection() {
    return (
        <div id="movementBegins" className="flex flex-col gap-10 md:gap-16 px-4 py-10 md:p-8 lg:p-16">
            <div>
                <HeaderText text="The Origin Story" className={"mb-8 3xl:mb-12"} />
                <DescriptionText content={"Watch our launch at Bengaluru Tech Summit 2024 discussing why tourism needs a radical transformation—and how OneTAC is leading the charge."} />
            </div>
            <motion.div
                className="w-full h-[18rem] sm:h-[20rem] xl:h-[30rem] 2xl:h-[38rem] overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${currentVideo}`}
                    title="launch at Bengaluru Tech Summit 2024"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </motion.div>
        </div>
    )
}