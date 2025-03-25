import Image from "next/image";
import Link from "next/link";
import FooterLogo from "@/../public/assets/footer_logo.svg";
import { MoveUpRight } from "lucide-react"
import Newsletter from "./NewsLetter";

const socialLinks = [
    { name: "Instagram", link: "https://www.instagram.com/" },
    { name: "Linkedin", link: "https://www.linkedin.com/" },
    { name: "YouTube", link: "https://www.youtube.com/" },
];

const navLinks = [
    { name: "About", link: "#" },
    { name: "Experience", link: "#" },
    { name: "Join Community", link: "/contact" },
]

export default function Footer() {
    return (
        <footer className="flex flex-col gap-10 md:gap-16 px-4 md:px-8 py-8 lg:px-16 lg:py-10">
            <div className="flex flex-col items-center gap-8 md:gap-0 md:items-start md:flex-row md:justify-between">
                <div className="flex flex-col gap-1">
                    <h1 className="text-4xl md:text-[2.5rem] lg:text-6xl font-argaka">
                        Explore <span className="text-[var(--brown)]">India</span> with us
                    </h1>
                    <p className="w-full md:w-2/3 text-xs lg:text-base">
                        Step into the heart of India with curated travel experience that showcases its timeless cultures and tradition.
                    </p>
                </div>

                <Newsletter />
            </div>

            <div className="flex flex-wrap gap-4 items-end justify-between font-medium">
                <div className="flex flex-col gap-2">
                    <p className="text-gray-400 text-sm">Contact at:</p>
                    <Link
                        href='mailto:#'
                        className="text-xl flex items-center gap-2"
                    >
                        info@onetac.org <MoveUpRight />
                    </Link>
                </div>
                <div className="flex items-center gap-6">
                    {
                        navLinks.map((item) => (
                            <Link
                                key={item.name} href={item.link}
                                className="transition-all hover:-translate-y-1 hover:text-[var(--brown)]"
                            >
                                {item.name}
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className="h-fit w-full">
                <Image
                    src={FooterLogo}
                    alt="Logo"
                    width={800}
                    height={500}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="flex flex-col-reverse md:flex-row gap-4 md:items-end justify-between font-medium">
                <p className="text-xs">© {new Date().getFullYear()}. All rights reserved.</p>
                <div className="flex items-center gap-6">
                    {
                        socialLinks.map((link) => (
                            <Link key={link.link} href={link.link} target="_blank" rel="noopener noreferrer"
                                className="transition-all hover:-translate-y-1 hover:text-[var(--brown)]"
                            >
                                {link.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </footer>
    );
};