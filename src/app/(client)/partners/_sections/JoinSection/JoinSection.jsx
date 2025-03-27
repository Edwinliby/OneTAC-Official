'use client'

import Link from "next/link"

const data = [
    {
        title: "Investors & Funders",
        desc: "Help scale innovation and impact."
    },
    {
        title: "Startups & Tech Innovators",
        desc: "Build, integrate, and expand reach."
    },
    {
        title: "Governments & Public Sector",
        desc: "Digitize, connect, and enhance access."
    },
    {
        title: "Artists & Cultural Organizations",
        desc: "Share stories, grow audiences, thrive."
    },
]

export default function JoinSection() {
    return (
        <div className="relative my-8 px-4 bg-[var(--brown)]/10 h-screen flex items-center justify-center overflow-hidden">
            {/* Center circle code with small interaction */}
            <div className="flex items-center justify-center">
                <div className="bg-white/25 w-[100dvh] h-[100dvh] lg:w-[150dvh] lg:h-[150dvh] p-8 rounded-full flex items-center justify-center border border-[var(--brown)]/10 hover:scale-105 transition duration-300">
                    <div className="bg-white/30 w-[70dvh] h-[70dvh] lg:w-[100dvh] lg:h-[100dvh] p-8 rounded-full flex items-center justify-center border border-[var(--brown)]/10 hover:scale-105 transition duration-300">
                        <div className="bg-white/40 w-[40dvh] h-[40dvh] lg:w-[50dvh] lg:h-[50dvh] p-8 rounded-full flex items-center justify-center border border-[var(--brown)]/10 hover:scale-105 transition duration-300">
                            <div className="bg-white w-40 h-40 hidden md:flex flex-col items-center justify-center p-8 text-lg 
                                              md:text-2xl font-semibold text-center rounded-full border border-[var(--brown)]/10
                                              hover:scale-105 transition duration-300">
                                <p className="text-3xl">Join</p>
                                <span className="text-[var(--orange)] text-xl">OneTAC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="absolute top-4 sm:top-7 text-center text-2xl sm:text-3xl font-semibold text-[var(--brown)]">
                <span className="text-base sm:text-xl md:text-2xl text-black">Together, We Can Build a Future for</span> <br />
                Stories, Experiences, and Livelihoods
            </h1>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-16 xl:gap-36 w-full h-full">
                    {data.map((item, index) => (
                        <div key={index} className="w-full text-center flex justify-center items-center">
                            <div className="bg-white/50 md:bg-transparent rounded-md backdrop-blur-lg md:backdrop-blur-none border border-[var(--brown)]/20 md:border-0
                             w-[95%] lg:w-3/4 p-2 sm:p-4 flex flex-col items-center gap-2">
                                <b className="text-xl sm:text-2xl xl:text-3xl w-full xl:w-[85%]">{item.title}</b>
                                <p className="text-sm sm:text-base">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Link href="/contact" className="w-fit absolute bottom-20 md:bottom-26 xl:bottom-36 text-center w-1/2 text-white bg-[var(--orange)] px-6 py-2 rounded-lg">Partner with us</Link>

            <p className="absolute px-2 bottom-4 sm:bottom-7 text-center text-xs sm:text-base md:w-3/4 xl:w-1/2">
                Support the ONE TAC movement by contributing your time, resources, skills,
                or funding to help communities thrive and experiences flourish.
            </p>
        </div>
    )
}