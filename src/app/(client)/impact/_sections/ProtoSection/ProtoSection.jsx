import Image from "next/image"
import Link from "next/link"
import ProtoImg from '@/../public/assets/impact/prototype.webp'
import HeaderText from "@/Components/Header/Header"
import DescriptionText from "@/Components/Description/Description"

const HeaderContext = `See It in Action:\n Explore the Prototype`

export default function ProtoSection() {
    return (
        <div className="px-4 py-10 md:p-8 lg:p-16">
            <div className="p-6 sm:p-8 xl:p-14 flex flex-col justify-between xl:flex-row gap-8 bg-white rounded-3xl">
                <div className="flex flex-col gap-4 xl:gap-6 2xl:gap-10 xl:w-[45%]">
                    <HeaderText text={HeaderContext} className={'leading-10 md:leading-14 2xl:leading-18'} />
                    <DescriptionText content={"See OneTAC's potential come to life through real-world prototypes. From AI-powered travel discovery to seamless cultural bookings, these prototypes showcase how OneTAC enables innovation across tourism, arts, and culture."} />

                    <div className="flex flex-col sm:flex-row xl:flex-col gap-4">
                        <Link
                            href='#'
                            aria-label="View Traveller Prototype"
                            className={`
                        w-fit z-10 bg-[var(--light-Orange)] border border-white text-base 2xl:text-xl text-[var(--brown)]
                        font-semibold py-2 px-6 xl:px-8 rounded-lg cursor-pointer transition duration-300 shadow-lg
                        hover:-translate-y-2 hover:border-[var(--light-Orange)] hover:shadow-2xl hover:bg-amber-200
                    `}
                        >
                            View Traveller Prototype
                        </Link>
                        <Link
                            href='#'
                            aria-label="View Practitioner Prototype"
                            className={`
                        w-fit z-10 bg-[var(--light-Orange)] border border-white text-base 2xl:text-xl text-[var(--brown)]
                        font-semibold py-2 px-6 xl:px-8 rounded-lg cursor-pointer transition duration-300 shadow-lg
                        hover:-translate-y-2 hover:border-[var(--light-Orange)] hover:shadow-2xl hover:bg-amber-200
                    `}
                        >
                            View  Practitioner Prototype
                        </Link>
                    </div>
                </div>

                <div className="overflow-hidden">
                    <Image
                        src={ProtoImg}
                        alt="proto"
                        width={800}
                        height={800}
                        className="w-full h-full object-contain object-center rounded-3xl"
                    />
                </div>
            </div>
        </div>
    )
}