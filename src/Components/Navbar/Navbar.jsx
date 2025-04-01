'use client'

import { useState, useEffect } from "react";
import WhiteLogo from '@/../public/assets/logo_white.webp';
import ColorLogo from '@/../public/assets/logo_color.webp';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from 'lucide-react'

const navLinks = [
    { name: "About", link: "/about" },
    { name: "Partners", link: "/partners" },
    { name: "Impact", link: "/impact" },
    { name: "Engage with us", link: "/contact" },
];

const menuLinks = [
    { name: "Home", link: "/" },
    { name: "About OneTAC", link: "/about#aboutOneTAC" },
    { name: "The OneTAC Movement Begins", link: "/partners#movementBegins" },
    { name: "OneTAC Collaborative", link: "/partners#collaborative" },
    { name: "Impact & Experience", link: "/impact" },
    { name: "The Market Opportunity", link: "/about#opportunity" },
    { name: "News & Stories", link: "/#news" },
    { name: "OneTAC Brochure", link: "https://onetac.org/wp-content/uploads/2024/11/OneTAC-Concept-Note-Opt.pdf" },
    { name: "Engage with us", link: "/contact" },
];

const socialLinks = [
    { name: "Instagram", link: "https://www.instagram.com/culkeyf/?hl=en/" },
    { name: "Linkedin", link: "https://www.linkedin.com/company/culkeyf/" },
    { name: "Twitter", link: "https://x.com/culkeyF" },
    { name: "YouTube", link: "https://www.youtube.com/@culkeyf" },
]

export default function Navbar() {
    const pathname = usePathname();
    const [isHidden, setIsHidden] = useState(false);
    const [isOutsideHero, setIsOutsideHero] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [currentHash, setCurrentHash] = useState("");

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOutsideHero(pathname === "/privacy-policy");

        const updateHash = () => setCurrentHash(window.location.hash);
        window.addEventListener("hashchange", updateHash);
        updateHash();
        return () => window.removeEventListener("hashchange", updateHash);
    }, [pathname]);

    useEffect(() => {
        if (pathname === "/privacy-policy") {
            setIsOutsideHero(true);
            return;
        }

        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const heroSection = document.getElementById("hero");
            const heroHeight = heroSection ? heroSection.offsetHeight : 0;

            setIsHidden(currentScrollY > lastScrollY && currentScrollY > 200);
            setIsOutsideHero(currentScrollY > heroHeight);

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    return (
        <nav className={`fixed top-0 left-0 w-full px-4 md:px-6 lg:px-8 xl:px-16 py-4 z-50 transition-all duration-300 flex items-center justify-between
        ${isOutsideHero ? 'bg-white shadow-xl shadow-[rgba(0,0,0,0.025)]' : 'bg-gradient-to-b from-[rgba(255,255,255,0.2)] to-transparent'} 
        ${isHidden && !isOpen ? '-translate-y-full' : 'translate-y-0'}`}>
            <Link href="/">
                <Image
                    src={WhiteLogo}
                    alt="logo"
                    draggable={false}
                    width={100}
                    height={100}
                    className={`w-[6rem] h-[3.5rem] 2xl:h-[4.5rem] ${isOutsideHero ? 'hidden' : 'block'}`}
                />
                <Image
                    src={ColorLogo}
                    alt="logo"
                    draggable={false}
                    width={100}
                    height={100}
                    className={`w-[6rem] h-[3.5rem] 2xl:h-[4.5rem] ${isOutsideHero ? 'block' : 'hidden'}`}
                />
            </Link>

            <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6">
                {navLinks.slice(0, 3).map((item) => (
                    <Link
                        href={item.link}
                        key={item.name}
                        className={`font-medium hover:text-[var(--orange)] 2xl:text-xl
                                ${isOutsideHero ? "text-black" : "text-white"}`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <Link
                    href={navLinks[3].link}
                    className={`
                        w-fit z-10 bg-[var(--light-Orange)] border border-white text-base 2xl:text-xl text-[var(--brown)]
                        font-semibold py-2 px-6 xl:px-8 rounded-lg cursor-pointer transition duration-300 shadow-lg
                        hover:-translate-y-2 hover:border-[var(--light-Orange)] hover:shadow-2xl hover:bg-amber-200
                        hidden lg:block
                    `}
                >
                    {navLinks[3].name}
                </Link>

                <div className="flex items-center justify-start relative z-50">
                    <button
                        onClick={toggleNavbar}
                        aria-label="Toggle menu"
                        className={`
                            ${"flex flex-col cursor-pointer w-12 h-12 items-center justify-center space-y-1.5 2xl:space-y-2 group focus:outline-none relative z-50"}
                            ${isOpen ? "md:translate-x-8 rounded-4xl shadow" : ""}
                            `}
                    >
                        <span
                            className={`block h-0.5 2xl:h-1 w-6 2xl:w-8 transition-all duration-300 ease-in-out 
                            ${isOutsideHero || isOpen ? "bg-black" : "bg-white"}
                            ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
                        />
                        <span
                            className={`block h-0.5 2xl:h-1 w-4 2xl:w-6 transition-all duration-300 ease-in-out self-start translate-x-5 2xl:translate-x-4
                            ${isOutsideHero || isOpen ? "bg-black" : "bg-white"}
                            ${isOpen ? 'opacity-0' : ''}`}
                        />
                        <span
                            className={`block h-0.5 2xl:h-1 w-6 2xl:w-8 transition-all duration-300 ease-in-out 
                            ${isOutsideHero || isOpen ? "bg-black" : "bg-white"}
                            ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
                        />
                    </button>
                </div>

                <div
                    className={`fixed top-0 right-0 h-screen w-full md:w-[50%] lg:w-[35%] flex flex-col justify-center pl-2 md:pl-6 bg-white shadow-lg transform transition-transform duration-300 ease-in-out 
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-40`}
                >
                    <div className="flex flex-col gap-6 p-4">
                        {menuLinks.map((item) => {
                            const isActive = (pathname + currentHash) === item.link;
                            return (
                                <Link
                                    href={item.link}
                                    key={item.name}
                                    onClick={toggleNavbar}
                                    className={`text-black flex items-center gap-1 font-medium hover:text-[var(--brown)] text-xl ${isActive ? "text-[var(--brown)]" : ""}`}
                                >
                                    {isActive && <ArrowRight />} {item.name}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="flex items-center flex-wrap gap-4 md:gap-6 absolute bottom-6 left-6">
                        {
                            socialLinks.map((item) => (
                                <Link
                                    href={item.link}
                                    key={item.name}
                                    className={`text-black w-fit font-medium hover:text-[var(--brown)]`}
                                >
                                    {item.name}
                                </Link>
                            ))
                        }
                    </div>
                </div>

                {isOpen && (
                    <div
                        onClick={toggleNavbar}
                        className="fixed h-screen inset-0 bg-[rgba(0,0,0,0.2)] backdrop-blur-xs bg-opacity-50 z-30"
                    />
                )}
            </div>
        </nav>
    );
}