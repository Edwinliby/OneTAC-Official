'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Logo from "@/../public/assets/footer_img/logo.svg";
import Image from "next/image";

export default function FooterLogo() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-20%" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0.8 }}
            animate={inView ? { opacity: 1, y: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full h-fit"
        >
            <Image src={Logo} draggable={false} alt="Logo" width={100} height={100} className="h-full w-full object-cover" />
        </motion.div>
    );
};