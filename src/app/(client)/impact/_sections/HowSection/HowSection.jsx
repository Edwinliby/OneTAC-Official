import HeaderText from "@/components/Header/HeaderText"
import Card from "./card"
import Image from "next/image"
import Vector from '@/../public/assets/impact/Vector.svg'
import { data } from "./cardData"

export default function HowSection() {
    return (
        <div id="traverlersWin" className="flex flex-col gap-10 md:gap-16 px-4 py-10 md:p-8 lg:p-16">
            <HeaderText text={"How Travelers Win"} />

            <div className="relative flex flex-col gap-4 xl:gap-20 2xl:gap-24 3xl:gap-32">
                <Image
                    src={Vector}
                    alt="vector"
                    width={800}
                    height={800}
                    className="hidden xl:block absolute top-[50%] inset-x-0 -translate-y-1/2 w-[100%] h-full "
                />
                <Card
                    sliceStart={0}
                    sliceEnd={2}
                    items={data}
                    className={"justify-start 2xl:ml-18"}
                />
                <Card
                    sliceStart={2}
                    sliceEnd={4}
                    items={data}
                    className={"justify-end 2xl:mr-24"}
                />
                <Card
                    sliceStart={4}
                    sliceEnd={6}
                    items={data}
                    className={"justify-start 2xl:ml-24"}
                />
            </div>

        </div>
    )
}