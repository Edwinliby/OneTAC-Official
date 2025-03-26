import Image from "next/image"

export default function Head({ img, title, subTitle }) {
    return (
        <div className="relative h-[25rem]" id="hero">
            <div className="absolute bottom-0 left-0 w-full h-full md:h-1/2 z-10 bg-gradient-to-t from-black/50"></div>
            <Image
                src={img}
                alt="image"
                width={800}
                height={800}
                className="w-full h-full object-cover"
            />
            <div className="absolute z-20 md:w-3/4 text-white bottom-0 left-0 right-0 flex flex-col gap-4 p-4 md:p-8 lg:p-16">
                <b className="text-2xl sm:text-3xl md:text-4xl md:w-3/4">
                    {title}
                </b>
                <p className="text-xs md:text-base">
                    {subTitle}
                </p>
            </div>
        </div>
    )
}