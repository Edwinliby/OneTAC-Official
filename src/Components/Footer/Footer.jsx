import Link from "next/link";
import Image from "next/image";
import { MoveUpRight } from "lucide-react"
import Newsletter from "./NewsLetter";
import ScrollTop from "./scrollTop";
import Logo from '@/../public/assets/footer_img/logo.svg';
import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedin} from "react-icons/fa6";

const socialLinks = [
    {
        icon: <FaFacebookF size={18} />,
        name: "Instagram",
        link: "https://www.instagram.com/culkeyf/?hl=en/"
    },
    {
        icon: <FaLinkedin size={18} />,
        name: "Linkedin",
        link: "https://www.linkedin.com/company/culkeyf/"
    },
    {
        icon: <FaXTwitter size={18} />,
        name: "Twitter",
        link: "https://x.com/culkeyF"
    },
    {
        icon: <FaYoutube size={18} />,
        name: "YouTube",
        link: "https://www.youtube.com/@culkeyf"
    },
];

const navLinks = [
    { name: "About", link: "/about" },
    { name: "Impact", link: "/impact" },
    { name: "Partners", link: "/partners" },
    { name: "Join Community", link: "/contact" },
]

export default function Footer() {
    return (
        <footer className="flex flex-col gap-10 xl:gap-14 px-4 md:px-8 py-8 lg:px-16 lg:py-10">
            <div className="flex flex-col items-center gap-8 md:gap-0 md:items-start md:flex-row md:justify-between">
                <div className="w-full md:w-2/3 flex flex-col gap-1">
                    <h1 className="w-fit text-4xl md:text-[2.5rem] lg:text-5xl 2xl:text-7xl font-argaka">
                        Explore <span className="text-[var(--brown)]">India</span> with us
                    </h1>
                    <p className="w-full md:w-2/3 text-xs lg:text-base 2xl:text-xl">
                        Step into the heart of India with curated travel experience that showcases its timeless cultures and tradition.
                    </p>
                </div>

                <Newsletter />
            </div>

            <div className="flex flex-wrap flex-row md:flex-row-reverse gap-8 items-end justify-between font-medium">
                <div className="flex flex-col md:items-end gap-2">
                    <p className="text-gray-400 text-sm">Contact at:</p>
                    <Link
                        href='mailto:info@onetac.org'
                        className="text-xl flex items-center gap-2"
                    >
                        info@onetac.org <MoveUpRight />
                    </Link>
                </div>
                <div className="flex items-center gap-6 flex-wrap">
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

            <div className="border-t border-t-[var(--brown)] pt-8 3xl:pt-12 border-dashed flex flex-col md:flex-row gap-8 md:gap-4 md:items-center justify-between">
                <div className="group flex items-center gap-4">
                    <ScrollTop />
                    <div className="h-12 xl:h-16">
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={500}
                            height={500}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
                <div className="group flex items-center gap-4 md:gap-6">
                    {
                        socialLinks.map((link) => (
                            <Link key={link.link} href={link.link} target="_blank" rel="noopener noreferrer"
                                className="transition-all group-active:scale-110 hover:scale-110 text-[var(--brown)] border border-[var(--brown)] p-3 rounded-full"
                            >
                                {link.icon}
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row gap-4 md:items-end justify-between font-medium">
                <p className="text-xs">©
                    {new Date().getFullYear()}. All rights reserved. |
                    <Link href="/privacy-policy" className="hover:text-[var(--brown)]"> Privacy policy</Link>
                </p>
            </div>
        </footer>
    );
};