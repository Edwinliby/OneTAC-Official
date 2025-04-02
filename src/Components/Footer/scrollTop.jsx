'use client'

import { useCallback } from "react"
import { FaArrowUpLong } from "react-icons/fa6";

export default function scrollTop() {
    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div
            onClick={scrollToTop}
            className="bg-[#AC5501] h-12 w-12 xl:h-16 xl:w-16 p-3 flex items-center justify-center rounded-lg xl:rounded-xl text-white group-active:scale-105 hover:scale-105 group-active:-translate-y-2 hover:-translate-y-2 transition-all hover:bg-[var(--orange)]"
        >
            <FaArrowUpLong size={24} />
        </div>
    )
}