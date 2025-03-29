import Image from "next/image"

export default function Head({ img, title, subTitle }) {
    return (
        <div className="relative h-[27rem] lg:h-[calc(100vh-200px)]" id="hero">
            <div className="absolute bottom-0 left-0 w-full h-full md:h-1/2 z-10 bg-gradient-to-t from-black/50"></div>
            <Image
                src={img}
                alt="hero image"
                draggable={false}
                width={800}
                height={800}
                className="w-full h-full object-cover object-bottom"
            />
            <div className="absolute z-20 md:w-3/4 text-white bottom-0 left-0 right-0 flex flex-col gap-4 p-4 md:p-8 lg:p-16">
                <b className="text-3xl md:text-4xl xl:text-5xl 2xl:w-3/4">
                    {title}
                </b>
                <p className="text-sm lg:text-lg w-full lg:w-3/4">
                    {subTitle}
                </p>
            </div>
        </div>
    )
}