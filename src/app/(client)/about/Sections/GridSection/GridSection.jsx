import Cubes from "./cube";
import Image from "next/image";
import { Sparkle } from "lucide-react"
import BlockImg from '../../../../../../public/assets/bento/blocks.webp'

const gridLayer = [
    {
        color: "#DEBA77",
        layer: "Personalisation Layer",
        text: "Al recommendations, language translations, chatbots"
    },
    {
        color: "#D9D9D9",
        layer: "Payments Layer",
        text: "Integration of payment gateways, UPI"
    },
    {
        color: "#FFBF48",
        layer: "Transaction Layer",
        text: "Discovery, ordering, fulfillment and post fulfillment of orders/services"
    },
    {
        color: "#FFA600",
        layer: "Data & Assets Layer",
        text: "Standardisation of data recording/retrieval, Consent Management, Licensing Management"
    },
    {
        color: "#020202",
        layer: "Identity & Trust Layer",
        text: "Registries of artists, monuments, sellers, performers, content creators, etc"
    }
]

export default function GridSection() {
    return (
        <div className='flex flex-col px-4 py-8 sm:p-8 lg:p-16 md:mt-4'>
            <div className="flex flex-col items-start gap-8 md:gap-16">
                <h1 className="text-[2rem] md:text-4xl lg:text-5xl font-semibold text-[var(--brown)]">
                    OneTAC Grid
                </h1>

                <div className="w-full">
                    <div className="flex w-full items-start md:items-center md:justify-center lg:justify-between flex-wrap gap-6 md:gap-4 bg-white border border-[var(--brown)]/20 rounded-2xl p-6 md:bg-transparent md:rounded-none md:p-0 md:border-none">
                        <p className="group flex items-center gap-2 font-semibold lg:font-bold md:text-xl xl:text-2xl">
                            <Sparkle size={15} className="block md:hidden bg-[var(--orange)] text-white w-6 h-6 p-1 rounded-4xl group-hover:rotate-180 transform duration-300" />
                            Discoverability & access
                        </p>
                        <div className="relative hidden md:block">
                            <div className="absolute left-1/2 -top-2 -translate-x-1/2  w-2 h-2 bg-[var(--brown)] rounded-full"></div>
                            <span className="w-[2px] h-16 border-l-3 border-dashed border-[var(--brown)]"></span>
                            <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-2 h-2 bg-[var(--brown)] rounded-full"></div>
                        </div>
                        <p className="group flex items-center gap-2 font-semibold lg:font-bold md:text-xl xl:text-2xl">
                            <Sparkle size={15} className="block md:hidden bg-[var(--orange)] text-white w-6 h-6 p-1 rounded-4xl group-hover:rotate-180 transform duration-300" />
                            Trust
                        </p>
                        <div className="relative hidden md:block">
                            <div className="absolute left-1/2 -top-2 -translate-x-1/2  w-2 h-2 bg-[var(--brown)] rounded-full"></div>
                            <span className="w-[2px] h-16 border-l-3 border-dashed border-[var(--brown)]"></span>
                            <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-2 h-2 bg-[var(--brown)] rounded-full"></div>
                        </div>
                        <p className="group flex items-center gap-2 font-semibold lg:font-bold md:text-xl xl:text-2xl">
                            <Sparkle size={15} className="block md:hidden bg-[var(--orange)] text-white w-6 h-6 p-1 rounded-4xl group-hover:rotate-180 transform duration-300" />
                            Data ownership
                        </p>
                        <div className="relative hidden lg:block">
                            <div className="absolute left-1/2 -top-2 -translate-x-1/2  w-2 h-2 bg-[var(--brown)] rounded-full"></div>
                            <span className="w-[2px] h-16 border-l-3 border-dashed border-[var(--brown)]"></span>
                            <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-2 h-2 bg-[var(--brown)] rounded-full"></div>
                        </div>
                        <p className="group flex items-center gap-2 font-semibold lg:font-bold md:text-xl xl:text-2xl">
                            <Sparkle size={15} className="block md:hidden bg-[var(--orange)] text-white w-6 h-6 p-1 rounded-4xl group-hover:rotate-180 transform duration-300" />
                            Context & Personalisation
                        </p>
                    </div>

                    {/* Center Dashed Curved Line */}
                    <div className="hidden md:flex justify-center w-full md:mt-6">
                        <div className="flex justify-between w-full">
                            <span className="w-full ">
                                <svg width="100%" height="50" viewBox="0 0 500 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                    <path d="M2.5,0 C0,35 25,25 100,25 L400,25 C475,25 500,15 495,55"
                                        fill="none"
                                        stroke="var(--brown)"
                                        strokeWidth="2"
                                        strokeDasharray="10,10" />
                                </svg>
                            </span>
                            <span className="w-full scale-x-[-1]">
                                <svg width="100%" height="50" viewBox="0 0 500 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                    <path d="M2.5,0 C0,35 25,25 100,25 L400,25 C475,25 500,15 495,55"
                                        fill="none"
                                        stroke="var(--brown)"
                                        strokeWidth="2"
                                        strokeDasharray="10,10" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Grid Section */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-8 md:mt-12 gap-8 2xl:gap-14">
                <div className="flex flex-col items-start gap-4 w-full xl:w-[60%]">
                    {
                        gridLayer.map(item => (
                            <div key={item.layer} className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 py-4 md:py-2 2xl:py-4">
                                <b className="font-bold text-2xl 2xl:text-3xl w-1/2 whitespace-nowrap">{item.layer}</b>
                                <div className="w-full md:w-1/2 flex items-center gap-8 2xl:gap-14">
                                    <Cubes Color={item.color} />
                                    <p className="text-sm md:text-base">{item.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="w-full md:w-[40%] h-full hidden xl:flex items-center justify-center">
                    <Image
                        src={BlockImg}
                        alt="grid image"
                        width={800}
                        height={800}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </div>
    )
}