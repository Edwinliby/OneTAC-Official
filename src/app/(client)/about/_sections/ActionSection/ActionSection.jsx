import Link from "next/link"
import RandomBlock from "./randomBlock"

export default function ActionSection() {
    return (
        <div className="relative flex items-center justify-center">
            <RandomBlock />
            <div className="absolute flex flex-col items-center gap-8 p-4 z-20">
                <h1 className="text-center text-5xl md:text-7xl text-white font-semibold">Join the Movement</h1>
                <div className="flex flex-col items-center gap-4">
                    <div
                        className={`
                        w-fit z-10 bg-[var(--light-Orange)] border border-white text-[var(--brown)]
                        md:text-lg font-semibold py-3 px-10 rounded-lg cursor-pointer transition duration-300 shadow-lg
                        hover:-translate-y-2 hover:border-[var(--light-Orange)] hover:shadow-2xl hover:bg-amber-200
                    `}
                    >
                        <Link href='/impact'>Explore the opportunities</Link>
                    </div>
                    <div
                        className={`
                        w-fit z-10 bg-[var(--light-Orange)] border border-white text-[var(--brown)]
                        md:text-lg font-semibold py-3 px-10 rounded-lg cursor-pointer transition duration-300 shadow-lg
                        hover:-translate-y-2 hover:border-[var(--light-Orange)] hover:shadow-2xl hover:bg-amber-200
                    `}
                    >
                        <Link href='https://southernchronicles.life/' rel="noopener noreferrer" target="_blank">Share your stories</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}