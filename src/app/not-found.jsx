import Link from 'next/link';
import Image from 'next/image';

const menuLinks = [
    { name: "Home", link: "/" },
    { name: "About OneTAC", link: "/about" },
    { name: "People and Partnerships", link: "/partners" },
    { name: "Impact & Experience", link: "/impact" },
    { name: "Engage with us", link: "/contact" },
];

export default function NotFound() {
    return (
        <div className="flex flex-col sm:flex-row sm:gap-6 p-4 items-center justify-center min-h-screen m-auto bg-amber-400">
            <div className='h-[15rem] w-[10rem] sm:h-[30rem] sm:w-[15rem]'>
                <Image src="/assets/chai.webp" draggable={false} alt="404" width={800} height={800} className='h-full w-full object-contain' />
            </div>
            <div className='flex flex-col items-center text-center sm:text-left sm:items-start max-w-[500px]'>
                <h1 className='text-[8rem] sm:text-[10rem] font-bold leading-tight'>404</h1>
                <h2 className="text-4xl font-bold text-[var(#1A0F00)] mb-4">Page Not Found</h2>
                <p className="text-lg sm:text-2xl tracking-wide text-[var(#1A0F00)] mb-6">Meanwhile you can visit these pages </p>
                <div className='flex flex-wrap gap-4 justify-center sm:justify-start'>
                    {
                        menuLinks.map((link, index) => (
                            <Link href={link.link} key={index} className="text-[var(#1A0F00)] font-medium hover:-translate-y-2 hover:text-white rounded-md hover:underline underline-offset-4 hover:font-semibold transition duration-300">
                                {link.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
